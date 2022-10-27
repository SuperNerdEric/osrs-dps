import {Item, Slot} from "./Item";
import {AttackStyle} from "./AttackStyle";

export const items = new Map<string, Item>;

let item = new Item();
item.name = "Osmumten's fang";
item.style = AttackStyle.Stab;
item.imagePath = './Images/Items/Osmumtens_fang.png';
item.wikiLink = "https://oldschool.runescape.wiki/w/Osmumten%27s_fang"
item.slot = Slot.MainHand;
item.speedSeconds = 3;
item.stab = 105;
item.slash = 75;
item.crush = 0;
item.strength = 103;
items.set(item.name, item);

item = new Item();
item.name = "Avernic defender";
item.imagePath = "./Images/Items/Avernic_defender.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Avernic_defender"
item.slot = Slot.OffHand;
item.stab = 30;
item.slash = 29;
item.crush = 28;
item.magic = -5;
item.ranged = -4;
item.strength = 8;
items.set(item.name, item);

item = new Item();
item.name = "Torva full helm";
item.imagePath = "./Images/Items/Torva_full_helm.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Torva_full_helm#Restored"
item.slot = Slot.Helm;
item.magic = -5;
item.ranged = -5;
item.strength = 8;
items.set(item.name, item);

item = new Item();
item.name = "Torva platebody";
item.imagePath = "./Images/Items/Torva_platebody.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Torva_platebody#Restored"
item.slot = Slot.Chest;
item.magic = -18;
item.ranged = -14;
item.strength = 6;
items.set(item.name, item);

item = new Item();
item.name = "Torva platelegs";
item.imagePath = "./Images/Items/Torva_platelegs.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Torva_platelegs#Restored"
item.slot = Slot.Legs;
item.magic = -24;
item.ranged = -11;
item.strength = 4;
items.set(item.name, item);

item = new Item();
item.name = "Ferocious gloves";
item.imagePath = "./Images/Items/Ferocious_gloves.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Ferocious_gloves"
item.slot = Slot.Gloves;
item.stab = 16;
item.slash = 16;
item.crush = 16;
item.magic = -16;
item.ranged = -16;
item.strength = 14;
items.set(item.name, item);

item = new Item();
item.name = "Primordial boots";
item.imagePath = "./Images/Items/Primordial_boots.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Primordial_boots"
item.slot = Slot.Boots;
item.stab = 2;
item.slash = 2;
item.crush = 2;
item.magic = -4;
item.ranged = -1;
item.strength = 5;
items.set(item.name, item);

item = new Item();
item.name = "Amulet of torture";
item.imagePath = "./Images/Items/Amulet_of_torture.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Amulet_of_torture"
item.slot = Slot.Neck;
item.stab = 15;
item.slash = 15;
item.crush = 15;
item.strength = 10;
items.set(item.name, item);

item = new Item();
item.name = "Infernal cape";
item.imagePath = "./Images/Items/Infernal_cape.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Infernal_cape"
item.slot = Slot.Cape;
item.stab = 4;
item.slash = 4;
item.crush = 4;
item.magic = 1;
item.ranged = 1;
item.strength = 8;
items.set(item.name, item);

item = new Item();
item.name = "Neitiznot faceguard";
item.imagePath = "./Images/Items/Neitiznot_faceguard.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Neitiznot_faceguard"
item.slot = Slot.Helm;
item.strength = 6;
items.set(item.name, item);

item = new Item();
item.name = "Bandos chestplate";
item.imagePath = "./Images/Items/Bandos_chestplate.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Bandos_chestplate"
item.slot = Slot.Chest;
item.magic = -15;
item.ranged = -10;
item.strength = 4;
items.set(item.name, item);

item = new Item();
item.name = "Bandos tassets";
item.imagePath = "./Images/Items/Bandos_tassets.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Bandos_tassets"
item.slot = Slot.Legs;
item.magic = -21;
item.ranged = -7;
item.strength = 2;
items.set(item.name, item);

item = new Item();
item.name = "Fire cape";
item.imagePath = "./Images/Items/Fire_cape.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Fire_cape"
item.slot = Slot.Cape;
item.stab = 1;
item.slash = 1;
item.crush = 1;
item.magic = 1;
item.ranged = 1;
item.strength = 4;
items.set(item.name, item);


item = new Item();
item.name = "Amulet of fury";
item.imagePath = "./Images/Items/Amulet_of_fury.png";
item.wikiLink = "https://oldschool.runescape.wiki/w/Amulet_of_fury"
item.slot = Slot.Neck;
item.stab = 10;
item.slash = 10;
item.crush = 10;
item.magic = 10;
item.ranged = 10;
item.strength = 8;
items.set(item.name, item);

item = new Item();
item.name = "Ghrazi rapier";
item.style = AttackStyle.Stab;
item.imagePath = './Images/Items/Ghrazi_rapier.png';
item.wikiLink = "https://oldschool.runescape.wiki/w/Ghrazi_rapier"
item.slot = Slot.MainHand;
item.speedSeconds = 2.4;
item.stab = 94;
item.slash = 55;
item.crush = 0;
item.strength = 89;
items.set(item.name, item);

item = new Item();
item.name = "Zamorakian hasta";
item.style = AttackStyle.Stab;
item.imagePath = './Images/Items/Zamorakian_hasta.png';
item.wikiLink = "https://oldschool.runescape.wiki/w/Zamorakian_hasta"
item.slot = Slot.MainHand;
item.speedSeconds = 2.4;
item.stab = 85;
item.slash = 65;
item.crush = 65;
item.strength = 75;
items.set(item.name, item);

item = new Item();
item.name = "Scythe of vitur";
item.style = AttackStyle.Slash;
item.imagePath = './Images/Items/Scythe_of_vitur.png';
item.wikiLink = "https://oldschool.runescape.wiki/w/Scythe_of_vitur#Charged"
item.slot = Slot.MainHand; //Todo How to handle 2hs?
item.speedSeconds = 3;
item.stab = 70;
item.slash = 110;
item.crush = 30;
item.magic = -6;
item.strength = 75;
items.set(item.name, item);