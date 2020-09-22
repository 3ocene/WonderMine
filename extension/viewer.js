var twitch = window.Twitch.ext;

window.items = {
  "038c0066e235445a84153e8c9c450522": {
    "guid": "038c0066e235445a84153e8c9c450522",
    "name": "PeasantJournal",
    "displayName": "Journal",
    "wiki": "Journal",
    "description": "A blank journal enchanted by Arkanos. It automatically inscribes everything its bearer senses, so there is no need to put pen to paper. It is passed on to new peasants by the canary along with the goldsack. This way peasants can know what their predecessors witnessed, and maybe not share in their fate.",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "b4a0cc89545946efbfc1145b6c5b340e": {
    "guid": "b4a0cc89545946efbfc1145b6c5b340e",
    "name": "PickaxeBasic",
    "displayName": "Pickaxe",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "9cd17d7a32ae40eeb46b5ea532ef0d28": {
    "guid": "9cd17d7a32ae40eeb46b5ea532ef0d28",
    "name": "BasicGloves",
    "displayName": "Gloves",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "a51cfa33f5a24ea789549412a0ff9dd5": {
    "guid": "a51cfa33f5a24ea789549412a0ff9dd5",
    "name": "BasicSack",
    "displayName": "Sack",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "5997e537696249d2b4a4f4923eaf1f1e": {
    "guid": "5997e537696249d2b4a4f4923eaf1f1e",
    "name": "BasicBombs",
    "displayName": "Bombs",
    "wiki": "Bomb",
    "description": "There is a warning label affixed to the bottom that reads, \"Use under adult supervision.\"",
    "effect": "Deals damage and destroys rocks, as well as other objects",
    "slot": "bomb",
    "attributes": ["misc", "common"]
  },
  "0158e3a07f11494b8b4f683e94ebf32f": {
    "guid": "0158e3a07f11494b8b4f683e94ebf32f",
    "name": "Invigorated",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "fd134fd7009445e78e01661d2dc582b9": {
    "guid": "fd134fd7009445e78e01661d2dc582b9",
    "name": "SagittaBuff",
    "diplayName": "Sagitta",
    "wiki": "Sagitta",
    "description": "A drawn arrow holds the energy to destroy its target. Guide it.",
    "effect": "Enemies explode in arrows after a critical strike",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "9bd05ba36666459dae1c6d859f88d722": {
    "guid": "9bd05ba36666459dae1c6d859f88d722",
    "name": "AraBuff",
    "displayName": "Ara",
    "wiki": "Ara",
    "description": "Also known as \"The Altar.\" This constellation protects against bad omens, for a while.",
    "effect": "Consumes a future curse after praying",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "bd847ee2c55444f1a3736b83c65d4b53": {
    "guid": "bd847ee2c55444f1a3736b83c65d4b53",
    "name": "CanisMajorBuff",
    "displayName": "Canis Major",
    "wiki": "Canis_Major",
    "description": "The dogs of dogs. Strong, loyal, and above all else, fierce.",
    "effect": "Crits temporarily increase crit chance",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "555eebcb91dd42bc8aef0c1e22e6bcfa": {
    "guid": "555eebcb91dd42bc8aef0c1e22e6bcfa",
    "name": "UrsaMajorBuff",
    "displayName": "Ursa Major",
    "wiki": "Ursa_Major",
    "description": "Consume now, for the winter is long and the landscape desolate.",
    "effect": "Increases max health after eating food",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "b0840502088a4087b27e621c60fd808e": {
    "guid": "b0840502088a4087b27e621c60fd808e",
    "name": "CurseEater",
    "displayName": "Curse Eater",
    "wiki": "Lesser_Demon",
    "effect": "Removes a curse after defeating enemies and stores it for later.",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "f33ee3e24f3e4aae86541892a84a6fd3": {
    "guid": "f33ee3e24f3e4aae86541892a84a6fd3",
    "name": "Radiance",
    "displayName": "Radiance",
    "wiki": "Sol%27s_Phoenix",
    "effect": "Whenever the Phoenix heals the peasant it applies an immolation effect that burns nearby enemies",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "fa316b4c8f0143a78721a4de9582f428": {
    "guid": "fa316b4c8f0143a78721a4de9582f428",
    "name": "Rebirth",
    "displayName": "Rebirth",
    "wiki": "Sol%27s_Phoenix",
    "effect": "The Phoenix will resurrect the peasant once when they fall",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "ae28d25e777c4a3798a06ef08270a933": {
    "guid": "ae28d25e777c4a3798a06ef08270a933",
    "name": "CrystalFire",
    "displayName": "Seertooth",
    "wiki": "Seertooth",
    "description": "Named after the legendary fire lord, this rare rock is extremely hot to the touch.",
    "effect": "Imbue your weapon with fire",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "db74061ad7994cfe81f8bd40d276b544": {
    "guid": "db74061ad7994cfe81f8bd40d276b544",
    "name": "CrystalLightning",
    "displayName": "Electrorock",
    "wiki": "Electrorock",
    "description": "Originally discovered by the geologist Moog, who was later able to synthesize it using custom built tools.",
    "effect": "Imbue your weapon with lightning",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "5475a92bea384938b654c9aa6a2e0fd1": {
    "guid": "5475a92bea384938b654c9aa6a2e0fd1",
    "name": "MapDungeonWarp",
    "displayName": "Dungeon Map",
    "wiki": "Dungeon_Map",
    "description": "Located at the bottom of the goldmine is a secret entrance to the dungeon of Delvemore Castle. This is the only entrance, and it has been assigned Guard Captain Toadvine and his partner, the priest Bathcat, as its guards. Many criminals from throughout the kingdom are locked away in the dungeon. For especially dangerous criminals, or those that commit acts that particularly upset the king, special subfloor cells have been constructed.",
    "effect": "Unlocks fast travel to The Delvemore Dungeon",
    "slot": "artifact",
    "attributes": ["item", "artifact", "common"]
  },
  "c3eb2253994547fc9daed50ba6100add": {
    "guid": "c3eb2253994547fc9daed50ba6100add",
    "name": "MapHallWarp",
    "displayName": "Halls Map",
    "wiki": "Halls_Map",
    "description": "The haunted halls have served many purposes and many masters over the centuries. They were originally built as a mausoleum for the royal family. Centuries later, and long after the royal family changed over, mages and alchemists setup libraries and labs. They had been run aground for their twisted ideas and propensity for the dark arts. Now the halls are home to no one, other than the twisted creations of blasphemers.",
    "effect": "Unlocks fast travel to The Halls of Din",
    "slot": "artifact",
    "attributes": ["item", "artifact", "common"]
  },
  "93bd86b718e74b02b7ec0d847c4a3f96": {
    "guid": "93bd86b718e74b02b7ec0d847c4a3f96",
    "name": "MapCavernWarp",
    "displayName": "Caverns Map",
    "wiki": "Caverns_Map",
    "description": "Beyond the Halls of Din are the Shimmering Caverns, a labyrinth of bright crystal and sparkling sand. The caverns have seen very little human activity, but there are remnants of some civilization, long dead, or long left. After some study, it seems the sand in the caverns may be the remnants of Scales, pulverized over the centuries into shimmering dust.",
    "effect": "Unlocks fast travel to The Shimmering Caverns",
    "slot": "artifact",
    "attributes": ["item", "artifact", "common"]
  },
  "44fb9ed14905472ba6e2e9bd2c28c840": {
    "guid": "44fb9ed14905472ba6e2e9bd2c28c840",
    "name": "MapCoreWarp",
    "displayName": "Core Map",
    "wiki": "Core_Map",
    "description": "The Golden Core has been a source of mystery for all of recorded history. Many expeditions of brave adventurers have been sent off to explore it, but none return. Its dangers are countless. The heat is intense, the creatures are aggressive and deadly, and it is as deep as the Undermine goes. At least, as far as anyone knows.",
    "effect": "Unlocks fast travel to The Golden Core",
    "slot": "artifact",
    "attributes": ["item", "artifact", "common"]
  },
  "dda07778dd344b97a662927089fcaf67": {
    "guid": "dda07778dd344b97a662927089fcaf67",
    "name": "CircinusBuff",
    "displayName": "Circinus Buff",
    "wiki": "Circinus",
    "description": "An explorer's tool that reveals any and all secrets.",
    "effect": "Temporarily reveals secret rooms, secret rooms can have secret rooms",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "8cac0bee0307454181fd8b6f5a80ed1d": {
    "guid": "8cac0bee0307454181fd8b6f5a80ed1d",
    "name": "Condemn",
    "slot": "none",
    "attributes": ["misc", "common"]
  },
  "3771da94280f49959634ebc9bc7098a4": {
    "guid": "3771da94280f49959634ebc9bc7098a4",
    "name": "HealthS",
    "displayName": "Medium Rare Steak",
    "wiki": "Medium_Rare_Steak",
    "description": "\"Only a heathen would order meat well done.\" - Griswold, The Collector",
    "effect": "Restores a small amount of health",
    "slot": "food",
    "attributes": ["item", "health", "common"]
  },
  "6e754dce0fcb4e14bc31cdedd7d322ad": {
    "guid": "6e754dce0fcb4e14bc31cdedd7d322ad",
    "name": "HealthSCooked",
    "displayName": "Well Done Steak",
    "wiki": "Well_Done_Steak",
    "description": "\"Bleh!\" - Griswold, the Collector",
    "effect": "Restores a small amount of health",
    "slot": "food",
    "attributes": ["item", "health", "common"]
  },
  "1d4c708343cd4744878392a04b82dec6": {
    "guid": "1d4c708343cd4744878392a04b82dec6",
    "name": "TG_HealthS",
    "slot": "food",
    "attributes": ["item", "health", "common"]
  },
  "6e0afa0846d640e2a42362ac1bb4b555": {
    "guid": "6e0afa0846d640e2a42362ac1bb4b555",
    "name": "TG_HealthSCooked",
    "slot": "food",
    "attributes": ["item", "health", "common"]
  },
  "5d1d5865fd7b4353b3b43fe0d81b7960": {
    "guid": "5d1d5865fd7b4353b3b43fe0d81b7960",
    "name": "HealthM",
    "displayName": "Fish Kebab",
    "wiki": "Fish_Kebab",
    "description": "A food imported from a far away island of paradise.",
    "effect": "Restores a moderate amount of health",
    "slot": "food",
    "attributes": ["item", "health", "common"]
  },
  "602fe3bfe34a4405afb54189d6790b6b": {
    "guid": "602fe3bfe34a4405afb54189d6790b6b",
    "name": "HealthMCooked",
    "displayName": "Cajun Fish Kebab",
    "wiki": "Cajun_Fish_Kebab",
    "desription": "Some call it burned, others call it caramelized.",
    "effect": "Restores a moderate amount of health",
    "slot": "food",
    "attributes": ["item", "health", "common"]
  },
  "9b997ec46fab475d82d11217a3d9409a": {
    "guid": "9b997ec46fab475d82d11217a3d9409a",
    "name": "TG_HealthM",
    "slot": "food",
    "attributes": ["item", "health", "common"]
  },
  "4b85cb8deca84dddbc23aee55d8531ab": {
    "guid": "4b85cb8deca84dddbc23aee55d8531ab",
    "name": "TG_HealthMCooked",
    "slot": "food",
    "attributes": ["item", "health", "common"]
  },
  "e218308da36941de8705ba950e0455f3": {
    "guid": "e218308da36941de8705ba950e0455f3",
    "name": "HealthL",
    "displayName": "Ham Shank",
    "wiki": "Ham_Shank",
    "description": "Meat from a wall always tastes better than meat you have to earn yourself.",
    "effect": "Restores a large amount of health",
    "slot": "food",
    "attributes": ["item", "health", "common"]
  },
  "2d68178db5d0482c8919cc676f87a57c": {
    "guid": "2d68178db5d0482c8919cc676f87a57c",
    "name": "HealthLCooked",
    "displayName": "Roasted Ham Shank",
    "wiki": "Roasted_Ham_Shank",
    "description": "Roasted to perfection. First verbally, and then physically.",
    "effect": "Restores a large amount of health",
    "slot": "food",
    "attributes": ["item", "health", "common"]
  },
  "3e722188c06c4c878c20c8b649a7f2a8": {
    "guid": "3e722188c06c4c878c20c8b649a7f2a8",
    "name": "TG_HealthL",
    "slot": "food",
    "attributes": ["item", "health", "common"]
  },
  "6e65bf8e0ce64bb3a9396af1ead990c0": {
    "guid": "6e65bf8e0ce64bb3a9396af1ead990c0",
    "name": "TG_HealthLCooked",
    "slot": "food",
    "attributes": ["item", "health", "common"]
  },
  "c82f660a0fbd4eb983e98d5896253e09": {
    "guid": "c82f660a0fbd4eb983e98d5896253e09",
    "name": "Key",
    "displayName": "Key",
    "wiki": "Key",
    "description": "Inscribed with the crest of the Kingdom of Delvemore: a rampant liger.",
    "effect": "Unlocks chests, doors and other locked objects",
    "slot": "item",
    "attributes": ["key", "item", "basic", "common"]
  },
  "32d2db84cca547699565e949c6815f06": {
    "guid": "32d2db84cca547699565e949c6815f06",
    "name": "KeyRing",
    "displayName": "Key Ring",
    "wiki": "Key_Ring",
    "description": "Jangles pleasantly.",
    "effect": "Full of keys",
    "slot": "item",
    "attributes": ["key", "item", "basic", "common"]
  },
  "8d0acbcdb33a46a9bfa9c623e8be72e6": {
    "guid": "8d0acbcdb33a46a9bfa9c623e8be72e6",
    "name": "Bomb",
    "displayName": "Bomb",
    "wiki": "Bomb",
    "description": "There is a warning label affixed to the bottom that reads, \"Use under adult supervision.\"",
    "effect": "Deals damage and destroys rocks, as well as other objects",
    "slot": "item",
    "attributes": ["bomb", "item", "basic", "common"]
  },
  "0f53c763ed3b4c77bceaa4853f95ead0": {
    "guid": "0f53c763ed3b4c77bceaa4853f95ead0",
    "name": "BombBag",
    "displayName": "Bag O' Bombs",
    "wiki": "Bag_O%27_Bombs",
    "description": "A well worn bag, full of bombs, and covered in black powder.",
    "effect": "Full of bombs",
    "slot": "item",
    "attributes": ["bomb", "item", "basic", "common"]
  },
  "dd61c0367bbf41f9bb86a85c1e7b0aae": {
    "guid": "dd61c0367bbf41f9bb86a85c1e7b0aae",
    "name": "Talisman",
    "displayName": "Talisman",
    "wiki": "Talisman",
    "description": "A blessed trinket that wards off spirits, demons, and other nasty things.",
    "effect": "Removes a curse",
    "slot": "item",
    "attributes": ["item", "talisman", "basic", "common"]
  },
  "c0ee06997e624cd88c68171930159fa1": {
    "guid": "c0ee06997e624cd88c68171930159fa1",
    "name": "ArmorShard",
    "displayName": "Armor Shard",
    "wiki": "Armor_Shard",
    "description": "\"Just a few hundred more of these bad boys and you'll have a real piece of armor.\" - Wayland, the Blacksmith",
    "effect": "Refills a point of armor",
    "slot": "item",
    "attributes": ["item", "armorshard", "basic", "common"]
  },
  "f3c6fcf6f86a44178c4649f71fb5d18f": {
    "guid": "f3c6fcf6f86a44178c4649f71fb5d18f",
    "name": "TincturePotion",
    "displayName": "Tincture",
    "wiki": "Tincture",
    "description": "Made from dissolving ground, dried canaba leaf in alcohol.",
    "effect": "Recovers health",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "27b4611c53e04c0a9d771b76d47d7deb": {
    "guid": "27b4611c53e04c0a9d771b76d47d7deb",
    "name": "ApprenticesTincturePotion",
    "displayName": "Apprentice's Tincture",
    "wiki": "Apprentice%27s_Tincture",
    "description": "A healing potion created by an apprentice who hasn't quite perfected their craft.",
    "effect": "Recovers a random amount of health",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "cea67360abf84347a264ef64ed806e58": {
    "guid": "cea67360abf84347a264ef64ed806e58",
    "name": "SalvagingSludgePotion",
    "displayName": "Salvaging Sludge",
    "wiki": "Salvaging_Sludge",
    "description": "The liquid moves slowly. Often requiring a knife be inserted into the bottle to get things moving.",
    "effect": "Recover health for each carried curse",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "bfe7c47be6fc4bdbb86e364a6b1cf076": {
    "guid": "bfe7c47be6fc4bdbb86e364a6b1cf076",
    "name": "RegenPotion",
    "displayName": "Troll Sweat",
    "wiki": "Troll_Sweat",
    "description": "\"You want to make sure your troll is hydrated if you're to extract the good stuff.\" - Dirk, the Alchemist",
    "effect": "Regenerate health over time",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "d2c408e370584302b135fc159d6b0b25": {
    "guid": "d2c408e370584302b135fc159d6b0b25",
    "name": "GhostlyIchorPotion",
    "displayName": "Ghostly Ichor",
    "wiki": "Ghostly_Ichor",
    "description": "Scentless fumes arise from the liquid, rejuvenating tired bones.",
    "effect": "Heal over time for each curse",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "db3a699d040b4fd6a4a64399f1275d61": {
    "guid": "db3a699d040b4fd6a4a64399f1275d61",
    "name": "CureAllPotion",
    "displayName": "Cure All",
    "wiki": "Cure_All",
    "description": "\"You get healed, and you get healed... you all get healed!\" - Black Rabbit",
    "effect": "Create a circle of healing",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "a3f7691e471243ed899c52b5ae1bc2de": {
    "guid": "a3f7691e471243ed899c52b5ae1bc2de",
    "name": "CoffeePotion",
    "displayName": "Coffee",
    "wiki": "Coffee",
    "description": "Peasants often drink something called miner's coffee. Brewed in a process you don't want to know.",
    "effect": "Recover health proportional to missing health",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "f84e9f7aa7b04c648a08c6b75eebaf2e": {
    "guid": "f84e9f7aa7b04c648a08c6b75eebaf2e",
    "name": "ElixirPotion",
    "displayName": "Elixir",
    "wiki": "Elixir",
    "description": "A potion of such extreme value that they are often hoarded and never used.",
    "effect": "Restores all missing health",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "27497c3cdd91494ba066eb45ee59d528": {
    "guid": "27497c3cdd91494ba066eb45ee59d528",
    "name": "PartyPopcornPotion",
    "displayName": "Rainbow Kernels",
    "wiki": "Rainbow_Kernels",
    "description": "These kernels are ready to party.",
    "effect": "Duplicate almost everything in the room",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "0455a3d8711146e3a479e71d4d37954b": {
    "guid": "0455a3d8711146e3a479e71d4d37954b",
    "name": "GoldPopcornPotion",
    "displayName": "Golden Kernels",
    "wiki": "Golden_Kernels",
    "description": "A vial of golden popcorn kernels. They vibrate with anticipation.",
    "effect": "Duplicate all gold in the room",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "dc421ae2fb974a01b8cc4b2a9093244e": {
    "guid": "dc421ae2fb974a01b8cc4b2a9093244e",
    "name": "ItemPopcornPotion",
    "displayName": "Popcorn Kernels",
    "wiki": "Popcorn_Kernels",
    "description": "A vial of popcorn kernels. They vibrate with anticipation.",
    "effect": "Duplicate all basic items in the room",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "908bacbc988a46559da7ef9f4fe8e042": {
    "guid": "908bacbc988a46559da7ef9f4fe8e042",
    "name": "FoodPopcornPotion",
    "displayName": "Seasoned Kernels",
    "wiki": "Seasoned_Kernels",
    "description": "A vial of well seasoned popcorn kernels. They vibrate with anticipation.",
    "effect": "Duplicate all food in the room",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "5638e38a67e04f4eaec6473d5042890f": {
    "guid": "5638e38a67e04f4eaec6473d5042890f",
    "name": "WhiplashPotion",
    "displayName": "Whiplash Serum",
    "wiki": "Whiplash_Serum",
    "description": "Wrix developed a potion that matches one's throwing form perfectly with that of the goblin bat riders of Urr.",
    "effect": "Temporarily increases throw damage",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "fb789e8f36a349f1a71ceb2e9c1e3f46": {
    "guid": "fb789e8f36a349f1a71ceb2e9c1e3f46",
    "name": "StrengthPotion",
    "displayName": "Strength Serum",
    "wiki": "Strength_Serum",
    "description": "Developed by the goblin alchemist Wrix who studied and was inspired by the strength of the feral orcs.",
    "effect": "Temporarily increases swing damage",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "5178abb3de614cb59411b8144fd2dc32": {
    "guid": "5178abb3de614cb59411b8144fd2dc32",
    "name": "SavagryPotion",
    "displayName": "Savagery Serum",
    "wiki": "Savagery_Serum",
    "description": "There is no secret to this potion. It is simply orc blood, extracted while under the influence of bloodlust. That doesn't make it easy to come by though.",
    "effect": "Temporarily increases critical chance",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "00772a2e1a7d4755a76e8183b1d6b0ce": {
    "guid": "00772a2e1a7d4755a76e8183b1d6b0ce",
    "name": "AlacrityPotion",
    "displayName": "Alacrity Serum",
    "wiki": "Alacrity_Serum",
    "description": "Some say that the origins of this potion lead back to a goblin alchemist and that the recipe was stolen by the human kingdom of Delvemore.",
    "effect": "Temporarily increases attack speed",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "44cd9c54d22c4ab289b5edf7b4fe40f4": {
    "guid": "44cd9c54d22c4ab289b5edf7b4fe40f4",
    "name": "CleaveSerumPotion",
    "displayName": "Sundering Serum",
    "wiki": "Sundering Serum",
    "description": "A common potion found in goblin logging camps.",
    "effect": "Temporarily increases swing size",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "fe0fbfc6bceb4a2f91ea280ba82f7d38": {
    "guid": "fe0fbfc6bceb4a2f91ea280ba82f7d38",
    "name": "GustSerumPotion",
    "displayName": "Cyclonic Serum",
    "wiki": "Cyclonic_Serum",
    "description": "The brewing process begins with capturing a powerful gust of wind from atop Mt. Thessal.",
    "effect": "Temporarily increases throw size",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "617b7758377d4230a24823645d3898f4": {
    "guid": "617b7758377d4230a24823645d3898f4",
    "name": "HealthSerumPotion",
    "displayName": "Durability Serum",
    "wiki": "Durability_Serum",
    "description": "The first, unrefined versions were made by coastal trolls that would mix crushed turtle shells with their own blood.",
    "effect": "Temporarily increases health",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "df251e38396f44119823faa3840db809": {
    "guid": "df251e38396f44119823faa3840db809",
    "name": "DecursePotion",
    "displayName": "Holy Water",
    "wiki": "Holy_Water",
    "description": "Apothecaries often overcharge for holy water knowing they have the market cornered.",
    "effect": "Remove a curse",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "e99410fecfac4015b5504ec3b87b5cd0": {
    "guid": "e99410fecfac4015b5504ec3b87b5cd0",
    "name": "PurgePotion",
    "displayName": "Purge Potion",
    "wiki": "Purge_Potion",
    "description": "Sometimes the good must suffer in order for evil to be purged from the world.",
    "effect": "Removes a curse and deals 75 damage.",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "2d9d51a29ebe40a99d37445de1954951": {
    "guid": "2d9d51a29ebe40a99d37445de1954951",
    "name": "PurificationPotion",
    "displayName": "Purification Potion",
    "wiki": "Purification_Potion",
    "description": "To obtain absolution, one must purge themselves of all worldly attachments.",
    "effect": "Removes all curses, bombs, keys, and sets health to 1",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "7ca4f0f6567c4b348fd6ccae072dbded": {
    "guid": "7ca4f0f6567c4b348fd6ccae072dbded",
    "name": "Aether",
    "displayName": "Aether",
    "wiki": "Aether",
    "description": "An exceptionally hard to find potion, as there is only a single alchemist in the kingdom that knows its recipe.",
    "effect": "Remove a specific curse",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "28737e052b414273a67aca33267fc2e7": {
    "guid": "28737e052b414273a67aca33267fc2e7",
    "name": "Absolution",
    "displayName": "Absolution",
    "wiki": "Absolution",
    "description": "A powerful potion that works under oddly specific conditions.",
    "effect": "If you have exactly 5 curses, removes 5 curses",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "b0dd99d6f5184fb49df441af4bf298a5": {
    "guid": "b0dd99d6f5184fb49df441af4bf298a5",
    "name": "BombDoublingPotion",
    "displayName": "Doubling Saison",
    "wiki": "Doubling_Saison",
    "description": "A farmhouse style brew, with a clean taste and low alcohol content. Served as a clean source of hydration for peasants.",
    "effect": "Double your bombs",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "f34771cdd3514f379f42355fb1b4a41d": {
    "guid": "f34771cdd3514f379f42355fb1b4a41d",
    "name": "SwapPotion",
    "displayName": "Impish Key Bomb",
    "wiki": "Impish_Key_Bomb",
    "description": "\"I'm not sure if it actually changes your items, or if it just messes you up so bad you think it did.\" - Dirk, The Alchemist",
    "effect": "Swap your items around",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "20d260544d224607b1f2363d06def2a0": {
    "guid": "20d260544d224607b1f2363d06def2a0",
    "name": "IronGlazePotion",
    "displayName": "Iron Glaze",
    "wiki": "Iron_Glaze",
    "description": "Instantly reacts with iron, making it pliable without increasing its temperature.",
    "effect": "Average the number of held keys and bombs",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "2caf27e525fa4787bd629282ef202094": {
    "guid": "2caf27e525fa4787bd629282ef202094",
    "name": "HolyGlaze",
    "displayName": "Holy Glaze",
    "wiki": "Holy_Glaze",
    "description": "Peasants that don't diversify their skill sets often end up terminated. Killed that is.",
    "effect": "Average the levels of all blessings",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "15ca0afa442849328a5a8ff6411b301a": {
    "guid": "15ca0afa442849328a5a8ff6411b301a",
    "name": "AmbrosiaPotion",
    "displayName": "Ambrosia",
    "wiki": "Ambrosia",
    "description": "Actually a very secular drink, made with blended grass and orange juice.",
    "effect": "Double the level of a random blessing",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "87304ff317824d638d8c2a591b5ce37b": {
    "guid": "87304ff317824d638d8c2a591b5ce37b",
    "name": "NitroglycerinPotion",
    "displayName": "Nitroglycerin",
    "wiki": "Nitroglycerin",
    "description": "Ultra miniaturization and rapid enlargement are two critical fields of study in alchemy. They are both taught at the Arcane Sanctum.",
    "effect": "Drop bombs continuously",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "1c0df4b6c9f2494c8eb2376ec97ca4fb": {
    "guid": "1c0df4b6c9f2494c8eb2376ec97ca4fb",
    "name": "AuglycerinPotion",
    "displayName": "Auglycerin",
    "wiki": "Auglycerin",
    "description": "This potion was created at the request of a very wealthy lord who wanted to hide his vast fortune.",
    "effect": "Drop gold continuously",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "4673c7f91a7b4d35b8ebe30a16ce650a": {
    "guid": "4673c7f91a7b4d35b8ebe30a16ce650a",
    "name": "ImmolatePotion",
    "displayName": "Immolation Potion",
    "wiki": "Immolation_Potion",
    "description": "Douse yourself in a living flame that only has hunger for your enemies.",
    "effect": "Burns nearby enemies",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "d42df1015fa04546bfd1cc0958cfc34b": {
    "guid": "d42df1015fa04546bfd1cc0958cfc34b",
    "name": "FloatPotion",
    "displayName": "Float Potion",
    "wiki": "Float_Potion",
    "description": "Warning: Make sure to be on firm ground when the effects wear off.",
    "effect": "Avoid falling into holes",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "b994f67a8e3f44578e1899cd043e3997": {
    "guid": "b994f67a8e3f44578e1899cd043e3997",
    "name": "SeltsBlood",
    "displayName": "Selt's Blood",
    "wiki": "Selt%27s_Blood",
    "description": "A drop of Selt's blood was used to synthesize a potion that can replicate her reproductive capabilities.",
    "effect": "Spawn Larvae",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "0b736c7fe4974e65a08cd5c0ab189929": {
    "guid": "0b736c7fe4974e65a08cd5c0ab189929",
    "name": "BloodChalice",
    "displayName": "Blood Chalice",
    "wiki": "Blood_Chalice",
    "description": "A golden goblet with flecks of crimson. It rewards those willing to pay a sacrifice.",
    "effect": "Consumes 25% health, drops items and sometimes another blood chalice.",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "12784fa0c4a949fdadf21288bc5ec170": {
    "guid": "12784fa0c4a949fdadf21288bc5ec170",
    "name": "FireballPotion",
    "displayName": "Fury Potion",
    "wiki": "Fury_Potion",
    "description": "Peering into the bottle reveals a vortex of fireballs, writhing in furor.",
    "effect": "Fire some fireballs",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "5f8cb66127e74d0baff7a1ba5b4cf972": {
    "guid": "5f8cb66127e74d0baff7a1ba5b4cf972",
    "name": "ReverseDamagePotion",
    "displayName": "Antimatter",
    "wiki": "Antimatter",
    "description": "The most brutal axe cleave becomes a soothing bath of vitality in what can only be described as magic.",
    "effect": "The next time you would take damage, gain that much health instead",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "05572761ed6d4d4f91203cd46f890adf": {
    "guid": "05572761ed6d4d4f91203cd46f890adf",
    "name": "PickledPilferPotion",
    "displayName": "Bottled Pilfer",
    "wiki": "Bottled_Pilfer",
    "description": "A bottle containing one Hoarding Pilfer, dozens of axe pomels, and countless smooth rocks.",
    "effect": "Releases a Hoarding Pilfer",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "bcfda0149d944afcb246305be2695172": {
    "guid": "bcfda0149d944afcb246305be2695172",
    "name": "ShopPotion",
    "displayName": "Shop in a Bottle",
    "wiki": "Shop_in_a_Bottle",
    "description": "Miniature wizards miniaturized a shop and put it in a regular sized bottle.",
    "effect": "Discover the secret shop",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "f83096ef1b674f6c832dec65a4a3d758": {
    "guid": "f83096ef1b674f6c832dec65a4a3d758",
    "name": "PotionPotion",
    "displayName": "Bottles in a Bottle",
    "wiki": "Bottles_in_a_Bottle",
    "description": "Made by an artisan with a good sense of irony.",
    "effect": "Drop two potions",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "15c7f082e7454fc38695e6152782bbf9": {
    "guid": "15c7f082e7454fc38695e6152782bbf9",
    "name": "ChestInABottle",
    "displayName": "Chest in a Bottle",
    "wiki": "Chest_in_a_Bottle",
    "description": "A big fad during the Enlightenment was to have a replica chest in a bottle on your bookshelf.",
    "effect": "Drop a random chest",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "cda68d3762ef4aa6bc5b00e2f8eeec6d": {
    "guid": "cda68d3762ef4aa6bc5b00e2f8eeec6d",
    "name": "TransmuterInABottle",
    "displayName": "TRANSMUT3 in a Bottle",
    "wiki": "TRANSMUT3_in_a_Bottle",
    "description": "\"Miniaturization technology and transmutation technology? What a time to be alive.\" -- Unknown Alchemist",
    "effect": "Add a TRANSMUT3 to the room",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "f05bebbd21e04c468299c7763704f332": {
    "guid": "f05bebbd21e04c468299c7763704f332",
    "name": "AltarInABottle",
    "displayName": "Altar in a Bottle",
    "wiki": "Altar_in_a_Bottle",
    "description": "Traveling monks often carried these in case they had to perform an emergency blessing.",
    "effect": "Spawn an altar",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "b12beb42d1b549e392b00d00a01520c9": {
    "guid": "b12beb42d1b549e392b00d00a01520c9",
    "name": "Transmutagen",
    "displayName": "Transmutagen",
    "wiki": "Transmutagen",
    "description": "It's unclear whether we will ever learn the secret of this ooze.",
    "effect": "Transforms all relics in the room",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "a72e7b460e8649b08298d8c4bf15f349": {
    "guid": "a72e7b460e8649b08298d8c4bf15f349",
    "name": "SwapRelicPotion",
    "displayName": "Metamorphim",
    "wiki": "Metamorphim",
    "description": "Dropping any object into this shifting liquid will quickly mutate it into something familiar but different.",
    "effect": "Transmute a carried relic",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "06eea0e248e74a249d1fe9b3c92d0b70": {
    "guid": "06eea0e248e74a249d1fe9b3c92d0b70",
    "name": "SwapAllRelicPotion",
    "displayName": "Mighty Metamorphim",
    "wiki": "Mighty_Metamorphim",
    "description": "The Metamorphim change is a five step process. Mighty Metamorphim combines those into a single, more efficient process.",
    "effect": "Transmute all carried relics",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "8a91e7875f294cb280f34898b5594f2d": {
    "guid": "8a91e7875f294cb280f34898b5594f2d",
    "name": "CircleTransmutePotion",
    "displayName": "Circle of Transmutation",
    "wiki": "Circle_of_Transmutation",
    "description": "Bends matter in a small area, but the process is increadibly strenuous.",
    "effect": "Transmutes items in a small circle, but makes them fragile",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "200012b4fdb74289b228f292193cf146": {
    "guid": "200012b4fdb74289b228f292193cf146",
    "name": "UnholyStrengthPotion",
    "displayName": "Berserker's Brew",
    "wiki": "Berserker%27s_Brew",
    "description": "A brew that stirs the drinker into a ferocious rage, making them dangerous to their enemies and themselves.",
    "effect": "Deal and take more damage",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "b9c7849437254fcbbe60ab61143f1de5": {
    "guid": "b9c7849437254fcbbe60ab61143f1de5",
    "name": "GhostPepperSauce",
    "displayName": "Ghost Pepper Sauce",
    "wiki": "Ghost_Pepper_Sauce",
    "description": "Protects against physical burns, but not emotional ones.",
    "effect": "Become immune to fire damage and ignite yourself",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "9c0401cc3c9a4188a6b3c800215b557d": {
    "guid": "9c0401cc3c9a4188a6b3c800215b557d",
    "name": "NumbingCream",
    "displayName": "Numbing Cream",
    "wiki": "Numbing_Cream",
    "description": "Particularly useful after a hard day in the goldmine, or during a hard day in the goldmine.",
    "effect": "Reduce incoming damage",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "e50bae2f580c4159a881f6c7852ca586": {
    "guid": "e50bae2f580c4159a881f6c7852ca586",
    "name": "EagleEyePotion",
    "displayName": "Potion of True Sight",
    "wiki": "Potion_of_True_Sight",
    "description": "Nicknamed the \"peeper's potion\" for obvious reasons.",
    "effect": "Discover nearby secrets",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "8372b8d3152445afa410b7bb9dbd45a8": {
    "guid": "8372b8d3152445afa410b7bb9dbd45a8",
    "name": "PotionofPlenty",
    "displayName": "Potion of Plenty",
    "wiki": "Potion_of_Plenty",
    "description": "\"Be prepared for any situation.\" - Norin, the Responsible",
    "effect": "Drop some useful things",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "84e344cdca10420a9db29efbd3d1dc72": {
    "guid": "84e344cdca10420a9db29efbd3d1dc72",
    "name": "ProteinPotion",
    "displayName": "Protein Shake",
    "wiki": "Protein_Shake",
    "description": "It's not so much about bulking up, it's more about surviving winter.",
    "effect": "Drop some protein",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "a716c2ee1f634d74af7cc84ff341d374": {
    "guid": "a716c2ee1f634d74af7cc84ff341d374",
    "name": "BlessedBlend",
    "displayName": "Blessed Blend",
    "wiki": "Blessed_Blend",
    "description": "Carried by the priests of the sanctum, just in case.",
    "effect": "Drops a blessing",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "4bbe9f7680b34a17a1ca6dfc90c725e7": {
    "guid": "4bbe9f7680b34a17a1ca6dfc90c725e7",
    "name": "ToxinPotion",
    "displayName": "Toxin",
    "wiki": "Toxin",
    "description": "A thick, black oil consisting of venom from the kingdom's deadliest creatures. This poison acts quickly, reducing movement and inflicting pain.",
    "effect": "Coat your weapon with poison",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "c0a32814b2e24d15a63664bcdc949d26": {
    "guid": "c0a32814b2e24d15a63664bcdc949d26",
    "name": "WitchsBrew",
    "displayName": "Witch's Brew",
    "wiki": "Witch%27s_Brew",
    "description": "Baba, during her apprenticeship, accidentally brewed this cursed potion. She tried to bury her shame, but it refused to remain hidden.",
    "effect": "Become cursed",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "145bde979116479fabc648bebf584e32": {
    "guid": "145bde979116479fabc648bebf584e32",
    "name": "FreeloaderPotion",
    "displayName": "Freeloader Draught",
    "wiki": "Freeloader_Draught",
    "description": "\"You can't always get what you want. But if you try sometimes, you might just find, you get it for free.\" - Proverb",
    "effect": "Get something for nothing",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "6a41bdb034dd45549825a7b4f9198362": {
    "guid": "6a41bdb034dd45549825a7b4f9198362",
    "name": "BiscuitsPotion",
    "displayName": "Biscuits",
    "wiki": "Biscuits",
    "description": "Beltrame, as part of her apprenticeship, developed a treat loved by all small creatures",
    "effect": "Increse experience gain for a familiar.",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "17392f3e7d05485a800ddcd201bfb98c": {
    "guid": "17392f3e7d05485a800ddcd201bfb98c",
    "name": "MidasTouchPotion",
    "displayName": "Midas Touch",
    "wiki": "Midas_Touch",
    "description": "A label affixed to the bottom reads: \"Warning: Do not ingest.\"",
    "effect": "All enemies are turned to gold",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "4f9154518bfe4a0ebd09e57aef8ebdf9": {
    "guid": "4f9154518bfe4a0ebd09e57aef8ebdf9",
    "name": "KissSuccubusPotion",
    "displayName": "Kiss of the Succubus",
    "wiki": "Kiss_of_the_Succubus",
    "description": "Made with the blood of a succubus, which is incredibly hard to come by.",
    "effect": "Kill all enemies and steal their health",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "5829b0cc3f6149da9649aa302cf7ca57": {
    "guid": "5829b0cc3f6149da9649aa302cf7ca57",
    "name": "AllPotion",
    "displayName": "All-Potion",
    "wiki": "All-Potion",
    "description": "Dirk's crowning achievement as an alchemist. A potion so powerful the recipe needed to be divided amongst laboratories to keep it hidden.",
    "effect": "Is whatever you need it to be",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "1cfe53e981a24b7cbbad91669f5ac52e": {
    "guid": "1cfe53e981a24b7cbbad91669f5ac52e",
    "name": "StarlightSip",
    "displayName": "Starlight Sip",
    "wiki": "Starlight_Sip",
    "description": "A stern warning adorns the bottle: \"More than a sip may cause extinction!\"",
    "effect": "Pull the heavens down onto your foes",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "rare"]
  },
  "43f16c0b6aa94743a87c235025a7f98d": {
    "guid": "43f16c0b6aa94743a87c235025a7f98d",
    "name": "ChurchbellNectarPotion",
    "displayName": "Churchbell Nectar",
    "wiki": "Churchbell_Nectar",
    "description": "An aromatic oil that wards off harm in small doses.",
    "effect": "Creates a temporary Churchbell shield",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "4c8d7e3454124c4aab32c45bf05edc8b": {
    "guid": "4c8d7e3454124c4aab32c45bf05edc8b",
    "name": "PangolinPotion",
    "displayName": "Pangolin Potion",
    "wiki": "Pangolin_Potion",
    "description": "In case of imminent danger curl up and form a ball. Step two, roll on away from that danger.",
    "effect": "Refils four armor points",
    "slot": "potion",
    "attributes": ["recipe", "potion", "item", "common"]
  },
  "4f2ebf67c2ab4103bba07ae33f8fce10": {
    "guid": "4f2ebf67c2ab4103bba07ae33f8fce10",
    "name": "Canary",
    "displayName": "Canary",
    "wiki": "Canary",
    "description": "In a weird change of pace, this canary seems to outlive the miners it works with.",
    "effect": "A miner's best friend",
    "slot": "none",
    "attributes": ["egg", "item", "familiar", "rare"]
  },
  "42c02406d29049eba350c408a44bd699": {
    "guid": "42c02406d29049eba350c408a44bd699",
    "name": "Djinn",
    "displayName": "Djinn",
    "wiki": "Djinn",
    "description": "Djinn are creatures that make the clouds their home. They are highly intelligent and have a devious sense of humor.",
    "effect": "A cunning ally that sees through deception",
    "slot": "none",
    "attributes": ["egg", "item", "familiar", "common"]
  },
  "31d2663fef3248c8af2d6727453a83ef": {
    "guid": "31d2663fef3248c8af2d6727453a83ef",
    "name": "Firebird",
    "displayName": "Firebird",
    "wiki": "Firebird",
    "description": "A legendary bird, worshiped as a demigod in the deserts to the far east.",
    "effect": "A hot tempered bird",
    "slot": "none",
    "attributes": ["egg", "item", "familiar", "common"]
  },
  "e6bc0264d4e14cdc866c93bfe318195e": {
    "guid": "e6bc0264d4e14cdc866c93bfe318195e",
    "name": "Monkey",
    "displayName": "Nikko",
    "wiki": "Nikko",
    "description": "Was once a pet to Baba. Nikko escaped, and it is rumored he has been plotting his revenge ever since.",
    "effect": "A hard punching apeian",
    "slot": "none",
    "attributes": ["egg", "item", "familiar", "rare"]
  },
  "f85e0301401b414b811f17c6a84506d2": {
    "guid": "f85e0301401b414b811f17c6a84506d2",
    "name": "Phoenix",
    "displayName": "Sol's Phoenix",
    "wiki": "Sol%27s_Phoenix",
    "description": "An ancient creature that performs a cycle of rebirth once every hundred years.",
    "effect": "A guardian of the weak",
    "slot": "none",
    "attributes": ["egg", "item", "familiar", "rare"]
  },
  "966adf72347c4f35bf9f3789d6b7ee18": {
    "guid": "966adf72347c4f35bf9f3789d6b7ee18",
    "name": "Sylph",
    "displayName": "Sylph",
    "wiki": "Sylph",
    "description": "Sylphs are elusive creatures. It is rumored that they commune with the gods.",
    "effect": "A blessed creature",
    "slot": "none",
    "attributes": ["egg", "item", "familiar", "common"]
  },
  "25cb114d9617483a8be3c9c7ddb8ee39": {
    "guid": "25cb114d9617483a8be3c9c7ddb8ee39",
    "name": "Spirit",
    "displayName": "Spirit",
    "wiki": "Spirit",
    "description": "A tormented spirit that was found haunting a cask of wine.",
    "effect": "Aged and fermented for eons",
    "slot": "none",
    "attributes": ["egg", "item", "familiar", "common"]
  },
  "839ad2905954481cb294f4b6cd01ff34": {
    "guid": "839ad2905954481cb294f4b6cd01ff34",
    "name": "Thunderbird",
    "displayName": "Thunderbird",
    "wiki": "Thunderbird",
    "description": "During the rainy season, Thunderbirds bring storms to the highland plateau.",
    "effect": "A shockingly short tempered bird",
    "slot": "none",
    "attributes": ["egg", "item", "familiar", "common"]
  },
  "9d1c4ac6c24f4dfdb29a48457c1c49e6": {
    "guid": "9d1c4ac6c24f4dfdb29a48457c1c49e6",
    "name": "Chaos",
    "displayName": "Chaos Spawn",
    "wiki": "Chaos_Spawn",
    "description": "Chaos Spawn do not care for order. They have only one allegiance, and that is to entropy.",
    "effect": "A child of the god Arengee",
    "slot": "none",
    "attributes": ["egg", "item", "familiar", "rare"]
  },
  "97b65bd7fb0e420e87e88345312624c5": {
    "guid": "97b65bd7fb0e420e87e88345312624c5",
    "name": "Eidolon",
    "displayName": "Eidolon",
    "wiki": "Eidolon",
    "description": "One of many fallen soldiers that have not yet made peace. It dawns the same armor it wore in life.",
    "effect": "A haunted suit of armor",
    "slot": "none",
    "attributes": ["egg", "item", "familiar", "rare"]
  },
  "157bcafd3635443485e1676d182197b9": {
    "guid": "157bcafd3635443485e1676d182197b9",
    "name": "Lesser_demon",
    "displayName": "Lesser Demon",
    "wiki": "Lesser_Demon",
    "description": "Lesser demons lack the immense power of their greater cousins, but don't make the mistake of thinking they're toothless.",
    "effect": "Looks up to greater demons",
    "slot": "none",
    "attributes": ["egg", "item", "familiar", "rare"]
  },
  "1981b4af04434077afafc78691056387": {
    "guid": "1981b4af04434077afafc78691056387",
    "name": "WaylandsBoots",
    "displayName": "Wayland's Boots",
    "wiki": "Wayland%27s_Boots",
    "description": "Steel-toed and steel-soled, not to be confused with Toadvine, the Steel-Souled Steel-Toad.",
    "effect": "Break spikes, take names",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "25a2fe2d57a34b6598d34cbbb58fdeb0": {
    "guid": "25a2fe2d57a34b6598d34cbbb58fdeb0",
    "name": "Galoshes",
    "displayName": "Galoshes",
    "wiki": "Galoshes",
    "description": "The first galoshes were just two oil jumpers strapped to your feet.",
    "effect": "Walk and jump on oil",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "d2b0fec2b4cf44e8aa63b0aa94441fd5": {
    "guid": "d2b0fec2b4cf44e8aa63b0aa94441fd5",
    "name": "FloatBoots",
    "displayName": "Float Boots",
    "wiki": "Float_Boots",
    "description": "Walking out onto the abyss can be fairly disconcerting at first. It's fairly disconcerting the hundredth time too.",
    "effect": "Walk on air",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "7ee59f418896447ca03ce09665771ae6": {
    "guid": "7ee59f418896447ca03ce09665771ae6",
    "name": "LavaWalkers",
    "displayName": "Lava Walkers",
    "wiki": "Lava_Walkers",
    "description": "Wayland was asked to equip an expedition of peasants sent to the Golden Core. They didn't survive, but the boots did.",
    "effect": "Walk on fire",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "a7ae4ce21346402ca6fe2ad0c09b1c14": {
    "guid": "a7ae4ce21346402ca6fe2ad0c09b1c14",
    "name": "HeliosBoots",
    "displayName": "Helios Boots",
    "wiki": "Helios_Boots",
    "description": "You might as well be walkin' on the sun.",
    "effect": "Fire patches last for much longer and deal more damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "fe3880cccffb46a6ba510453822df02b": {
    "guid": "fe3880cccffb46a6ba510453822df02b",
    "name": "ButchersCleaver",
    "displayName": "Butcher's Cleaver",
    "wiki": "Butcher%27s_Cleaver",
    "description": "Once belonged to the King's personal butcher. Pudge was ejected from the Kingdom when he developed a taste for the flesh of the dead.",
    "effect": "Sometimes drop meat from your enemies",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "637c8bf20a8d4e6da5bcd6bbbac68f12": {
    "guid": "637c8bf20a8d4e6da5bcd6bbbac68f12",
    "name": "KeyBlade",
    "displayName": "Key Blade",
    "wiki": "Key_Blade",
    "description": "A sword in the shape of a dull key. Not practical as a key or a blade.",
    "effect": "Increases swing damage for each key you have",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "9919d2d2d31941f2a96f898d56e8d297": {
    "guid": "9919d2d2d31941f2a96f898d56e8d297",
    "name": "LegendaryBlade",
    "displayName": "Master Pickaxe",
    "wiki": "Master_Pickaxe",
    "description": "Only worthy champions can find their way through the foggy woods where this weapon rests.",
    "effect": "Fire projectiles at full health",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "49e257bc3ed04cde9e5b0a7089d7af10": {
    "guid": "49e257bc3ed04cde9e5b0a7089d7af10",
    "name": "Mjolnir",
    "displayName": "Mjölnir",
    "wiki": "Mjölnir",
    "description": "A hammer comprised entirely of thorium grants the power and wrath of the gods.",
    "effect": "Summon lightning when the pickaxe is caught",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "212720105e1a4605b4d5bc4295a684cd": {
    "guid": "212720105e1a4605b4d5bc4295a684cd",
    "name": "DoomBlade",
    "displayName": "Doom Blade",
    "wiki": "Doom_Blade",
    "description": "Sword of the greater demon Zodd. It only grants its power to cursed individuals.",
    "effect": "Gain damage for each carried curse",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "2d5d75f5824242b781e8295d5f25b996": {
    "guid": "2d5d75f5824242b781e8295d5f25b996",
    "name": "BattleAxe",
    "displayName": "Battle Axe",
    "wiki": "Battle_Axe",
    "description": "A common weapon in the Orcish army. Basic, but to the point.",
    "effect": "Increases swing size, but slightly decreases swing damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "2e1f6f7792eb4409a359778402737ed1": {
    "guid": "2e1f6f7792eb4409a359778402737ed1",
    "name": "Glaive",
    "displayName": "Glaive",
    "wiki": "Glaive",
    "description": "Elven riders go into battle on large cats. The glaive is their prefered weapon.",
    "effect": "Increases throw size, but slightly decreases throw damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "05ad55b489ff4af28e34ab471ecd0640": {
    "guid": "05ad55b489ff4af28e34ab471ecd0640",
    "name": "Masa",
    "displayName": "Masa",
    "wiki": "Masa",
    "description": "A short blade of legend, wielded by the brother. What it lacked in reach, it made up for in power.",
    "effect": "Reduces throw damage and increases swing damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "78d8214111974925b1e2039f20b728cf": {
    "guid": "78d8214111974925b1e2039f20b728cf",
    "name": "Mune",
    "displayName": "Mune",
    "wiki": "Mune",
    "description": "A long blade of legend, wielded by the sister. What it lacked in power, it made up for in reach.",
    "effect": "Reduces swing damage and increases throw damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "c5791c753f7e42de8a2814bd4b17504a": {
    "guid": "c5791c753f7e42de8a2814bd4b17504a",
    "name": "Masamune",
    "displayName": "Masamune",
    "wiki": "Masamune",
    "description": "\"If on your journey, you should encounter a god, a god will be cut.\"",
    "effect": "Instantly kills enemies sometimes",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "f568bbf4ecb54daf9d7d472f06d97521": {
    "guid": "f568bbf4ecb54daf9d7d472f06d97521",
    "name": "Suneater",
    "displayName": "Suneater",
    "wiki": "Suneater",
    "description": "A legendary mace that consumes all the light around it, creating an area of perpetual darkness.",
    "effect": "Consumes all current and future blessings and converts them to swing damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "e161e4e3083948eaa22f9830394b1235": {
    "guid": "e161e4e3083948eaa22f9830394b1235",
    "name": "VorpalBlade",
    "displayName": "Vorpal Blade",
    "wiki": "Vorpal_Blade",
    "description": "The blade cuts through the air with a crack and the sound of snicker-snack.",
    "effect": "Attack quickly without stopping",
    "slot": "weapon",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "66b7f22d45354e549d2a4a18ce9792f7": {
    "guid": "66b7f22d45354e549d2a4a18ce9792f7",
    "name": "TwistedBlade",
    "displayName": "Twisted Blade",
    "wiki": "Twisted_Blade",
    "description": "A dagger with a blade curled around like a helix. Doesn't appear to be a weapon suited for combat.",
    "effect": "Increases critical strike chance for each carried curse",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "2945df6b2ea043dd94c67ba09aefbe2b": {
    "guid": "2945df6b2ea043dd94c67ba09aefbe2b",
    "name": "ObsidianKnife",
    "displayName": "Obsidian Knife",
    "wiki": "Obsidian_Knife",
    "description": "The sharpest blade in the known world, but also the most fragile.",
    "effect": "Dramatically increases damage, but breaks when hit",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "54d1936d55494194a42d56c6f314c763": {
    "guid": "54d1936d55494194a42d56c6f314c763",
    "name": "DirksHammer",
    "displayName": "Dirk's Hammer",
    "wiki": "Dirk%27s_Hammer",
    "description": "Get what you want through ingenuity, or sheer brute force.",
    "effect": "Transmute an item by hitting it",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "a8d3215241a94555866450ab791bc7e3": {
    "guid": "a8d3215241a94555866450ab791bc7e3",
    "name": "Resurrection",
    "displayName": "Resurrection",
    "wiki": "Resurrection",
    "description": "To be blessed by Din is to have deep pockets or know someone who does.",
    "effect": "Resurrect on death",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "623c929400f44c05b07827fef3426e60": {
    "guid": "623c929400f44c05b07827fef3426e60",
    "name": "GordonsTunic",
    "displayName": "Gordon's Tunic",
    "wiki": "Gordon%27s_Tunic",
    "description": "This tunic protected the alchemist Gordon during the catastrophe at the far away Black Mesa laboratory.",
    "effect": "Reduces elemental damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "b367a2746211405a8dda8d560f88b6d3": {
    "guid": "b367a2746211405a8dda8d560f88b6d3",
    "name": "Breastplate",
    "displayName": "Breastplate",
    "wiki": "Breastplate",
    "description": "Comes with complimentary breastplate stretcher for the more rotund wearer.",
    "effect": "Adds a point of armor to the health bar",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "53f62e71c29143f79a27abca6069f52b": {
    "guid": "53f62e71c29143f79a27abca6069f52b",
    "name": "Pauldron",
    "displayName": "Pauldron",
    "wiki": "Pauldron",
    "description": "It's common knowledge that the larger the shoulder pads, the more experience the warrior.",
    "effect": "Adds a point of armor to the health bar",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "2f342d2da24340b383d49f1fb9374e5a": {
    "guid": "2f342d2da24340b383d49f1fb9374e5a",
    "name": "Gauntlets",
    "displayName": "Gauntlets",
    "wiki": "Gauntlets",
    "description": "It is very difficult to wield a sword, or any other weapons without fingers.",
    "effect": "Adds a point of armor to the health bar",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "e930152d55884ffbb8a0ce9edd6a46f1": {
    "guid": "e930152d55884ffbb8a0ce9edd6a46f1",
    "name": "Greaves",
    "displayName": "Greaves",
    "wiki": "Greaves",
    "description": "They won't make you lightning fast, but they will help when you drop a hammer on your foot.",
    "effect": "Adds a point of armor to the health bar",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "19dc5130b5404db7a09262d609d9b8ba": {
    "guid": "19dc5130b5404db7a09262d609d9b8ba",
    "name": "ShieldofQuills",
    "displayName": "Shield of Quills",
    "wiki": "Shield_of_Quills",
    "description": "Barbarians lack defensive discipline, but they make up for it with offensive prowess.",
    "effect": "Gain two points of armor, armor increases damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "630bd51306d34a9c9de7b041f1a3caee": {
    "guid": "630bd51306d34a9c9de7b041f1a3caee",
    "name": "BlastSuit",
    "displayName": "Blast Suit",
    "wiki": "Blast Suit",
    "description": "A ridiculous suit of armor that looks reminiscent of an onion.",
    "effect": "Invulnerability to friendly bomb blasts and increases bomb damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "ca4e94bdc2cc43329474ef40230aca52": {
    "guid": "ca4e94bdc2cc43329474ef40230aca52",
    "name": "Pillow",
    "displayName": "Hoodie's Pillow",
    "wiki": "Hoodie%27s_Pillow",
    "description": "Just an ordinary sleeping pillow, yellowed from years of drool marks.",
    "effect": "Reduces physical damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "a1ca0abb4f8c47bbb719be48fb7fd470": {
    "guid": "a1ca0abb4f8c47bbb719be48fb7fd470",
    "name": "SoulGuard",
    "displayName": "Soul Guard",
    "wiki": "Soul_Guard",
    "description": "A powerful defensive option that wears on the soul.",
    "effect": "Reduces and redirects damage to your max HP",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "2a64aa4851c94841ae297322646e6bdc": {
    "guid": "2a64aa4851c94841ae297322646e6bdc",
    "name": "WetBlanket",
    "displayName": "Wet Blanket",
    "wiki": "Wet_Blanket",
    "description": "Mining near the Golden Core required fire safety such as this blanket. Not a great sleep aid.",
    "effect": "Puts out fires immediately, but requires water charges",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "95c9369deaba40caa44b1b48989a6a17": {
    "guid": "95c9369deaba40caa44b1b48989a6a17",
    "name": "WarPaint",
    "displayName": "War Paint",
    "wiki": "War_Paint",
    "description": "Intimidate your enemies with dark lines and blacked out eye sockets. Or maybe just some cute whiskers?",
    "effect": "Increase attack damage and speed when killing enemies",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "fd702e9d2662490f886876ee598b15d7": {
    "guid": "fd702e9d2662490f886876ee598b15d7",
    "name": "Battlestandard",
    "displayName": "Battle Standard",
    "wiki": "Battle_Standard",
    "description": "Even peasants can intimidate their enemies with the correct livery.",
    "effect": "Increases move, attack, and throw speed at the beginning of battle",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "6bbe9142f1144e7cac6b0f2edf13cac9": {
    "guid": "6bbe9142f1144e7cac6b0f2edf13cac9",
    "name": "Catalyst",
    "displayName": "Catalyst",
    "wiki": "Catalyst",
    "description": "A strange stone that radiates warmth and a sense of comfort.",
    "effect": "When healed, heal again",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "ecb92c9f921647a69fa3bcd95bb535e7": {
    "guid": "ecb92c9f921647a69fa3bcd95bb535e7",
    "name": "SeltsEgg",
    "displayName": "Selt's Egg",
    "wiki": "Selt%27s_Egg",
    "description": "Ejected from Selt's dying body, this egg continues to produce her spawn.",
    "effect": "Spawn larvae on entrance",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "5482a1b1b71b433d886865f2394f2fcc": {
    "guid": "5482a1b1b71b433d886865f2394f2fcc",
    "name": "ElectrifiedOrb",
    "displayName": "Electrified Orb",
    "wiki": "Electrified_Orb",
    "description": "The orb has no preference on its owner. Its only desire is to orbit something.",
    "effect": "Orbits the peasant and shocks enemies on contact",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "cd5580348c4d4a3cbcba94eafc169f4a": {
    "guid": "cd5580348c4d4a3cbcba94eafc169f4a",
    "name": "OthermineConduit",
    "displayName": "Othermine Conduit",
    "wiki": "Othermine_Conduit",
    "description": "Relics that communicate with the Othermine are rare and mystify even the most learned scholars of the land.",
    "effect": "Ghastly hands will attack the enemy",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "ca58b2a9d6cc4f56ae0699e33578a2e2": {
    "guid": "ca58b2a9d6cc4f56ae0699e33578a2e2",
    "name": "Doll",
    "displayName": "Doll",
    "wiki": "Doll",
    "description": "Placed in the beds of young children to protect them from the horrors of the night.",
    "effect": "Blocks the next few curses.",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "d21a2fe3ce9d4fddb34a59dd4df3773f": {
    "guid": "d21a2fe3ce9d4fddb34a59dd4df3773f",
    "name": "Devotion",
    "displayName" :"Devotion",
    "wiki": "Devotion",
    "description": "Din is a god of gifts, but requires loyalty from his subjects.",
    "effect": "Pray twice at altars",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "4b36bbc087004750a1526304aef7b088": {
    "guid": "4b36bbc087004750a1526304aef7b088",
    "name": "108Beads",
    "displayName": "108 Beads",
    "wiki": "108_Beads",
    "description": "Smells of sandalwood.",
    "effect": "Heal when praying at an altar",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "80242154d4284cc6aab221292cb0ae93": {
    "guid": "80242154d4284cc6aab221292cb0ae93",
    "name": "HolyGuacamole",
    "displayName": "Holy Guacamole",
    "wiki": "Holy_Guacamole",
    "description": "\"The most sacred food item is the avocado. The second most is the lime.\" - Griswold, The Collector",
    "effect": "Find more altar rooms",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "25d89c4cdce0444bb617016d3fa547d0": {
    "guid": "25d89c4cdce0444bb617016d3fa547d0",
    "name": "SonicBoom",
    "displayName": "Sonic Boom",
    "wiki": "Sonic_Boom",
    "description": "Used by champion pickaxe tossers.",
    "effect": "Throw really fast",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "d8f7d033bec0417ab0b553f3a51a9a7f": {
    "guid": "d8f7d033bec0417ab0b553f3a51a9a7f",
    "name": "SewingKit",
    "displayName": "Sewing Kit",
    "wiki": "Sewing_Kit",
    "description": "The best investment for the future is a needle and some thread.",
    "effect": "Keep all your gold when you die",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "b29ea427f7f64aa3a06c8e19a0495648": {
    "guid": "b29ea427f7f64aa3a06c8e19a0495648",
    "name": "SimpleChest",
    "displayName": "Simple Chest",
    "wiki": "Simple_Chest",
    "description": "Just an ordinary chest used to deliver items.",
    "effect": "Overstocks the shop",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "074da99ced7f4993b38cb90df3a27d84": {
    "guid": "074da99ced7f4993b38cb90df3a27d84",
    "name": "MealTicket",
    "displayName": "Meal Ticket",
    "wiki": "Meal_Ticket",
    "description": "Illegible due to indiscernible scribbles, but has a crude drawing of a sandwich.",
    "effect": "Free food at the shop, right now!",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "6774d4be9573481f8e6fa97add614285": {
    "guid": "6774d4be9573481f8e6fa97add614285",
    "name": "AdventurersHat",
    "displayName": "Adventurer's Hat",
    "wiki": "Adventurer%27s_Hat",
    "description": "Suitable attire for spelunking in dank caverns, exploring dusty tombs, and that's about it...",
    "effect": "Discover more secret rooms",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "376feb7893994baf826df320010a2eae": {
    "guid": "376feb7893994baf826df320010a2eae",
    "name": "AdventurersWhip",
    "displayName": "Adventurer's Whip",
    "wiki": "Adventurer%27s_Whip",
    "description": "A whip is an impractical weapon. For example, it often hits enemies behind you as often as it does in front.",
    "effect": "Discover more treasure rooms",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "bc3b600bea3d416391e2549c137fff63": {
    "guid": "bc3b600bea3d416391e2549c137fff63",
    "name": "GoldenIdol",
    "displayName": "Golden Idol",
    "wiki": "Golden_Idol",
    "description": "A golden idol of the god Din. Probably belongs in a museum.",
    "effect": "Discover more rooms and get rich",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "d6045725bae4407ea8492ff1e4fa7c3f": {
    "guid": "d6045725bae4407ea8492ff1e4fa7c3f",
    "name": "TotemOfLife",
    "displayName": "Totem of Life",
    "wiki": "Totem_of_Life",
    "description": "A totem depicting an ancient god of life and the natural order.",
    "effect": "Sustain yourself through adventure",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "fe3df61649f84dd2b08492c1788d92af": {
    "guid": "fe3df61649f84dd2b08492c1788d92af",
    "name": "AphoticCharm",
    "displayName": "Aphotic Charm",
    "wiki": "Aphotic_Charm",
    "description": "In the darkness there is light.",
    "effect": "Heal in each new room for each curse",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "2380817a345d4458b5630768a38f35a1": {
    "guid": "2380817a345d4458b5630768a38f35a1",
    "name": "DillonsClaw",
    "displayName": "Dillon's Claw",
    "wiki": "Dillon%27s_Claw",
    "description": "This insatiable and eager beast approaches with distinct and distributing fuss.",
    "effect": "Deal even more damage when you critical strike",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "6910c28b900043d48911f9ae27e343cf": {
    "guid": "6910c28b900043d48911f9ae27e343cf",
    "name": "ShadowsFang",
    "displayName": "Shadow's Fang",
    "wiki": "Shadow%27s_Fang",
    "description": "A brindled and dark beast. Perfect camouflage for stalking the periphery of your vision.",
    "effect": "Higher chance to critical strike",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "815f242a079240b8833a32c5f408e03a": {
    "guid": "815f242a079240b8833a32c5f408e03a",
    "name": "BrambleVest",
    "displayName": "Bramble Vest",
    "wiki": "Bramble_Vest",
    "description": "The barbs are sharp and cruel. They dig into flesh and cloth alike.",
    "effect": "Return damage but amplified",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "be05dceb707e415ca9224898a15bd1d3": {
    "guid": "be05dceb707e415ca9224898a15bd1d3",
    "name": "Duplicator",
    "displayName": "Duplicator",
    "wiki": "Duplicator",
    "description": "It's quite easy to make two of something. You first take one of something, then you double it.",
    "effect": "Relic rooms present a tantalizing choice",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "87447b9566774ef486aa065a51a2bf4e": {
    "guid": "87447b9566774ef486aa065a51a2bf4e",
    "name": "Hyperstone",
    "displayName": "Hyperstone",
    "wiki": "Hyperstone",
    "description": "The stone vibrates at such a frequency as to be mildly annoying.",
    "effect": "Increase attack speed",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "262277e1e3914d1aae80a2d9f5acb3bd": {
    "guid": "262277e1e3914d1aae80a2d9f5acb3bd",
    "name": "MinersFlask",
    "displayName": "Miner's Flask",
    "wiki": "Miner%27s_Flask",
    "description": "A sneaky little vessel with something left over for the new owner.",
    "effect": "Feel the effects of a potion for longer",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "1e47701bb3324ddfb2c097dda2506453": {
    "guid": "1e47701bb3324ddfb2c097dda2506453",
    "name": "Lunchbox",
    "displayName": "Lunchbox",
    "wiki": "Lunchbox",
    "description": "The best time of day is midday when the pickaxes are down and the sandwiches are up.",
    "effect": "Store a piece of food for later",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "2725a7b0032447a98b7604d29395317a": {
    "guid": "2725a7b0032447a98b7604d29395317a",
    "name": "Immolate",
    "displayName": "Large Ember",
    "wiki": "Large_Ember",
    "description": "An ember, kicked from a bonfire in the depths of the UnderMine.",
    "effect": "Light nearby enemies on fire",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "70965440d15240d1a7ac7c8ddff4c9b2": {
    "guid": "70965440d15240d1a7ac7c8ddff4c9b2",
    "name": "ItemPopcorn",
    "displayName": "Popcorn",
    "wiki": "Popcorn",
    "description": "An ordinary kernel of corn, enchanted by a wizard who thought it would be a fun party trick.",
    "effect": "Items will sometimes duplicate themselves",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "6b18a3a60fe342f1833aff1526898e11": {
    "guid": "6b18a3a60fe342f1833aff1526898e11",
    "name": "GoldPopcorn",
    "displayName": "Golden Popcorn",
    "wiki": "Golden_Popcorn",
    "description": "The wizard enchanted a second kernel, this one just slightly more golden in color.",
    "effect": "Gold will sometimes duplicate itself",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "81b81569168949aeaea9412aea00601d": {
    "guid": "81b81569168949aeaea9412aea00601d",
    "name": "FoodPopcorn",
    "displayName": "Seasoned Popcorn",
    "wiki": "Seasoned_Popcorn",
    "description": "A third enchanted kernel, dusted ever so gently in cayenne, salt, and black pepper.",
    "effect": "Food will sometimes duplicate itself",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "586b91a55c884c48832f9503dd8947c2": {
    "guid": "586b91a55c884c48832f9503dd8947c2",
    "name": "CaramelPopcorn",
    "displayName": "Caramel Popcorn",
    "wiki": "Caramel_Popcorn",
    "description": "Sweet and savory meet.",
    "effect": "Duplicated food packs a surprise",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "ebb2f31ddd77460196d44fabcd18f57a": {
    "guid": "ebb2f31ddd77460196d44fabcd18f57a",
    "name": "PocketGrill",
    "displayName": "Pocket Grill",
    "wiki": "Pocket_Grill",
    "description": "A cooking grill, miniaturized by a wizard that enjoyed backpacking in The Enchantments.",
    "effect": "Cooks all your food",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "6851f6a8812f4bcbabaa9a2414ec70d5": {
    "guid": "6851f6a8812f4bcbabaa9a2414ec70d5",
    "name": "Leftovers",
    "displayName": "Leftovers",
    "wiki": "Leftovers",
    "description": "\"Food in a chest is downright normal compared to storing a turkey in the wall.\" - Dungeon Chef",
    "effect": "Find old, gross food in chests",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "ed388fc9c09943bc987cf1c3388e8755": {
    "guid": "ed388fc9c09943bc987cf1c3388e8755",
    "name": "SpareOrdinance",
    "displayName": "Spare Ordinance",
    "wiki": "Spare_Ordinance",
    "description": "Normally it's unwise to use old, unstable explosives found in long forgotten chests. Normally.",
    "effect": "Discover a bomb in every chest",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "f7eca5455bdf49fe9d2dafd4ec32d1e7": {
    "guid": "f7eca5455bdf49fe9d2dafd4ec32d1e7",
    "name": "Miniaturizer",
    "displayName": "Miniaturizer",
    "wiki": "Miniaturizer",
    "description": "Several years ago there was a craze in the wizarding community to make tiny versions of everything. It has since gone out of style.",
    "effect": "Find small boxes in big boxes",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "5abbafb002b04ee495f179afdb550ffa": {
    "guid": "5abbafb002b04ee495f179afdb550ffa",
    "name": "KeyDoubler",
    "displayName": "Key Doubler",
    "wiki": "Key_Doubler",
    "description": "\"Yes sir! This little doozy will copy any key you need.\" - Dibble, the Merchant",
    "effect": "Sometimes drop a new key when using an old key",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "e56c7298c19e47d990140eceb14b95cc": {
    "guid": "e56c7298c19e47d990140eceb14b95cc",
    "name": "BombDoubler",
    "displayName": "Bomb Doubler",
    "wiki": "Bomb_Doubler",
    "description": "In a parallel universe, somebody is missing a lot of bombs.",
    "effect": "Sometimes drop a new bomb when using an old bomb",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "fb374cc41c744cdbbbe227889cf001c4": {
    "guid": "fb374cc41c744cdbbbe227889cf001c4",
    "name": "DoubleDoubler",
    "displayName": "Double Doubler",
    "wiki": "Double_Doubler",
    "description": "When a single single isn't enough.",
    "effect": "Chance to drop a key and bomb when using either",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "ec20d69533674c59a1af67db438bf172": {
    "guid": "ec20d69533674c59a1af67db438bf172",
    "name": "PilfersGift",
    "displayName": "Pilfer's Gift",
    "wiki": "Pilfer%27s_Gift",
    "description": "\"I'm still not sure what these pilfers are up to, but hooboy, two relics!\" - Black Rabbit",
    "effect": "Be blessed with two gifts from the pilfers",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "cad1d7d1cd454671ac62d6496c5aa49e": {
    "guid": "cad1d7d1cd454671ac62d6496c5aa49e",
    "name": "GoldenBombs",
    "displayName": "Golden Powder",
    "wiki": "Golden_Powder",
    "description": "\"Any alchemist can turn lead into gold. Stone to gold is an entirely different matter.\" -Dirk, the alchemist.",
    "effect": "Turns rock into gold",
    "slot": "bomb",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "82d1d9ec3cb74d019e07ac5750e5433d": {
    "guid": "82d1d9ec3cb74d019e07ac5750e5433d",
    "name": "ClusterBombs",
    "displayName": "Bombushka",
    "wiki": "Bombushka",
    "description": "\"Bombs were losing their excitement, and then this came along.\" - Bishop, the Bomb Smith",
    "effect": "Bombs, in bombs, in bombs",
    "slot": "bomb",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "04579544c0354d24a712f465b0a4a504": {
    "guid": "04579544c0354d24a712f465b0a4a504",
    "name": "IncendiaryBombs",
    "displayName": "Seer's Blood",
    "wiki": "Seer%27s_Blood",
    "description": "Blood of the salamander. Kept only in check, by the blood of her brother.",
    "effect": "Bombs explode in a shower of fire",
    "slot": "bomb",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "96b62be9e4f04a329eed69ab143957aa": {
    "guid": "96b62be9e4f04a329eed69ab143957aa",
    "name": "RookBombs",
    "displayName": "Rook's Bomb",
    "wiki": "Rook%27s_Bomb",
    "description": "Rook learned bomb smithing from his mother, but always had a special relationship with his father.",
    "effect": "Death at ninety degrees",
    "slot": "bomb",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "80c079e5b87345b28557d545c6f0131e": {
    "guid": "80c079e5b87345b28557d545c6f0131e",
    "name": "BishopBombs",
    "displayName": "Bishop's Bomb",
    "wiki": "Bishop%27s_Bomb",
    "description": "Bishop was strong and independent. He left home at an early age after studying bomb smithing with his mother.",
    "effect": "Death at forty five degrees",
    "slot": "bomb",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "78622bf8ccfb4b6b8f4ad11165615e88": {
    "guid": "78622bf8ccfb4b6b8f4ad11165615e88",
    "name": "QueenBombs",
    "displayName": "Queen's Bomb",
    "wiki": "Queen%27s_Bomb",
    "description": "Queen taught her sons everything she knows. but they were schooled on alternating days.",
    "effect": "Death in all directions",
    "slot": "bomb",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "079a976e3dd24ea8819941b9f81259c2": {
    "guid": "079a976e3dd24ea8819941b9f81259c2",
    "name": "TransmutagenBombs",
    "displayName": "Transmutagen Blast",
    "wiki": "Transmutagen_Blast",
    "description": "The powder has been soaked in Transmutagen, causing anything caught in the blast to be violently changed.",
    "effect": "Transforms items",
    "slot": "bomb",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "01dd414291604477aa1405b5683a29a3": {
    "guid": "01dd414291604477aa1405b5683a29a3",
    "name": "BrandingBombs",
    "displayName": "Branding Bomb",
    "wiki": "Branding_Bomb",
    "description": "You have now been marked with the brand of sacrifice. The lives of those who bear the brand will be consumed.",
    "effect": "Bombs brand enemies for sacrifice, +10 bombs",
    "slot": "bomb",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "0948c27e6bf3483292c1e2e065499018": {
    "guid": "0948c27e6bf3483292c1e2e065499018",
    "name": "LightningBombs",
    "displayName": "Lightning Bomb",
    "wiki": "Lightning_Bomb",
    "description": "Alchemists took the liquefied remains of the lightning bug and weaponized it... even more so.",
    "effect": "Bomb explosions chain lightning",
    "slot": "bomb",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "5e270234064d40d08b17881eee751dfd": {
    "guid": "5e270234064d40d08b17881eee751dfd",
    "name": "BloodBomb",
    "displayName": "Blood Bomb",
    "wiki": "Blood_Bomb",
    "description": "A cursed item, made with black powder and the blood of a lesser demon.",
    "effect": "Leeches life from enemies slain by bombs",
    "slot": "bomb",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "7a06da12309d4136917c71be7772e055": {
    "guid": "7a06da12309d4136917c71be7772e055",
    "name": "TsarBomba",
    "displayName": "Tsar Bomba",
    "wiki": "Tsar_Bomba",
    "description": "A strange duplication device that attaches to any kind of bomb. Beware of side effects.",
    "effect": "Killing enemies with a bomb spawns a new bomb. Carried bombs decrease swing and throw damage.",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "c3cf34b72ca743f7986c53215ec3a358": {
    "guid": "c3cf34b72ca743f7986c53215ec3a358",
    "name": "U235",
    "displayName": "U-235",
    "wiki": "U-235",
    "description": "A strange, glowing rock that emits a warm and comforting aura.",
    "effect": "Bomb damage is proportional to the number of carried bombs, +5 bombs",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "3640d085d4624902a191cefbacabd840": {
    "guid": "3640d085d4624902a191cefbacabd840",
    "name": "GeckoBlast",
    "displayName": "Gecko Blast",
    "wiki": "Gecko_Blast",
    "description": "Expands and then contracts the universal sticky force.",
    "effect": "Bomb blasts attract items",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "fd98fd90983c49f49e88267708a16807": {
    "guid": "fd98fd90983c49f49e88267708a16807",
    "name": "CaptureSphere",
    "displayName": "Capture Sphere",
    "wiki": "Capture_Sphere",
    "description": "The lifeforce of slain enemies is converted and saved for later.",
    "effect": "Bomb kills permanently increase bomb damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "a1231c3c35814d68aaae8d98cc882fd9": {
    "guid": "a1231c3c35814d68aaae8d98cc882fd9",
    "name": "RemoteDetonator",
    "displayName": "Remote Detonator",
    "wiki": "Remote_Detonator",
    "description": "Provided increased safety to miners, but deemed too costly and an unnecessary expense by management.",
    "effect": "Detonate bombs when you feel like it",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "403c20cf86844b8ba5a495752f890817": {
    "guid": "403c20cf86844b8ba5a495752f890817",
    "name": "ShortWicks",
    "displayName": "Short Wicks",
    "wiki": "Short_Wicks",
    "description": "A bundle of wicks, all cut short by a bombardier that lived dangerously.",
    "effect": "Reduces the bomb cooldown",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "724a50c9ac524f9fb3f527a5052e02a6": {
    "guid": "724a50c9ac524f9fb3f527a5052e02a6",
    "name": "Guantes",
    "displayName": "Guantes",
    "wiki": "Guantes",
    "description": "Warm and cozy gloves that keep you separated from the chilling touch of winter.",
    "effect": "Throw that pickaxe a bit harder",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "1808d1da72b540c1a611a560f5f89fb3": {
    "guid": "1808d1da72b540c1a611a560f5f89fb3",
    "name": "SequenceBreaker",
    "displayName": "Sequence Breaker",
    "wiki": "Sequence_Breaker",
    "description": "A contraption that allows the wearer to skip forward in time unbeknownst to others.",
    "effect": "Teleport to your pickaxe",
    "slot": "gloves",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "67aea971b4214697bb0cf4bdc4e904aa": {
    "guid": "67aea971b4214697bb0cf4bdc4e904aa",
    "name": "ThrowingStar",
    "displayName": "Throwing Star",
    "wiki": "Throwing_Star",
    "description": "An easily concealed weapon employed by assassins of the eastern kingdoms.",
    "effect": "Thrown pickaxe penetrates enemies and objects",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "b4e5f598694c439d8260e8539e0320b2": {
    "guid": "b4e5f598694c439d8260e8539e0320b2",
    "name": "Guidance",
    "displayName": "Guidance",
    "wiki": "Guidance",
    "description": "A comforting force that ensures everything is where it needs to be.",
    "effect": "Ricochet the thrown pickaxe",
    "slot": "gloves",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "01e0ef72372d4531a4a1cdb3cc265f97": {
    "guid": "01e0ef72372d4531a4a1cdb3cc265f97",
    "name": "PhantasmalAxe",
    "displayName": "Phantasmal Axe",
    "wiki": "Phantasmal_Axe",
    "description": "The axe is voracious and aggressively seeks new blood.",
    "effect": "Thrown pickaxes duplicate themselves",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "830216e9492c484489ef90c303f07b68": {
    "guid": "830216e9492c484489ef90c303f07b68",
    "name": "Chakram",
    "displayName": "Chakram",
    "wiki": "Chakram",
    "description": "A tool that seems oddly good at cutting down trees, but what's it doing underground?",
    "effect": "Throw a whirling blade of death",
    "slot": "gloves",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "48f2bb8ba1f742ca830edfaa91772625": {
    "guid": "48f2bb8ba1f742ca830edfaa91772625",
    "name": "Fork",
    "displayName": "Fork",
    "wiki": "Fork",
    "description": "An enchanted rune that was originally used to win trickshot competitions in the annual fair.",
    "effect": "Splits your ranged attacks",
    "slot": "gloves",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "b6f58486915b43b8bcd0004d74f9182b": {
    "guid": "b6f58486915b43b8bcd0004d74f9182b",
    "name": "BottledLightning",
    "displayName": "Bottled Lightning",
    "wiki": "Bottled_Lightning",
    "description": "\"Bottling lightning isn't something you do twice, because it kills you.\" - Dirk, the Alchemist",
    "effect": "Chance on hit to chain lightning",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "efa267f58ead4081a7c8d7769a5e6bf8": {
    "guid": "efa267f58ead4081a7c8d7769a5e6bf8",
    "name": "SalamanderTail",
    "displayName": "Salamander Tail",
    "wiki": "Salamander_Tail",
    "description": "Separated from the legendary creature Seer, the tail still writhes in agony.",
    "effect": "Chance on hit to ignite your enemies",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "aede3a51037549b9b0eeeec881d5168e": {
    "guid": "aede3a51037549b9b0eeeec881d5168e",
    "name": "CripplingPoison",
    "displayName": "Crippling Poison",
    "wiki": "Crippling_Poison",
    "description": "A rare poison collected in the bogs of Moor.",
    "effect": "Chance on hit to poison your enemies",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "e25c4adfa3e04022ae18673db8f83276": {
    "guid": "e25c4adfa3e04022ae18673db8f83276",
    "name": "CausticVial",
    "displayName": "Caustic Vial",
    "wiki": "Caustic_Vial",
    "description": "A vile vial of liquid that rests in the pickaxe head. A mechanism injects victims upon impact.",
    "effect": "Enemies hit with the thrown pickaxe explode on death",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "0c33fc50f8d94d518803789c0b7f2185": {
    "guid": "0c33fc50f8d94d518803789c0b7f2185",
    "name": "CrackedOrb",
    "displayName": "Cracked Orb",
    "wiki": "Cracked_Orb",
    "description": "Pain and misery ooze from the cracks of this dark orb.",
    "effect": "Curse enemies with increased damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "9fcfbe4652be48ec82ea6a8431a18d37": {
    "guid": "9fcfbe4652be48ec82ea6a8431a18d37",
    "name": "UrsineRing",
    "displayName": "Ursine Ring",
    "wiki": "Ursine_Ring",
    "description": "\"The bear is a symbol of power, strength, and overall badassery.\" - Toadvine, Guard Captain",
    "effect": "Increase health",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "29799d6270d24f018cef3d360eebc5e7": {
    "guid": "29799d6270d24f018cef3d360eebc5e7",
    "name": "DemonRing",
    "displayName": "Demon Ring",
    "wiki": "Demon_Ring",
    "description": "A ring passed down from generation to generation until it was lost by a careless child demon.",
    "effect": "Increase swing damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "651c313904884b19afcd5a1da136c01c": {
    "guid": "651c313904884b19afcd5a1da136c01c",
    "name": "MediocreRing",
    "displayName": "Mediocre Ring",
    "wiki": "Mediocre_Ring",
    "description": "This ring could never decide what it wanted to be, so now it's just okay at a couple of things.",
    "effect": "Increases health and damage",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "3693999de5e94fcd81b5fcd53c13e8b4": {
    "guid": "3693999de5e94fcd81b5fcd53c13e8b4",
    "name": "BerserkerPendant",
    "displayName": "Berserker's Pendant",
    "wiki": "Berserker%27s_Pendant",
    "description": "A necklace of gnarled orc fangs, caked in blood.",
    "effect": "Deal more swing damage at low health",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "2fe62c4bfc084a7a8516c18f23575fb3": {
    "guid": "2fe62c4bfc084a7a8516c18f23575fb3",
    "name": "AxeThrowersPendant",
    "displayName": "Axe Thrower's Pendant",
    "wiki": "Axe_Thrower%27s_Pendant",
    "description": "A simple metal choker inscribed with the crest of the hill troll tribe.",
    "effect": "Deal more throw damage at low health",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "10444b01cc944bdc92bbc183ecfd4dfe": {
    "guid": "10444b01cc944bdc92bbc183ecfd4dfe",
    "name": "KnightPendant",
    "displayName": "Knight's Pendant",
    "wiki": "Knight%27s_Pendant",
    "description": "An award for courage, and a symbol of valor.",
    "effect": "Deal more swing damage at high health",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "77af6531c8294f249cf55fd69c74bd8a": {
    "guid": "77af6531c8294f249cf55fd69c74bd8a",
    "name": "ArchersPendant",
    "displayName": "Archer's Pendant",
    "wiki": "Archer%27s_Pendant",
    "description": "Once a year an archery tournament is held in Delvemore. This pendant is the prize.",
    "effect": "Deal more throw damage at high health",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "e790a903a95240ffa6ff75f0c17475cd": {
    "guid": "e790a903a95240ffa6ff75f0c17475cd",
    "name": "IronBranch",
    "displayName": "Iron Branch",
    "wiki": "Iron_Branch",
    "description": "A strange branch with strange properties. For instance, planting one in the ground will grow a small tree instantaneously.",
    "effect": "Increase health, swing damage, and attack speed",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "e21cf8a29a6b4277b40ba59cb04c299b": {
    "guid": "e21cf8a29a6b4277b40ba59cb04c299b",
    "name": "CrownQueens",
    "displayName": "Queen's Crown",
    "wiki": "Queen%27s_Crown",
    "description": "The land that is now Delvmore was once ruled by giants. The old giant king's crown was forged into two complimentary crowns for the King and Queen.",
    "effect": "Increase throw damage, swing size, and swing speed",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "0248a19ceeb042c096a827dbcb5b10de": {
    "guid": "0248a19ceeb042c096a827dbcb5b10de",
    "name": "CrownKings",
    "displayName": "King's Crown",
    "wiki": "King%27s_Crown",
    "description": "While a monarchy by definition has a single ruler, the King and Queen are two halves of a whole.",
    "effect": "Increase swing damage, throw size, and throw speed",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "5efb8642758041cfb29b8555ce405f41": {
    "guid": "5efb8642758041cfb29b8555ce405f41",
    "name": "CrownEmperors",
    "displayName": "Emperor's Crown",
    "wiki": "Emperor%27s_Crown",
    "description": "Kings and Queens are anointed by the divine will, but Emperors... well they are the divine will.",
    "effect": "Increases stats and receive a blessing",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "6e31da144f9b4820a3442e42883a52e5": {
    "guid": "6e31da144f9b4820a3442e42883a52e5",
    "name": "PilferRing",
    "displayName": "Pilfer Ring",
    "wiki": "Pilfer_Ring",
    "description": "A token of friendship between the pilfers and peasants of Delvemore.",
    "effect": "Soak up gold and get a discount at the shop",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "7c1a74b4bc5e4398b2a10459f9b50b21": {
    "guid": "7c1a74b4bc5e4398b2a10459f9b50b21",
    "name": "UnstableConcoction",
    "displayName": "Unstable Concoction",
    "wiki": "Unstable_Concoction",
    "description": "A substance that combines with gold and force to create devastating effects.",
    "effect": "Gold hits the floor with explosive force",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "9c707dd6871a44b7b7326ad378f41a38": {
    "guid": "9c707dd6871a44b7b7326ad378f41a38",
    "name": "GoldTooth",
    "displayName": "Gold Tooth",
    "wiki": "Gold_Tooth",
    "description": "A morbid trinket picked off a prospector who lived way beyond his years.",
    "effect": "Sustain yourself on gold",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "ebe6a743ac76455ea4771e300ebc0b7b": {
    "guid": "ebe6a743ac76455ea4771e300ebc0b7b",
    "name": "GoldenDelicious",
    "displayName": "Golden Delicious",
    "wiki": "Golden_Delicious",
    "description": "A cursed apple, turned to gold by a fool who didn't know what they were wishing for.",
    "effect": "All food is golden and extra delicious",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "277d2316237d49109d6d1439f7df6e14": {
    "guid": "277d2316237d49109d6d1439f7df6e14",
    "name": "Conductor",
    "displayName": "Conductor",
    "wiki": "Conductor",
    "description": "Created with the golden entrails of a monster whose arrogance was unbound.",
    "effect": "Electrify your enemies when picking up gold",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "0533edf2633049baa08a73d7ba5ef518": {
    "guid": "0533edf2633049baa08a73d7ba5ef518",
    "name": "GoldFrenzy",
    "displayName": "Gold Frenzy",
    "wiki": "Gold_Frenzy",
    "description": "Do not underestimate the lengths one will go to to defend their fortune",
    "effect": "Gain temporary damage when picking up gold",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "7c3dcc99d36d4f6f8bcc2524ecdb93e8": {
    "guid": "7c3dcc99d36d4f6f8bcc2524ecdb93e8",
    "name": "Intensifier",
    "displayName": "Intensifier",
    "wiki": "Intensifier",
    "description": "An arrogant stone that disobeys the laws of thermodynamics.",
    "effect": "Increases damage when killing enemies",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "a596ffca42664024be1aeba28ad46f24": {
    "guid": "a596ffca42664024be1aeba28ad46f24",
    "name": "SkullShield",
    "displayName": "Skull Shield",
    "wiki": "Skull_Shield",
    "description": "Skulls animated by some long dead necromancer.",
    "effect": "A shield that blocks projectiles, most of the time",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "23ed5e24dd3c420eacbf5c006e61be87": {
    "guid": "23ed5e24dd3c420eacbf5c006e61be87",
    "name": "ReflectProjectiles",
    "displayName": "Grimhilde's Mirror",
    "wiki": "Grimhilde%27s_Mirror",
    "description": "\"Discussions with the mirror are unwise.\" - Arkanos, the Archmage",
    "effect": "Return projectiles with an attack",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "db4baf760be740b99ff679a838ee3ee4": {
    "guid": "db4baf760be740b99ff679a838ee3ee4",
    "name": "MirrorShield",
    "displayName": "Mirror Shield",
    "wiki": "Mirror_Shield",
    "description": "Impervious to the passage of time, this ancient aegis has survived the rise and fall of countless kingdoms.",
    "effect": "Automatically reflect projectiles",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "91f466ecbb87497b943eabd77f6e4681": {
    "guid": "91f466ecbb87497b943eabd77f6e4681",
    "name": "HungrySpirit",
    "displayName": "Hungry Ghost",
    "wiki": "Hungry_Ghost",
    "description": "The spirit of a selfish and vindictive king. He remains selfish and vindictive in death.",
    "effect": "Leach the life of your enemies",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "dd44a1f545ad48cda6d653cb6b5eaafb": {
    "guid": "dd44a1f545ad48cda6d653cb6b5eaafb",
    "name": "NullStone",
    "displayName": "Nullstone",
    "wiki": "Nullstone",
    "description": "\"Being invincible once in a while is better than never at all.\" - Proverb",
    "effect": "Block a hit once in a while",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "35ccd3bee9604d10988601bfecb53a3a": {
    "guid": "35ccd3bee9604d10988601bfecb53a3a",
    "name": "Mushroom",
    "displayName": "Mushroom",
    "wiki": "Mushroom",
    "description": "When logic and proportion have fallen sloppy dead, and the white knight is talking backwards.",
    "effect": "Gain maximum health when killing enemies",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "eaf60a76dda742928cdd8f75d3e22eca": {
    "guid": "eaf60a76dda742928cdd8f75d3e22eca",
    "name": "Clover",
    "displayName": "Four Leaf Clover",
    "wiki": "Four_Leaf_Clover",
    "description": "Much luckier than a three leaf clover. Not nearly as lucky as a five leaf clover.",
    "effect": "Hit the gold right out of your enemies' pockets",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "69994ce940d94e439ab01d04a9c176e7": {
    "guid": "69994ce940d94e439ab01d04a9c176e7",
    "name": "Tent",
    "displayName": "Tent",
    "wiki": "Tent",
    "description": "Sometimes, the best thing to do is just take a nap.",
    "effect": "Adds a tent to the starting room of a floor, one use only",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "56fb37c63e434aa08fa3c868c3c4d9c3": {
    "guid": "56fb37c63e434aa08fa3c868c3c4d9c3",
    "name": "Aegis",
    "displayName": "Aegis",
    "wiki": "Aegis",
    "description": "The Knight Toadvine defended his loyal companion against orders and was subsequently demoted to Guard Captain for his disobedience.",
    "effect": "Increase defense at critical health",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "fdf3edb47a594d0f870acabb1d82d433": {
    "guid": "fdf3edb47a594d0f870acabb1d82d433",
    "name": "Map",
    "displayName": "Map",
    "wiki": "Map",
    "description": "\"Discover the secrets of the UnderMine!\" is written in playful lettering, on the front.",
    "effect": "Get a peep at your surroundings",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "d537cbb8584b4a3fbe45f0ceef4f2ef1": {
    "guid": "d537cbb8584b4a3fbe45f0ceef4f2ef1",
    "name": "PetrifiedRock",
    "displayName": "Petrified Rock",
    "wiki": "Petrified_Rock",
    "description": "Simply touching this rock makes one feel luckier.",
    "effect": "Increase drop rate of items from rocks",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "3776afb876a74e50911b6d3080f0388d": {
    "guid": "3776afb876a74e50911b6d3080f0388d",
    "name": "RatBond",
    "displayName": "Rat Bond",
    "wiki": "Rat_Bond",
    "description": "A token of friendship between peasant and pest.",
    "effect": "Become charming to rats",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "97fbd863c09b44fa9605e675e7275f85": {
    "guid": "97fbd863c09b44fa9605e675e7275f85",
    "name": "CosmicEgg",
    "displayName": "Cosmic Egg",
    "wiki": "Cosmic_Egg",
    "description": "An egg, rumored to exist since before creation, births and nurtures fantastic creatures",
    "effect": "Increases experience gain for a familiar",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "3d321813e7904a1486d6243defa59cc3": {
    "guid": "3d321813e7904a1486d6243defa59cc3",
    "name": "BirthingPod",
    "displayName": "Birthing Pod",
    "wiki": "Birthing_Pod",
    "description": "This chamber that greedily consumes any and all nearby nutrition, diverting it to the embryo inside.",
    "effect": "Consumes all healing until birth",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "898d87f98b184697ac89672f9bf955e4": {
    "guid": "898d87f98b184697ac89672f9bf955e4",
    "name": "CreditCardSilver",
    "displayName": "Pilfer Credit Card Silver",
    "wiki": "Pilfer Credit Card Silver",
    "description": "Pilfers have unusually long memories so try not to leave your debt for the next guy.",
    "effect": "A 2,500 limit at 0% interest",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "f83c843bf28e48afbb6f3aec7d5d0eed": {
    "guid": "f83c843bf28e48afbb6f3aec7d5d0eed",
    "name": "CreditCardGold",
    "displayName": "Pilfer Credit Card Gold",
    "wiki": "Pilfer_Credit_Card_Gold",
    "description": "Not so fine print: This contract is not void in the case of death or dismemberment. Your next of kin will be responsible for repayment.",
    "effect": "A 5,000 limit at 0% interest!",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "87dd4661d57b48c3812b4c962c00cc2e": {
    "guid": "87dd4661d57b48c3812b4c962c00cc2e",
    "name": "CreditCardBlack",
    "displayName": "Pilfer Credit Card Black Edition",
    "wiki": "Pilfer_Credit_Card_Black_Edition",
    "description": "For prefered customers who have proven to have upstanding credit.",
    "effect": "7,500 limit and 5% cash back!",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "189b6fc98b1849ea848523610481af7d": {
    "guid": "189b6fc98b1849ea848523610481af7d",
    "name": "ButchersClover",
    "displayName": "Four Leaf Cleaver",
    "wiki": "Four_Leaf_Cleaver",
    "description": "Much luckier than a Four Leaf Clover. Much deadlier too.",
    "effect": "Sometimes drop golden meat from your enemies",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "f3973f00fda94bfbb4eed373ed28b775": {
    "guid": "f3973f00fda94bfbb4eed373ed28b775",
    "name": "RabbitGloves",
    "displayName": "Rabbit Gloves",
    "wiki": "Rabbit_Gloves",
    "description": "\"Who pilfers the pilfers? I do.\" - Black Rabbit",
    "effect": "Get a free item in every shop",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "4202645d8fa34a97a70ded11ee0f8f31": {
    "guid": "4202645d8fa34a97a70ded11ee0f8f31",
    "name": "KarmicScale",
    "displayName": "Karmic Scale",
    "wiki": "Karmic_Scale",
    "description": "A powerful relic that restores balance and order to the world. Positive and negative become one.",
    "effect": "Health, damage, and healing become small and even",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "bab552535a104b059e636abfd7d05685": {
    "guid": "bab552535a104b059e636abfd7d05685",
    "name": "PocketOfHolding",
    "displayName": "Pocket of Holding",
    "wiki": "Pocket_of_Holding",
    "description": "A pocket of normal size, but enormous carrying capacity.",
    "effect": "Get some temporary bombs each room",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "4cf72d4585f64a95b4d614bd559e4d58": {
    "guid": "4cf72d4585f64a95b4d614bd559e4d58",
    "name": "LockPick",
    "displayName": "Lockpick",
    "wiki": "Lockpick",
    "description": "This thief's tool bears the engraving of a rabbit. Also, an engraving that reads \"Black Rabbit's, hands off!\" Further down it also reads \"Seriously!\"",
    "effect": "Open locks for free, but for how long?",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "5a5b61097a034cfeb6858d2d6c809af0": {
    "guid": "5a5b61097a034cfeb6858d2d6c809af0",
    "name": "LuckyCharm",
    "displayName": "Lucky Charm",
    "wiki": "Lucky_Charm",
    "description": "Many have wondered how the street urchin Olivia avoided meeting her end in the Crawl, a dangerous slum of the capital.",
    "effect": "A chance at avoiding death",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "52d4e1bd77c84ec790991cf8e87d2ebc": {
    "guid": "52d4e1bd77c84ec790991cf8e87d2ebc",
    "name": "LuckyLockpick",
    "displayName": "Lucky Lockpick",
    "wiki": "Lucky_Lockpick",
    "description": "\"I don't know what you are talking about. This baby never breaks.\" - Black Rabbit",
    "effect": "A chance to not die, and no chance to break",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "7b5f646318f3454dacb28fc75eb8c0f2": {
    "guid": "7b5f646318f3454dacb28fc75eb8c0f2",
    "name": "Inverter",
    "displayName": "Inverter",
    "wiki": "Inverter",
    "description": "An ingenious inventor came to the faith late, and made the most of his second life.",
    "effect": "Lost curses become blessings",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "82b826e6d3044504bfa46c4caa6f1b0b": {
    "guid": "82b826e6d3044504bfa46c4caa6f1b0b",
    "name": "Recycler",
    "displayName": "Recycler",
    "wiki": "Recycler",
    "description": "Sometimes people hide things in a false bottom. There is only one way to know for sure.",
    "effect": "Destroy empty chests for items",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "0682d92aff14474d895c2e91f8826f25": {
    "guid": "0682d92aff14474d895c2e91f8826f25",
    "name": "FanOfKnives",
    "displayName": "Fan of Knives",
    "wiki": "Fan_of_Knives",
    "description": "A devious contraption, invented by a woman who once killed a king. It took the guards an entire hour to figure out what had happened.",
    "effect": "Release a spray of daggers when you throw",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "f5e0082e84c74286829fa52bf633cbeb": {
    "guid": "f5e0082e84c74286829fa52bf633cbeb",
    "name": "KurtzStache",
    "displayName": "Kurtz' Stache",
    "wiki": "Kurtz%27_Stache",
    "description": "Before his party was lost, Kurtz had the foresight to stash away some things for safe keeping.",
    "effect": "A mysterious box that invites calamity",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "b7a8798a25ca4137a95538358085f2f4": {
    "guid": "b7a8798a25ca4137a95538358085f2f4",
    "name": "GlassCannon",
    "displayName": "Glass Cannon",
    "wiki": "Glass_Cannon",
    "description": "You can only fire it once. If fired true at its target, another shot will not be necessary.",
    "effect": "Increases damage, but decreases maximum health",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "legendary"]
  },
  "2e8dd836a09f4e47b57e23b4d00f16ec": {
    "guid": "2e8dd836a09f4e47b57e23b4d00f16ec",
    "name": "SoulCannon",
    "displayName": "Soul Cannon",
    "wiki": "Soul_Cannon",
    "description": "A void in space that fires powerful bolts which seem to react to the velocity of attacks.",
    "effect": "Fire a projectile while swinging",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "ecc0480e43924477ad68b3e9beb631b3": {
    "guid": "ecc0480e43924477ad68b3e9beb631b3",
    "name": "Ara",
    "displayName": "Ara",
    "wiki": "Ara",
    "description": "Also known as \"The Altar.\" This constellation protects against bad omens, for a while.",
    "effect": "Consumes a future curse after praying",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "6ca902940c004d7c957fe367f77e7337": {
    "guid": "6ca902940c004d7c957fe367f77e7337",
    "name": "UrsaMajor",
    "displayName": "Ursa Major",
    "wiki": "Ursa_Major",
    "description": "Consume now, for the winter is long and the landscape desolate.",
    "effect": "Increases max health after eating food",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "4ca66dcd2df34cbcbef82e2c5cafd5fc": {
    "guid": "4ca66dcd2df34cbcbef82e2c5cafd5fc",
    "name": "CanisMajor",
    "displayName": "Canis Major",
    "wiki": "Canis_Major",
    "description": "The dogs of dogs. Strong, loyal, and above all else, fierce.",
    "effect": "Crits temporarily increase crit chance",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "993daf5814304f9da36d0080fe4b9cbc": {
    "guid": "993daf5814304f9da36d0080fe4b9cbc",
    "name": "Sagitta",
    "displayName": "Sagitta",
    "wiki": "Sagitta",
    "description": "A drawn arrow holds the energy to destroy its target. Guide it.",
    "effect": "Enemies explode in arrows after a critical strike",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "7aedab48d5ca4e5b8d9f33a292ef38ef": {
    "guid": "7aedab48d5ca4e5b8d9f33a292ef38ef",
    "name": "Circinus",
    "displayName": "Circinus",
    "wiki": "Circinus",
    "description": "An explorer's tool that reveals any and all secrets.",
    "effect": "Temporarily reveals secret rooms, secret rooms can have secret rooms",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "24e76c8b632c48f78b0a3060d4d1f786": {
    "guid": "24e76c8b632c48f78b0a3060d4d1f786",
    "name": "CursedAegis",
    "displayName": "Siegfried's Aegis",
    "wiki": "Siegfried%27s_Aegis",
    "description": "The paladin Siegfried sacrificed his soul to Sho'guul for the salvation of his family and thus was forever cursed.",
    "effect": "Inflicts pain on the bearer",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "common"]
  },
  "a6587dfd53e54a20ab1a167bc2b40e4a": {
    "guid": "a6587dfd53e54a20ab1a167bc2b40e4a",
    "name": "PaladinShield",
    "displayName": "Paladin Shield",
    "wiki": "Paladin_Shield",
    "description": "Siegfried's shield, rid of its agonizing curse. Purified by a nameless wanderer. His legacy redeemed.",
    "effect": "Increases stats",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "rare"]
  },
  "5445617cf5a24b678e1680f88ba4f134": {
    "guid": "5445617cf5a24b678e1680f88ba4f134",
    "name": "HotCrossBun",
    "displayName": "Hot Cross Bun",
    "wiki": "Hot_Cross_Bun",
    "description": "\"Just like mom used to bake.\" - Wayland",
    "effect": "Increases maximum health, very slightly",
    "slot": "relic",
    "attributes": ["schematic", "item", "relic", "misc", "common"]
  },
  "42ce36751420492584d4a447c129e30c": {
    "guid": "42ce36751420492584d4a447c129e30c",
    "name": "Arachnophobia",
    "displayName": "Arachnophobia",
    "wiki": "Arachnophobia",
    "description": "It is understandable to have a fear of spiders, if after a hard fought battle the reward is more spiders.",
    "effect": "Enemies release spiders on death",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "a73024497040468a9daf7790a9167b1e": {
    "guid": "a73024497040468a9daf7790a9167b1e",
    "name": "SweatyPalms",
    "displayName": "Sweaty Palms",
    "wiki": "Sweaty_Palms",
    "description": "The first rule of transporting explosives to make sure they are fastened securely.",
    "effect": "Chance to lose a bomb when you take damage",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "3bf7b541f02f4bbb9c7bafebdb7fd41e": {
    "guid": "3bf7b541f02f4bbb9c7bafebdb7fd41e",
    "name": "SweatyFingers",
    "displayName": "Sweaty Fingers",
    "wiki": "Sweaty_Fingers",
    "description": "The rest of the hands are dry. It is just the fingers that are sweaty.",
    "effect": "Chance to lose a key when you take damage",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "cef6755dbc2e415e8cdff8cfbe1a4a58": {
    "guid": "cef6755dbc2e415e8cdff8cfbe1a4a58",
    "name": "PilferNightmare",
    "displayName": "Pilfer's Nightmare",
    "wiki": "Pilfer%27s_Nightmare",
    "description": "Typical Pilfers can be a nuisance, but these... these little edge lords are a nightmare.",
    "effect": "New and more dangerous Pilfers",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "4c811aa722884d6ab36404edf9c79eb1": {
    "guid": "4c811aa722884d6ab36404edf9c79eb1",
    "name": "Mimephobia",
    "displayName": "Metamfiezomaiophobia",
    "wiki": "Metamfiezomaiophobia",
    "description": "One's mind races and paranoia abounds, but is it paranoia when even the chests are out to get you?",
    "effect": "More mimics than you would like",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "af4d151c98bc4eb9841767e2e4cd643b": {
    "guid": "af4d151c98bc4eb9841767e2e4cd643b",
    "name": "RelicEater",
    "displayName": "Relic Eater",
    "wiki": "Relic_Eater",
    "description": "A curse that thirsts for power, but is left unsatisfied when it tastes it.",
    "effect": "Killing enemies destroys a relicKilling enemies destroys a relic",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "a6d6119f24ab44b5ac3e292c66b039c3": {
    "guid": "a6d6119f24ab44b5ac3e292c66b039c3",
    "name": "BlessingEater",
    "displayName": "Blessing Eater",
    "wiki": "Blessing_Eater",
    "description": "A spiteful curse that hungers for favor.",
    "effect": "Killing enemies destroys a blessing",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "3cebb72f2cb94342aa1c6c2d455fa8f8": {
    "guid": "3cebb72f2cb94342aa1c6c2d455fa8f8",
    "name": "ItemEater",
    "displayName": "Item Eater",
    "wiki": "Item_Eater",
    "description": "A more mundane curse, settling for the simpler things.",
    "effect": "Killing enemies destroys items",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "861f2ce31df64b76b15c9e143c60be23": {
    "guid": "861f2ce31df64b76b15c9e143c60be23",
    "name": "Tariffs",
    "displayName": "Tariffs",
    "wiki": "Tariffs",
    "description": "There is a price for everything, and that price can be increased.",
    "effect": "Double all costs",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "18c02d8c98514cd7b3a6e35683a63462": {
    "guid": "18c02d8c98514cd7b3a6e35683a63462",
    "name": "Inflation",
    "displayName": "Inflation",
    "wiki": "Inflation",
    "description": "The relationship with the Pilfers is tenuous and fickle. Scorn them and suffer the consequences.",
    "effect": "Increases the cost of shop items",
    "slot": "minor_curse",
    "attributes": ["curse", "minor", "common"]
  },
  "f127a5676b15448cb31eef774e4866a3": {
    "guid": "f127a5676b15448cb31eef774e4866a3",
    "name": "MarketCrash",
    "displayName": "Market Crash",
    "wiki": "Market_Crash",
    "description": "A pioneering Noble once attempted to raise the price of potatoes by hoarding them, only for them to rot in his cellar.",
    "effect": "Increases the cost of shop items",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "2ee178171a0542c1b0b33c3638bc882b": {
    "guid": "2ee178171a0542c1b0b33c3638bc882b",
    "name": "Poverty",
    "displayName": "Poverty",
    "wiki": "Poverty",
    "description": "\"Hasn't anyone told you it costs more to be poor?\" - Black Rabbit",
    "effect": "Decrease the amount of gold received",
    "slot": "minor_curse",
    "attributes": ["curse", "minor", "common"]
  },
  "00724b8396b24ddda26cac3b27ca8d41": {
    "guid": "00724b8396b24ddda26cac3b27ca8d41",
    "name": "LowStock",
    "displayName": "Low Stock",
    "wiki": "Low_Stock",
    "description": "Supply chains have been crushed, and the kingdom's river of goods run dry.",
    "effect": "Reduced shop options",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "5c58a6d3e7184a0c9b5a31ca08a5ee12": {
    "guid": "5c58a6d3e7184a0c9b5a31ca08a5ee12",
    "name": "BloodPact",
    "displayName": "Blood Pact",
    "wiki": "Blood_Pact",
    "description": "Toil is the act of trading health for something tangible.",
    "effect": "Costs health to plant bombs",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "c222d9dab4f4499a9ed5f894b172e5f8": {
    "guid": "c222d9dab4f4499a9ed5f894b172e5f8",
    "name": "PowderShortage",
    "displayName": "Powder Shortage",
    "wiki": "Powder_Shortage",
    "description": "A generation ago, three sulfur mines ran dry almost simultaneously. Bomb smiths made due, but mining operations slowed down considerably.",
    "effect": "Dropping a bomb costs 2 bombs",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "f8c5ec2536e648989e3ee6aa6b08b57d": {
    "guid": "f8c5ec2536e648989e3ee6aa6b08b57d",
    "name": "RainOfFire",
    "displayName": "Rain of Fire",
    "wiki": "Rain_of_Fire",
    "description": "Targon, the Bold was cursed with fire and brimstone after having severed the great Firelord's tail.",
    "effect": "Droplets of fire fall from the sky",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "3f24c4e8d3254df8b6d13b0cd38acf3f": {
    "guid": "3f24c4e8d3254df8b6d13b0cd38acf3f",
    "name": "WakingLight",
    "displayName": "Waking Light",
    "wiki": "Waking_Light",
    "description": "The lanterns, the torches, and the braziers watch on and they hunt with a fiery vengeance.",
    "effect": "Torches and lanterns fire fireballs",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "4d7cb97a86be4113b6fe61a97550247b": {
    "guid": "4d7cb97a86be4113b6fe61a97550247b",
    "name": "SalamandersWrath",
    "displayName": "Salamander's Wrath",
    "wiki": "Salamander%27s_Wrath",
    "description": "The moment Seer's tail was severed the creature set out a roar so fierce that rock shattered and iron was set ablaze.",
    "effect": "All enemies ignite the peasant",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "b578c14ad2b4493a8e8187c46e675f16": {
    "guid": "b578c14ad2b4493a8e8187c46e675f16",
    "name": "FastMetabolism",
    "displayName": "Fast Metabolism",
    "wiki": "Fast_Metabolism",
    "description": "Blessed with a cut jawline and sinewy limbs, but cursed with the inability to maintain a buzz.",
    "effect": "Decreases potion duration",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "9d0586c51fb540aabe6a58e6064aa991": {
    "guid": "9d0586c51fb540aabe6a58e6064aa991",
    "name": "Venomous",
    "displayName": "Venomous",
    "wiki": "Venomous",
    "description": "Now it is not just the spiders and the serpents you must be weary of, for all creatures carry fate in their fangs.",
    "effect": "All enemies inflict poison",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "beeaeaf000bf435683c5c5293932c496": {
    "guid": "beeaeaf000bf435683c5c5293932c496",
    "name": "Plague",
    "displayName": "Plague",
    "wiki": "Plague",
    "description": "\"We knew the food was tainted, but we had no other choice.\" Survivor of the Lingering Miasma",
    "effect": "Uncooked food is less effective and has a chance to poison",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "1533ba9d0d294c1f8c93ed4ae245e9df": {
    "guid": "1533ba9d0d294c1f8c93ed4ae245e9df",
    "name": "Tenderfoot",
    "displayName": "Tenderfoot",
    "wiki": "Tenderfoot",
    "description": "Peasants are issued one pair of boots a year. The boots never last an entire year.",
    "effect": "Take damage when you jump",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "bd9d1797ebd8411aa82ba727cb8a6e94": {
    "guid": "bd9d1797ebd8411aa82ba727cb8a6e94",
    "name": "EmptyCoffers",
    "displayName": "Empty Coffers",
    "wiki": "Empty_Coffers",
    "description": "\"In my version of the story, the hare wins.\" - Black Rabbit",
    "effect": "Chests are sometimes empty",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "32f39a9ff9f54295a3fe7c42e5b2ad5d": {
    "guid": "32f39a9ff9f54295a3fe7c42e5b2ad5d",
    "name": "Rigged",
    "displayName": "Rigged",
    "wiki": "Rigged",
    "description": "\"You win some, you lose... a lot? Is that how it goes?\" - Black Rabbit",
    "effect": "Chests are trapped more often",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "4d5eb4480bdc4ab3b36087fbc9926e69": {
    "guid": "4d5eb4480bdc4ab3b36087fbc9926e69",
    "name": "TheCrumbles",
    "displayName": "The Crumbles",
    "wiki": "The_Crumbles",
    "description": "Catching a case of the crumbles is clearly a cause for concern!",
    "effect": "Items become extra fragile",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "682d41064792492b9cf351de9bd8a405": {
    "guid": "682d41064792492b9cf351de9bd8a405",
    "name": "PoisonMushroom",
    "displayName": "Poison Mushroom",
    "wiki": "Poison_Mushroom",
    "description": "One makes you larger, and one makes you small.",
    "effect": "Lose maximum health when killing enemies",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "8138983272d648e9b47995a8c7b5324c": {
    "guid": "8138983272d648e9b47995a8c7b5324c",
    "name": "HauntedLocks",
    "displayName": "Haunted Locks",
    "wiki": "Haunted_Locks",
    "description": "Peering through the keyhole reveals a colorful and twisting gateway into another realm.",
    "effect": "Costs health to use a key",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "852d2b8abf6446ad81e078472f503b2d": {
    "guid": "852d2b8abf6446ad81e078472f503b2d",
    "name": "Lethargy",
    "displayName": "Lethargy",
    "wiki": "Lethargy",
    "description": "The heart is willing but the arms are weak and lifeless.",
    "effect": "Deal less swing damage",
    "slot": "minor_curse",
    "attributes": ["curse", "minor", "common"]
  },
  "d0cc30fbf196423ea49170a2995e0549": {
    "guid": "d0cc30fbf196423ea49170a2995e0549",
    "name": "Weakness",
    "displayName": "Weakness",
    "wiki": "Weakness",
    "description": "Palms are sweaty, knees weak, arms are heavy. There is vomit on the tunic already.",
    "effect": "Deal less swing damage",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "7dc2f7af7fd34fe3b6d5d92f30d20acd": {
    "guid": "7dc2f7af7fd34fe3b6d5d92f30d20acd",
    "name": "Imbalance",
    "displayName": "Imbalance",
    "wiki": "Imbalance",
    "description": "Every wobbly step, every flinch of the arm worms its way into the brain and feeds a lack of confidence.",
    "effect": "Deal less throw damage",
    "slot": "minor_curse",
    "attributes": ["curse", "minor", "common"]
  },
  "0ff4a9c19f294ce4ba489c447ad8df43": {
    "guid": "0ff4a9c19f294ce4ba489c447ad8df43",
    "name": "Wobbly",
    "displayName": "Wobbly",
    "wiki": "Wobbly",
    "description": "Every wobbly step, every flinch of the arm worms its way into the brain and feeds a lack of confidence.",
    "effect": "Deal less throw damage",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "f4b43b06f1c34576820b596a38dd4a17": {
    "guid": "f4b43b06f1c34576820b596a38dd4a17",
    "name": "Mediocrity",
    "displayName": "Mediocrity",
    "wiki": "Mediocrity",
    "description": "Live up to the challenge, or die in mediocrity.",
    "effect": "Can no longer critical strike",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "2976adb134a24dd9bce3cdcc1837fc81": {
    "guid": "2976adb134a24dd9bce3cdcc1837fc81",
    "name": "Frailty",
    "displayName": "Frailty",
    "wiki": "Frailty",
    "description": "Complacency can turn that which is tough, hearty, and strong into something as delicate and fragile as an eggshell.",
    "effect": "Reduced maximum health",
    "slot": "minor_curse",
    "attributes": ["curse", "minor", "common"]
  },
  "70c32c9d2d394c40bfca62485390363b": {
    "guid": "70c32c9d2d394c40bfca62485390363b",
    "name": "Enfeebled",
    "displayName": "Enfeebled",
    "wiki": "Enfeebled",
    "description": "Age catches up with us all.",
    "effect": "Reduced maximum health",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "1e7be481409349c9bfd91d83372ca68b": {
    "guid": "1e7be481409349c9bfd91d83372ca68b",
    "name": "Illness",
    "displayName": "Illness",
    "wiki": "Illness",
    "description": "Even the mightiest of kings succumbs to illness.",
    "effect": "Healing is less effective",
    "slot": "minor_curse",
    "attributes": ["curse", "minor", "common"]
  },
  "6d39054e84bf4b909ed76e6112921e4a": {
    "guid": "6d39054e84bf4b909ed76e6112921e4a",
    "name": "Fever",
    "displayName": "Fever",
    "wiki": "Fever",
    "description": "Peasants are accustomed to being hot and sweaty, but not like this.",
    "effect": "Healing is less effective",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "31fa6f68d67349c0a54e1fae385a4b9a": {
    "guid": "31fa6f68d67349c0a54e1fae385a4b9a",
    "name": "Clumsiness",
    "displayName": "Clumsiness",
    "wiki": "Clumsiness",
    "description": "It is easy to come between a fool and his gold. It is especially easy when the fool leaves the gold lying around.",
    "effect": "Lose more gold on death",
    "slot": "minor_curse",
    "attributes": ["curse", "minor", "common"]
  },
  "e8cff42469714a73b49def4009b3dfd9": {
    "guid": "e8cff42469714a73b49def4009b3dfd9",
    "name": "Ineptitude",
    "displayName": "Ineptitude",
    "wiki": "Ineptitude",
    "description": "\"Where did I leave my goldsack?\" - Unemployed peasant",
    "effect": "Lose more gold on death",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "6e21a8d6949f41a5b91e7f3c15db231a": {
    "guid": "6e21a8d6949f41a5b91e7f3c15db231a",
    "name": "Brittleness",
    "displayName": "Brittleness",
    "wiki": "Brittleness",
    "description": "A sense of fragility clouds the mind, and it feels as if the lightest of impacts will break the body.",
    "effect": "Receive more damage",
    "slot": "minor_curse",
    "attributes": ["curse", "minor", "common"]
  },
  "a99c2000ab1b4b6bb2d655e83fa30fca": {
    "guid": "a99c2000ab1b4b6bb2d655e83fa30fca",
    "name": "Vulnerable",
    "displayName": "Vulnerable",
    "wiki": "Vulnerable",
    "description": "It's okay to be vurnerable, but not right now.",
    "effect": "Recieve more damage",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "b3da0dca60f54906a6ea1db94d4b75ef": {
    "guid": "b3da0dca60f54906a6ea1db94d4b75ef",
    "name": "Blisters",
    "displayName": "Blisters",
    "wiki": "Blisters",
    "description": "The wear and tear from constant toil have left the hands bloody, broken, and riddled with pain.",
    "effect": "Decreases throw speed",
    "slot": "minor_curse",
    "attributes": ["curse", "minor", "common"]
  },
  "1515f76a45c8453cbcb0b3b952d42c90": {
    "guid": "1515f76a45c8453cbcb0b3b952d42c90",
    "name": "MinersShoulder",
    "displayName": "Miner's Shoulder",
    "wiki": "Miner%27s_Shoulder",
    "description": "Sometimes called \"searing hot pain.\"",
    "effect": "Decreases throw speed",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "15b3dd56f7074a699c94628b4701ecba": {
    "guid": "15b3dd56f7074a699c94628b4701ecba",
    "name": "JointPain",
    "displayName": "Joint Pain",
    "wiki": "Joint_Pain",
    "description": "Every miner reaches an age when they consider hanging up their pickaxe.",
    "effect": "Decreases swing speed",
    "slot": "minor_curse",
    "attributes": ["curse", "minor", "common"]
  },
  "bbc5177fbd0b491fa5656d64ae532644": {
    "guid": "bbc5177fbd0b491fa5656d64ae532644",
    "name": "Arthritis",
    "displayName": "Arthritis",
    "wiki": "Arthritis",
    "description": "The pains of time crawl through the bones, slowing the once quick reflexes of youth.",
    "effect": "Decreases swing speed",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "feb2d714e03142aeb48fdde2afc25fd1": {
    "guid": "feb2d714e03142aeb48fdde2afc25fd1",
    "name": "SpatialSickness",
    "displayName": "SpatialSickness",
    "wiki": "Spatial_Sickness",
    "description": "A curse devised by a bored demon that enjoyed watching his victims throw-up in confusion.",
    "effect": "Teleport when hit",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "8396a93bb7214647a3dc381a94ca193d": {
    "guid": "8396a93bb7214647a3dc381a94ca193d",
    "name": "BottleBlight",
    "displayName": "Bottle Blight",
    "wiki": "Bottle_Blight",
    "description": "An odd affliction that takes issue with bottle substances. Or is it the bottles themselves?",
    "effect": "Take damage for each of your potions, each room",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "905c0ea8343d4feeb7957191761d8338": {
    "guid": "905c0ea8343d4feeb7957191761d8338",
    "name": "Compulsion",
    "displayName": "Compulsion",
    "wiki": "Compulsion",
    "description": "They say \"a healthy life is one of moderation,\" but they also say \"you only live once.\"",
    "effect": "All potions automatically drink on pickup",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "9e441be8838144b285b6e6923f8ba8b8": {
    "guid": "9e441be8838144b285b6e6923f8ba8b8",
    "name": "BottleStopper",
    "displayName": "Bottle Stopper",
    "wiki": "Bottle_Stopper",
    "description": "Derived by a straight-edge wizard that enjoyed ruining everyone's fun.",
    "effect": "Carry fewer potions",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "5a07ac0e26914e5ab472cc79e9a97fe8": {
    "guid": "5a07ac0e26914e5ab472cc79e9a97fe8",
    "name": "Mutation",
    "displayName": "Mutation",
    "wiki": "Mutation",
    "description": "There is a good kind of mutation, and a bad kind. This is the bad kind.",
    "effect": "Relics are turned into potions",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "d07217e8683c4309a16192b22cda8add": {
    "guid": "d07217e8683c4309a16192b22cda8add",
    "name": "Secrecy",
    "displayName": "Secrecy",
    "wiki": "Secrecy",
    "description": "Secrets are only secrets when few people know of them.",
    "effect": "Secret rooms are even more secret",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "fe4f7657e9a643aab2030836e77fb571": {
    "guid": "fe4f7657e9a643aab2030836e77fb571",
    "name": "SecurityTheater",
    "displayName": "Security Theater",
    "wiki": "Security_Theater",
    "description": "Being secure isn't important. It's the illusion of being secure that matters.",
    "effect": "The shop is locked up tight",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "cbb64a4dc4da4587b3273a50c2a53cc3": {
    "guid": "cbb64a4dc4da4587b3273a50c2a53cc3",
    "name": "ExplosiveDecompression",
    "displayName": "Explosive Decompression",
    "wiki": "Explosive_Decompression",
    "description": "The explosion can be heard by Pilfers for miles.",
    "effect": "All ore is mined when entering a room",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "bc80dc90e70d46d299f4cb8566a8a777": {
    "guid": "bc80dc90e70d46d299f4cb8566a8a777",
    "name": "Vertigo",
    "displayName": "Vertigo",
    "wiki": "Vertigo",
    "description": "Staring into the abyss, the mind races, the eyes grow bleary, and the knees weaken.",
    "effect": "Receive increased fall damage",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "66435b8332c74c03b06d5039e2962a99": {
    "guid": "66435b8332c74c03b06d5039e2962a99",
    "name": "Nullification",
    "displayName": "Nullification",
    "wiki": "Nullification",
    "description": "A hex used by Aevyn battle mages against invading paladins during the assault of their wooded homeland.",
    "effect": "Disables 2 relics",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "ffc9fe14d44d434a96624680938fd416": {
    "guid": "ffc9fe14d44d434a96624680938fd416",
    "name": "DarkCloud",
    "displayName": "Dark Cloud",
    "wiki": "Dark_Cloud",
    "description": "It hangs over the cursed, making the world appear dark and dreary not matter the situation.",
    "effect": "Disables 2 blessings",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "4b2977e42e734855acf1e71deefa8e63": {
    "guid": "4b2977e42e734855acf1e71deefa8e63",
    "name": "Uncreative",
    "displayName": "Uncreative",
    "wiki": "Uncreative",
    "description": "The Djinn rolled his eyes as the fifteenth owner of the lamp wished for more wishes.",
    "effect": "Only one blessing is available at altars",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "56e0afaaf92f45d1ba97f83547bd8b23": {
    "guid": "56e0afaaf92f45d1ba97f83547bd8b23",
    "name": "MaliciousIntent",
    "displayName": "Malicious Intent",
    "wiki": "Malicious_Intent",
    "description": "Atonement begins with an earnest look at oneself and one's mistakes.",
    "effect": "The cost of Penance is doubled",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "09d0e4e531c64e7e8e29ba73fb6b7c11": {
    "guid": "09d0e4e531c64e7e8e29ba73fb6b7c11",
    "name": "BloodiedLocks",
    "displayName": "Bloodied Locks",
    "wiki": "Bloodied_Locks",
    "description": "In the catacombs many walls have shallow ruts in the shape of a hand, and dozens of spines facing outwards at the base of those ruts.",
    "effect": "Lock costs are converted to health",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "b68c50e2d9584edea52fae690c472ee7": {
    "guid": "b68c50e2d9584edea52fae690c472ee7",
    "name": "BloodOffering",
    "displayName": "Blood Offering",
    "wiki": "Blood_Offering",
    "description": "The pilfers have grown tired of gold and now demand a greater sacrifice for their wares.",
    "effect": "Shop costs are converted to health",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "d08db904b48e4c2f9a35f8d8fc5dbaab": {
    "guid": "d08db904b48e4c2f9a35f8d8fc5dbaab",
    "name": "Debt",
    "displayName": "Debt",
    "wiki": "Debt",
    "description": "Not all debt is bad, but this one certainly is. If only there were a quick way to repay it?",
    "effect": "Unpaid debt to the pilfers",
    "slot": "curse",
    "attributes": ["curse", "major", "common"]
  },
  "1a2a4e79b6834973b87a62c056b55b1a": {
    "guid": "1a2a4e79b6834973b87a62c056b55b1a",
    "name": "Chaos",
    "displayName": "Chaotic Offering",
    "wiki": "Chaotic_Offering",
    "description": "Item shapes shift and morph like an ephemeral haze. Their form eludes the senses, as if the eyes and ears cannot focus.",
    "effect": "All items are hidden",
    "slot": "hex",
    "attributes": ["hex", "common"]
  },
  "186668076c6e4532a6451703d17a83c7": {
    "guid": "186668076c6e4532a6451703d17a83c7",
    "name": "Fog",
    "displayName": "Dreadful Fog",
    "wiki": "Dreadful_Fog",
    "description": "A mist winds its way through the Undermine. It breaths deadly life into the hollow's inhabitants.",
    "effect": "Enemies have double health and damage",
    "slot": "hex",
    "attributes": ["hex", "common"]
  },
  "6873f352cbeb489eb050bd6fb47a1372": {
    "guid": "6873f352cbeb489eb050bd6fb47a1372",
    "name": "Greed",
    "displayName": "Red-Hot Nuggets",
    "wiki": "Red-Hot_Nuggets",
    "description": "Hot to the touch, as if they were plucked from the oven.",
    "effect": "Take damage when picking up gold",
    "slot": "hex",
    "attributes": ["hex", "common"]
  },
  "7a78e1580ae34f9c908fc2cb74cc5e81": {
    "guid": "7a78e1580ae34f9c908fc2cb74cc5e81",
    "name": "Delight",
    "displayName": "Rogue's Ultimatum",
    "wiki": "Rogue%27s_Ultimatum",
    "description": "To truly be deemed a rogue, one must rely on their wits, and their wits alone.",
    "effect": "Disables permanent upgrades",
    "slot": "hex",
    "attributes": ["hex", "common"]
  },
  "ae2c9f624b104e1b807bb002eeafec9a": {
    "guid": "ae2c9f624b104e1b807bb002eeafec9a",
    "name": "Torment",
    "displayName": "Siegfried's Torment",
    "wiki": "Siegfried%27s_Torment",
    "description": "While his shield may be purified, the memory of the nightmare lives on.",
    "effect": "Adds an indestructible curse on every floor",
    "slot": "hex",
    "attributes": ["hex", "common"]
  },
  "91517ccfe5f94e0386f4c40fa30938d5": {
    "guid": "91517ccfe5f94e0386f4c40fa30938d5",
    "name": "Frostbite",
    "displayName": "Frostbite",
    "wiki": "Frostbite",
    "description": "\"The bite of cold penetrates the body entirely. A curse? No, this is a nightmare.\" - Unknown",
    "effect": "Cannot heal",
    "slot": "hex",
    "attributes": ["hex", "common"]
  },
  "319cab181142408cae02ade562c5ff14": {
    "guid": "319cab181142408cae02ade562c5ff14",
    "name": "Peril",
    "displayName": "Adventurer's Peril",
    "wiki": "Adventurer%27s_Peril",
    "description": "Preparation, training, and fortitude are not enough. One must be a combination of perfect and lucky to avoid catastrophe.",
    "effect": "One health point",
    "slot": "hex",
    "attributes": ["hex", "common"]
  },
  "15a5a17ac6824e32aa375755f3119c7c": {
    "guid": "15a5a17ac6824e32aa375755f3119c7c",
    "name": "Freedom",
    "displayName": "Unending Desolation",
    "wiki": "Unending_Desolation",
    "description": "\"What do you do when the glittery trinkets are taken away, and are left to rely on your skill alone?\" - Valeen, the Crone",
    "effect": "Floors no longer have relic rooms",
    "slot": "hex",
    "attributes": ["hex", "common"]
  },
  "e9015ba93a0448daa19dcee8a34bc5da": {
    "guid": "e9015ba93a0448daa19dcee8a34bc5da",
    "name": "Penance",
    "displayName": "Penance",
    "wiki": "Penance",
    "description": "Attunement begets atonement",
    "effect": "Removes a curse",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "e6e2ae7e3aca49e685346f00c6fb7964": {
    "guid": "e6e2ae7e3aca49e685346f00c6fb7964",
    "name": "Balance",
    "displayName": "Balance",
    "wiki": "Balance",
    "description": "A firm stance, and controlled movements do wonders to improve one's throwing capabilities.",
    "effect": "Deal more throw damage",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "b050811163a0484fae8b0cbfd0c3a249": {
    "guid": "b050811163a0484fae8b0cbfd0c3a249",
    "name": "Vigor",
    "displayName": "Vigor",
    "wiki": "Vigor",
    "description": "Brandood, champion pickaxe thrower of the hovels always said it wasn't about size, but a combination of speed and form.",
    "effect": "Increase throw speed",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "c03f30d5004249e094562277dd286e8a": {
    "guid": "c03f30d5004249e094562277dd286e8a",
    "name": "Gust",
    "displayName": "Gust",
    "wiki": "Gust",
    "description": "A tribe in the Storm Hills use a hunting technique that stuns animals with the force radiating from their arrows. Why they intentionally miss the animal is a mystery.",
    "effect": "Increase throw attack size",
    "slot": "blessing",
    "attributes": ["blessing", "rare"]
  },
  "535a312a1fec48b985eb491d5ac20571": {
    "guid": "535a312a1fec48b985eb491d5ac20571",
    "name": "MightyHurl",
    "displayName": "Mighty Hurl",
    "wiki": "Mighty_Hurl",
    "description": "\"Some say it's a disadvantage, I say 'there's no problem if you hit your target.'\" - Gronk, Champion Pickaxe Thrower",
    "effect": "Increases throw range",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "68b9197b9def414dba65f8cbf877aadc": {
    "guid": "68b9197b9def414dba65f8cbf877aadc",
    "name": "Strength",
    "displayName": "Strength",
    "wiki": "Strength",
    "description": "Some are blessed with intelligence, but that's not going to help you when staring down a raging Bobo.",
    "effect": "Deal more swing damage",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "db1d12a9bf644b819343cfdda0c9ca6c": {
    "guid": "db1d12a9bf644b819343cfdda0c9ca6c",
    "name": "Exuberance",
    "displayName": "Exuberance",
    "wiki": "Exuberance",
    "description": "Get pumped up, to pump those arms as fast as you can.",
    "effect": "Faster swing speed",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "986a533421c64132b8fee6890e1e7cc7": {
    "guid": "986a533421c64132b8fee6890e1e7cc7",
    "name": "Cleave",
    "displayName": "Cleave",
    "wiki": "Cleave",
    "description": "An old prayer, spoken to old gods, grants blades the ability to cut down swaths of men. It works for pickaxes too.",
    "effect": "Increase swing attack size",
    "slot": "blessing",
    "attributes": ["blessing", "rare"]
  },
  "6c6b1f43ea8d43e0ba473b4080c5dac6": {
    "guid": "6c6b1f43ea8d43e0ba473b4080c5dac6",
    "name": "Savagery",
    "displayName": "Savagery",
    "wiki": "Savagery",
    "description": "Channel the lust for blood. Aim it at an enemy. Destroy them entirely.",
    "effect": "Increase chance to critical strike",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "6a9bf05e698d44e6b99a7b065b67cfc6": {
    "guid": "6a9bf05e698d44e6b99a7b065b67cfc6",
    "name": "Ferocity",
    "displayName": "Ferocity",
    "wiki": "Ferocity",
    "description": "\"Despite all my rage, I'm still just a rat in a cage.\"",
    "effect": "Increase critical strike damage",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "d572e250b86c4d11a512955553be4d9b": {
    "guid": "d572e250b86c4d11a512955553be4d9b",
    "name": "Demolition",
    "displayName": "Demolition",
    "wiki": "Demolition",
    "description": "Be careful what you pray for.",
    "effect": "Increases bomb size",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "5a4ec614cb1e4e5e8a0aafcd0c0374e7": {
    "guid": "5a4ec614cb1e4e5e8a0aafcd0c0374e7",
    "name": "Explosiveness",
    "displayName": "Explosiveness",
    "wiki": "Explosiveness",
    "description": "\"Explosive\" can mean a lot of things, like being fast on foot, but here it is quite literal.",
    "effect": "Deal more bomb damage",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "69fb1736d021409899690bdb5905dddd": {
    "guid": "69fb1736d021409899690bdb5905dddd",
    "name": "Fortitude",
    "displayName": "Fortitude",
    "wiki": "Fortitude",
    "description": "Peasants develop a strong constitution and thick skin as part of everyday life.",
    "effect": "Receive less damage",
    "slot": "blessing",
    "attributes": ["blessing", "rare"]
  },
  "7a431a1136014ef88efe8a530a2716b3": {
    "guid": "7a431a1136014ef88efe8a530a2716b3",
    "name": "Toughness",
    "displayName": "Toughness",
    "wiki": "Toughness",
    "description": "An important attribute for when the raging Bobo barrels over you.",
    "effect": "Increased maximum health",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "ad0424584fae467c9f89f7a9e4bdf0d7": {
    "guid": "ad0424584fae467c9f89f7a9e4bdf0d7",
    "name": "Heartiness",
    "displayName": "Heartiness",
    "wiki": "Heartiness",
    "description": "Normally a healthy lifestyle makes for a healthy body, but peasants make due with what they got.",
    "effect": "Healing is more effective",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "870f3fd76f934065b98fa75d5b237f12": {
    "guid": "870f3fd76f934065b98fa75d5b237f12",
    "name": "SlowMetabolism",
    "displayName": "Slow Metabolism",
    "wiki": "Slow_Metabolism",
    "description": "Slowly burning calories, and maintaining the effects of drinks can only be considered a blessing for a peasant.",
    "effect": "Increase potion duration",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "49178cd284e948f0b89f0dfb9a2847bb": {
    "guid": "49178cd284e948f0b89f0dfb9a2847bb",
    "name": "Regeneration",
    "displayName": "Regeneration",
    "wiki": "Regeneration",
    "description": "Curiosity and exploration can rejuvenate the soul.",
    "effect": "Heal through adventure",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "5ec9f182735e418bb6dcb7f9186cc953": {
    "guid": "5ec9f182735e418bb6dcb7f9186cc953",
    "name": "Craftsmanship",
    "displayName": "Craftsmanship",
    "wiki": "Craftsmanship",
    "description": "A deft hand and some quality string can save you a fortune in the end.",
    "effect": "Lose less gold on death",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "aa7de59e30cd473783df2d2e1879cdde": {
    "guid": "aa7de59e30cd473783df2d2e1879cdde",
    "name": "Wealth",
    "displayName": "Wealth",
    "wiki": "Wealth",
    "description": "The prospector has always understood the true value of the earth.",
    "effect": "Increase gold income",
    "slot": "blessing",
    "attributes": ["blessing", "rare"]
  },
  "d182cd977e1f4946b935c5e45acc8bee": {
    "guid": "d182cd977e1f4946b935c5e45acc8bee",
    "name": "Loyalty",
    "displayName": "Loyalty",
    "wiki": "Loyalty",
    "description": "Pilfers always remember a face, and they enjoy the familiar.",
    "effect": "Reduces the cost of shop items",
    "slot": "blessing",
    "attributes": ["blessing", "common"]
  },
  "f2b806ffefcc4fd0b61b445852b877a9": {
    "guid": "f2b806ffefcc4fd0b61b445852b877a9",
    "name": "Nether1",
    "displayName": "Nether",
    "wiki": "Nether",
    "description": "",
    "effect": "Required for entering Othermine",
    "slot": "none",
    "attributes": ["resource", "common"]
  },
  "f8fb72103e9a438f926e217453b28cfd": {
    "guid": "f8fb72103e9a438f926e217453b28cfd",
    "name": "Thorium1",
    "displayName": "Thorium",
    "wiki": "Thorium",
    "description": "",
    "effect": "",
    "slot": "none",
    "attributes": ["resource", "common"]
  },
  "c7a81d457dcf42c38c8dd72207b304b2": {
    "guid": "c7a81d457dcf42c38c8dd72207b304b2",
    "name": "Thorium3",
    "displayName": "Thorium",
    "wiki": "Thorium",
    "description": "",
    "effect": "",
    "slot": "none",
    "attributes": ["resource", "common"]
  },
  "b73596fd5c1a49caa17ca13558b1e11f": {
    "guid": "b73596fd5c1a49caa17ca13558b1e11f",
    "name": "Gold5",
    "displayName": "Gold",
    "wiki": "Gold",
    "description": "",
    "effect": "",
    "slot": "none",
    "attributes": ["resource", "common"]
  },
  "d49248f7a1bd44e7be78e9ccfb2a6315": {
    "guid": "d49248f7a1bd44e7be78e9ccfb2a6315",
    "name": "Gold10",
    "displayName": "Gold",
    "wiki": "Gold",
    "description": "",
    "effect": "",
    "slot": "none",
    "attributes": ["resource", "common"]
  },
  "29855133382b4e61acbcd4911af89b41": {
    "guid": "29855133382b4e61acbcd4911af89b41",
    "name": "Gold25",
    "displayName": "Gold",
    "wiki": "Gold",
    "description": "",
    "effect": "",
    "slot": "none",
    "attributes": ["resource", "common"]
  },
  "2cff1ebcf6a248f98d0fa069885de582": {
    "guid": "2cff1ebcf6a248f98d0fa069885de582",
    "name": "Gold50",
    "displayName": "Gold",
    "wiki": "Gold",
    "description": "",
    "effect": "",
    "slot": "none",
    "attributes": ["resource", "common"]
  },
  "9dd5b8c0b6204e958835c6280ab8cfec": {
    "guid": "9dd5b8c0b6204e958835c6280ab8cfec",
    "name": "Gold100",
    "displayName": "Gold",
    "wiki": "Gold",
    "description": "",
    "effect": "",
    "slot": "none",
    "attributes": ["resource", "common"]
  },
  "e8172f00b9794a3f9bea5691a202ee43": {
    "guid": "e8172f00b9794a3f9bea5691a202ee43",
    "name": "Gold500",
    "displayName": "Gold",
    "wiki": "Gold",
    "description": "",
    "effect": "",
    "slot": "none",
    "attributes": ["resource", "common"]
  },
  "9c353123e650445aab33a7184a0e75a7": {
    "guid": "9c353123e650445aab33a7184a0e75a7",
    "name": "HealthSGolden",
    "displayName": "Golden Steak",
    "wiki": "Golden_Steak",
    "description": "Not particularly appetizing, but can buy something that is.",
    "effect": "Gain some gold",
    "slot": "food",
    "attributes": ["resource", "item", "health", "common"]
  },
  "2d660fbac8f74974bb37b2ebb02a305d": {
    "guid": "2d660fbac8f74974bb37b2ebb02a305d",
    "name": "HealthMGolden",
    "displayName": "Golden Fish",
    "wiki": "Golden_Fish",
    "description": "Fish colored of gold belong in the sea, not in the belly.",
    "effect": "Gain even more gold",
    "slot": "food",
    "attributes": ["resource", "item", "health", "common"]
  },
  "f44c5301ab9442378690d17cee43074b": {
    "guid": "f44c5301ab9442378690d17cee43074b",
    "name": "GoldSandwich",
    "displayName": "Gold",
    "wiki": "Gold",
    "description": "",
    "effect": "",
    "slot": "none",
    "attributes": ["resource", "common"]
  },
  "5d26fe1e897249d080d4875b0c88fe66": {
    "guid": "5d26fe1e897249d080d4875b0c88fe66",
    "name": "HealthLGolden",
    "displayName": "Golden Ham",
    "wiki": "Golden_Ham",
    "description": "Not to be confused with a honey baked ham.",
    "effect": "Gain even more gold",
    "slot": "food",
    "attributes": ["resource", "item", "health", "common"]
  },
  "038c0066e235445a84153e8c9c450522": {
    "guid": "038c0066e235445a84153e8c9c450522",
    "name": "PeasantJournal",
    "displayName": "Journal",
    "wiki": "Journal",
    "description": "A blank journal enchanted by Arkanos. It automatically inscribes everything its bearer senses, so there is no need to put pen to paper. It is passed on to new peasants by the canary along with the goldsack. This way peasants can know what their predecessors witnessed, and maybe not share in their fate.",
    "effect": "An enchanted journal",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "6c77fa6f968c46f8b7bc85e4d9653f8a": {
    "guid": "6c77fa6f968c46f8b7bc85e4d9653f8a",
    "name": "TokenSelt",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "ff7bebf7fd3c4504922e69d4573c9268": {
    "guid": "ff7bebf7fd3c4504922e69d4573c9268",
    "name": "TokenMortar",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "4201016017924b249dace995484afd57": {
    "guid": "4201016017924b249dace995484afd57",
    "name": "TokenNoori",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "a408291029c24aa3b723842af215836d": {
    "guid": "a408291029c24aa3b723842af215836d",
    "name": "TokenPonzu",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "65d587c6a62c4908affda8651a72a5de": {
    "guid": "65d587c6a62c4908affda8651a72a5de",
    "name": "TokenSeer",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "b70e6c76523f42c7a0f2394fe8b015ef": {
    "guid": "b70e6c76523f42c7a0f2394fe8b015ef",
    "name": "PrisonerKey",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "3a2eea11831e483587794f82632a4da5": {
    "guid": "3a2eea11831e483587794f82632a4da5",
    "name": "LibraryKey",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "838f688c94ff4655abae5a22b2d293f9": {
    "guid": "838f688c94ff4655abae5a22b2d293f9",
    "name": "DungeonKey",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "01cd8d8f74ec41b5923238097784ec3d": {
    "guid": "01cd8d8f74ec41b5923238097784ec3d",
    "name": "MastersKey",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "e253e01a1b514aeb89de7976b4d28faa": {
    "guid": "e253e01a1b514aeb89de7976b4d28faa",
    "name": "HallsKey",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "2d577bfdd17e414b98e23e1a399e19c5": {
    "guid": "2d577bfdd17e414b98e23e1a399e19c5",
    "name": "CavernKey",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "2061bb05fb0f4e388a0f2ffde2cfd781": {
    "guid": "2061bb05fb0f4e388a0f2ffde2cfd781",
    "name": "CoreKey",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "fdb82b8b71314508a5f74f923691f1c5": {
    "guid": "fdb82b8b71314508a5f74f923691f1c5",
    "name": "MushroomPurple",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "7d08db7563ff4dc09c68202222e3caa7": {
    "guid": "7d08db7563ff4dc09c68202222e3caa7",
    "name": "MushroomGreen",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "4c14bf5fc0054790a90bc0e0c60948d7": {
    "guid": "4c14bf5fc0054790a90bc0e0c60948d7",
    "name": "MushroomBlue",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "b1b125655e2c49d0bb911b5b85144918": {
    "guid": "b1b125655e2c49d0bb911b5b85144918",
    "name": "CollectorBook",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "427ec4504c1f460696ced20c4fe48152": {
    "guid": "427ec4504c1f460696ced20c4fe48152",
    "name": "MapDungeon",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "f251ba3c7e1b467b857d04b1135812a4": {
    "guid": "f251ba3c7e1b467b857d04b1135812a4",
    "name": "MapHall",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "ee77be7cfb224130a3874ebc9393ed3e": {
    "guid": "ee77be7cfb224130a3874ebc9393ed3e",
    "name": "MapCavern",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "ef252f4fa97a46ecbb7f85ec341df560": {
    "guid": "ef252f4fa97a46ecbb7f85ec341df560",
    "name": "MapCore",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "f8986aae9dc240acbd1a8625f91356e7": {
    "guid": "f8986aae9dc240acbd1a8625f91356e7",
    "name": "SummoningStone",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "fc644210617d4cdead7023f82aeca359": {
    "guid": "fc644210617d4cdead7023f82aeca359",
    "name": "RecreantStone",
    "slot": "artifact",
    "attributes": ["item", "artifact", "rare"]
  },
  "7f5f9d71a25049ab9a4a6ef16cc741f1": {
    "guid": "7f5f9d71a25049ab9a4a6ef16cc741f1",
    "name": "NetherUnlock",
    "slot": "upgrade",
    "attributes": ["technique", "artifact", "rare"]
  },
  "dace4780778a46ecbfee1e7a7a5d0fc0": {
    "guid": "dace4780778a46ecbfee1e7a7a5d0fc0",
    "name": "Crown0",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "ace42acc4f504db2bcd52055a0eadd7f": {
    "guid": "ace42acc4f504db2bcd52055a0eadd7f",
    "name": "Crown1",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "8f62cd51494349d7b68c72076b13a8a4": {
    "guid": "8f62cd51494349d7b68c72076b13a8a4",
    "name": "Crown2",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "827bac35ada247079ca0589999ef8197": {
    "guid": "827bac35ada247079ca0589999ef8197",
    "name": "Crown3",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "c464ead5158c4f478a992f2411678f47": {
    "guid": "c464ead5158c4f478a992f2411678f47",
    "name": "Crown4",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "28a2193873e449a3959dcf7554b0dcb9": {
    "guid": "28a2193873e449a3959dcf7554b0dcb9",
    "name": "Crown5",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "d7c3e8f8247b423fb2145a144885d71f": {
    "guid": "d7c3e8f8247b423fb2145a144885d71f",
    "name": "Crown6",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "14de52507fdf4f1e8cf5def2ba641f5f": {
    "guid": "14de52507fdf4f1e8cf5def2ba641f5f",
    "name": "Crown7",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "f9e0cbd62d1743e58185f562afd38dea": {
    "guid": "f9e0cbd62d1743e58185f562afd38dea",
    "name": "Crown8",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "2e41fe4033564da89e61d725aebc3ed1": {
    "guid": "2e41fe4033564da89e61d725aebc3ed1",
    "name": "Crown9",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "e6b61bb84de148a89c20e8e71ef4fc3a": {
    "guid": "e6b61bb84de148a89c20e8e71ef4fc3a",
    "name": "Crown10",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "b93f48f1f1d04bc097301502dbe60e8b": {
    "guid": "b93f48f1f1d04bc097301502dbe60e8b",
    "name": "Crown11",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "e480e585786c4a7ab2eb7228d7ea3041": {
    "guid": "e480e585786c4a7ab2eb7228d7ea3041",
    "name": "Crown12",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "57295a4e14644121a8835444e04a935a": {
    "guid": "57295a4e14644121a8835444e04a935a",
    "name": "Crown13",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "a849180e6b6644e98c030347858a6925": {
    "guid": "a849180e6b6644e98c030347858a6925",
    "name": "Crown14",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "5c55d775ac094d97881da0f1a6c7f413": {
    "guid": "5c55d775ac094d97881da0f1a6c7f413",
    "name": "Crown15",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "18d87016e925445c9ab3594ae0704235": {
    "guid": "18d87016e925445c9ab3594ae0704235",
    "name": "Crown16",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "5908378a600e46a9902209f31fb6b29e": {
    "guid": "5908378a600e46a9902209f31fb6b29e",
    "name": "Crown17",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "6471a1a386b24101a2efeccf8c277665": {
    "guid": "6471a1a386b24101a2efeccf8c277665",
    "name": "Crown18",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "c4ab558dfcbe4fa7bbeb9fccb23d9fc9": {
    "guid": "c4ab558dfcbe4fa7bbeb9fccb23d9fc9",
    "name": "Crown19",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "811df5e87a1a44d9a4a38242bdbab451": {
    "guid": "811df5e87a1a44d9a4a38242bdbab451",
    "name": "Crown20",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "3f500edc08c242139f751a852783a0d8": {
    "guid": "3f500edc08c242139f751a852783a0d8",
    "name": "Crown21",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "8bc176ed6a984dab848ebc1c25117acf": {
    "guid": "8bc176ed6a984dab848ebc1c25117acf",
    "name": "Crown22",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "45bcc9bb052c410fb2709d9e34506432": {
    "guid": "45bcc9bb052c410fb2709d9e34506432",
    "name": "Crown23",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "bee58c04e0714845adb8e582f98b2098": {
    "guid": "bee58c04e0714845adb8e582f98b2098",
    "name": "Crown24",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "3d20a8a0fe8f4707b1b8a3ac899a3834": {
    "guid": "3d20a8a0fe8f4707b1b8a3ac899a3834",
    "name": "Crown25",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "dc8225746644444caa7ea303a736913e": {
    "guid": "dc8225746644444caa7ea303a736913e",
    "name": "Crown26",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "4ab8a0cf89e44f8d9a9835f30b5d423c": {
    "guid": "4ab8a0cf89e44f8d9a9835f30b5d423c",
    "name": "Crown27",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "d795595879f545018e8399a3a80c6c66": {
    "guid": "d795595879f545018e8399a3a80c6c66",
    "name": "Crown28",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "66c1ba3344204cb09eb2d8d383ec6569": {
    "guid": "66c1ba3344204cb09eb2d8d383ec6569",
    "name": "Crown29",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "42e4bf344c4244f482c246659196f415": {
    "guid": "42e4bf344c4244f482c246659196f415",
    "name": "Crown30",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "f223c23078d64dbe804e51e3dd7d1824": {
    "guid": "f223c23078d64dbe804e51e3dd7d1824",
    "name": "Crown31",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "84826b1a19f745208849ca2768ddcbac": {
    "guid": "84826b1a19f745208849ca2768ddcbac",
    "name": "Crown32",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "e3073e134b20469eb038263212e83530": {
    "guid": "e3073e134b20469eb038263212e83530",
    "name": "Crown33",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "574806e30f924df5800e06ebcdd52601": {
    "guid": "574806e30f924df5800e06ebcdd52601",
    "name": "Crown34",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "5b649c58302043b0b05a32bb960d2da4": {
    "guid": "5b649c58302043b0b05a32bb960d2da4",
    "name": "Crown35",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "aba1384f94e94993974581c8201e44c9": {
    "guid": "aba1384f94e94993974581c8201e44c9",
    "name": "Crown36",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "84560630b7dc4917875caff19ce256aa": {
    "guid": "84560630b7dc4917875caff19ce256aa",
    "name": "Crown37",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  },
  "4e5964709ae04f9da7ff3fa8e7a1293f": {
    "guid": "4e5964709ae04f9da7ff3fa8e7a1293f",
    "name": "Crown38",
    "slot": "hat",
    "attributes": ["artifact", "rare"]
  }
};

function buildListItem(itemName) {
    const itemData = items[itemName.toLowerCase()];
    if (!itemData) throw new Error(`Unknown item ${itemName}`);

    const li = document.createElement('li');
    li.addEventListener('mouseover', fixPositions);

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    const nameEl = document.createElement('h3');
    nameEl.innerText = itemData.displayName;
    tooltip.appendChild(nameEl);

    const extra = document.createElement('span');
    extra.innerText = itemData.effect;
    tooltip.appendChild(extra);

    const description = document.createElement('p');
    description.innerText = itemData.description;
    tooltip.appendChild(description);

    li.appendChild(tooltip);

    const wikiLink = document.createElement('a');
    wikiLink.target = '_blank';
    wikiLink.href = `https://undermine.gamepedia.com/${itemData.wiki}`;
    
    const img = document.createElement('img');
    img.src = `undermine_data/images/${itemData.guid}.png`;
    wikiLink.appendChild(img);

    li.appendChild(wikiLink);

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
