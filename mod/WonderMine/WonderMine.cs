using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using Thor;
using UnderMineControl.API;
using UnityEngine;
using UnityEngine.Networking;

class CurrentItems
{
    public List<string> relics = new List<string>();
    public List<string> blessings = new List<string>();
    public List<string> curses = new List<string>();
    public List<string> potions = new List<string>();
}

class BroadcastRequest
{
    public string content_type = "application/json";
    public string message;
    public string[] targets = { "broadcast" };

    public BroadcastRequest(string message)
    {
        this.message = message;
    }
}

class Token
{
    public string channel_id;
}

class ItemDataComparer : IComparer<ItemData>
{
    public int Compare(ItemData a, ItemData b)
    {
        return string.Compare(a.guid, b.guid);
    }
}

public class UnderChat : Mod
{
    private IEnumerator loop;
    float lastBroadcast;
    List<ItemData> lastItems;

    string userID;
    string jwt;
    string pastedToken;

    public override void Initialize()
    {
        string appdata = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
        string tokenFile = Path.Combine(appdata, "WonderMine", "token.txt");

        try
        {
            using (StreamReader reader = new StreamReader(tokenFile))
            {
                pastedToken = reader.ReadToEnd();
                HandleLogin(pastedToken);
            }
        } catch (Exception) { /* Do nothing (file probably doesn't exist) */}

        MenuRenderer.Text = "WonderMine";
        MenuRenderer.SetDefaultSkin()
            .AddButton("Login to Twitch", (c) => Process.Start("https://wondermine.3ocene.com"))
            .AddTextBox("Paste Login Token", (t, c) => pastedToken = t, pastedToken, true)
            .AddButton("Set access token", (c) => HandleLogin(pastedToken));

        loop = UpdateLoop().GetEnumerator();
        Events.OnGameUpdated += OnGameUpdated;
    }

    private void OnGameUpdated(object sender, IGame e)
    {
        try
        {
            MenuRenderer.Show = GameInstance.Game.State == Game.GameState.None;

            if (jwt == null || userID == null) return;

            if (GameInstance.Game.State != Game.GameState.Playing) return;
            if (Player.Health == null) return;
            if (Player.Inventory == null) return;
            loop.MoveNext();
        }
        catch (Exception err)
        {
            Logger.Error(err.ToString());
        }
    }

    private void HandleLogin(string token)
    {
        try
        {
            var splitToken = token.Split('.');
            if (splitToken.Length != 3) throw new Exception("Token is the wrong length");

            var dataEncoded = splitToken[1];

            var padLength = 4 - dataEncoded.Length % 4;
            if (padLength < 4)
            {
                dataEncoded += new string('=', padLength);
            }

            var dataBytes = Convert.FromBase64String(dataEncoded);
            var parsedToken = JsonUtility.FromJson<Token>(Encoding.UTF8.GetString(dataBytes));
            jwt = Regex.Replace(token, @"[^a-zA-Z0-9_.-]", string.Empty);
            userID = parsedToken.channel_id;

            Logger.Debug(userID);
        } catch (Exception e)
        {
            MenuRenderer.AddLabel("Failed to parse token");
            Logger.Error(e.ToString());
            return;
        }

        try
        {
            string appdata = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
            string workDir = Path.Combine(appdata, "WonderMine");
            string tokenFile = Path.Combine(workDir, "token.txt");

            Directory.CreateDirectory(workDir);

            using (StreamWriter writer = new StreamWriter(tokenFile))
            {
                writer.WriteLine(jwt);
            }

        } catch (Exception e)
        {
            MenuRenderer.AddLabel("Failed to save token to disk (you can still use the mod)");
            Logger.Error(e.ToString());
        }
    }

    private bool CompareLists(List<ItemData> a, List<ItemData> b)
    {
        if (a == null || b == null) return false;
        if (a.Count != b.Count) return false;

        for (var i = 0; i < a.Count; i++)
        {
            if (a[i].guid != b[i].guid) return false;
        }

        return true;
    }

    private IEnumerable UpdateLoop()
    {
        while (true)
        {
            yield return null;

            List<ItemData> items = new List<ItemData>();
            Player.Health.GetStatusEffectData(items, true);
            Player.Inventory.GetEquipmentData(items);

            items.Sort(new ItemDataComparer());

            if (CompareLists(items, lastItems) && Time.time < lastBroadcast + 10) continue;
            lastItems = items;
            lastBroadcast = Time.time;

            var currentItems = new CurrentItems();

            foreach (var item in items)
            {
                Logger.Debug(item.guid);
                if (item == null) continue;

                if (item.Hint.HasFlag(ItemData.ItemHint.Relic))
                {
                    currentItems.relics.Add(item.guid);
                }

                if (item.Hint.HasFlag(ItemData.ItemHint.Blessing))
                {
                    currentItems.blessings.Add(item.guid);
                }

                if (item.Hint.HasFlag(ItemData.ItemHint.Curse))
                {
                    currentItems.curses.Add(item.guid);
                }

                if (item.Hint.HasFlag(ItemData.ItemHint.Potion))
                {
                    currentItems.potions.Add(item.guid);
                }
            }

            var message = JsonUtility.ToJson(currentItems);
            var broadcastRequest = new BroadcastRequest(message);
            var req = JsonUtility.ToJson(broadcastRequest);
            var reqBytes = Encoding.UTF8.GetBytes(req);
            var url = $"https://api.twitch.tv/v5/extensions/message/{userID}";

            UnityWebRequest www = new UnityWebRequest(url, UnityWebRequest.kHttpVerbPOST);
            www.uploadHandler = (UploadHandler)new UploadHandlerRaw(reqBytes);
            www.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();
            www.SetRequestHeader("Content-Type", "application/json");
            www.SetRequestHeader("Client-ID", "5kgu34ujbt2cqtm8endlhrjbkiuqgi");
            Logger.Debug($"Bearer {jwt}");
            www.SetRequestHeader("Authorization", $"Bearer {jwt}");

            var asyncOperation = www.SendWebRequest();

            while (!asyncOperation.isDone) yield return null;

            var download = www.downloadHandler;
            Logger.Debug(download.text);

            if (www.isNetworkError || www.isHttpError)
            {
                Logger.Debug(www.error);
            }
            else
            {
                Logger.Debug("Form upload complete!");
            }

            www.Dispose();
        }
    }
}