var twitch = window.Twitch.ext;

const itemCache = {};

function getItemData(uid, cb) {
  if (itemCache[uid]) return cb(null, itemCache[uid]);

  const req = new window.XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState !== XMLHttpRequest.DONE) return;

    if (req.status === 400) {
      cb(new Error(`Unknown item ${uid}`));
      return;
    }

    if (req.status !== 200) {
      cb(new Error(`Failed to load item data for ${uid}`));
      return;
    }

    try {
      const res = JSON.parse(req.responseText);
      console.log(res);
      itemCache[uid] = res;
      cb(null, res);
    } catch (err) {
      cb(err);
    }
  };

  req.open('GET', `undermine_data/item_data/${uid}.json`);
  req.send();
}

function buildListItem(uid) {
    const li = document.createElement('li');
    li.addEventListener('mouseover', fixPositions);

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    const nameEl = document.createElement('h3');
    nameEl.innerText = 'Loading...';
    tooltip.appendChild(nameEl);

    const extra = document.createElement('span');
    extra.innerText = '';
    tooltip.appendChild(extra);

    const description = document.createElement('p');
    description.innerText = 'Loading item data';
    tooltip.appendChild(description);

    li.appendChild(tooltip);

    const wikiLink = document.createElement('a');
    wikiLink.target = '_blank';
    wikiLink.href = `https://undermine.gamepedia.com/Special:Search?search=${uid}`;
    
    const img = document.createElement('img');
    img.src = `undermine_data/images/${uid}.png`;
    wikiLink.appendChild(img);

    li.appendChild(wikiLink);

    getItemData(uid, (err, data) => {
      if (err) {
        nameEl.innerText = 'Failed to load';
        extra.innerText = uid;
        description.innerText = err.toString();
        return;
      }

      nameEl.innerText = data.displayName;
      extra.innerText = data.effect;
      description.innerText = data.description;
      wikiLink.href = `https://undermine.gamepedia.com/${data.wiki}`;
    })

    return li;
}

function fixPositions() {
    const container = $(".scrolly")[0];
    const rect = container.getBoundingClientRect();

    const floaters = $("li:hover div");
    [...floaters].forEach((div) => {
        const divRect = div.getBoundingClientRect();
        const parentRect = div.parentElement.getBoundingClientRect();

        const divRight = parentRect.left + divRect.width;
        div.style.right = null;
        if (divRight > rect.right - 20) {
            div.style.right = `0px`;
        }

        const divTop = parentRect.top - divRect.height;
        div.style.top = divTop < rect.top
            ? `${parentRect.height + 5}px`
            : `-${divRect.height + 10}px`;
    });
}

$(function() {
    $("#itemLink").click(() => {
	    $("#itemLink").hide();
	    $("#items").show();
    });

    $("#itemClose").click(() => {
	    $("#itemLink").show();
	    $("#items").hide();
    });
});

let firstBC = true;
twitch.listen('broadcast', function(target, contentType, message) {
    if (firstBC) $("#itemLink")[0].style.display = 'block';
    firstBC = false;

    const res = JSON.parse(message);

    $("#curses").empty();
    res.curses.forEach((item) => {
        $("#curses").append(buildListItem(item));
    });

    $("#relics").empty();
    res.relics.forEach((item) => {
        $("#relics").append(buildListItem(item));
    });

    $("#blessings").empty();
    res.blessings.forEach((item) => {
        $("#blessings").append(buildListItem(item));
    });

    $("#potions").empty();
    res.potions.forEach((item) => {
        $("#potions").append(buildListItem(item));
    });
});
