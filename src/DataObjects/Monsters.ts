import {TargetMonster} from "./TargetMonster";

export const monsters = new Map<string, TargetMonster>;

let monster = new TargetMonster();
monster.name = "Ba-Ba";
monster.imagePath = './Images/Monsters/Ba-Ba.png';
monster.defenceLevel = 80;
monster.stabDefence = 80;
monster.slashDefence = 160;
monster.crushDefence = 240;
monster.magicDefence = 280;
monster.rangedDefence = 200;
monsters.set(monster.name, monster);

monster = new TargetMonster();
monster.name = "Akkha";
monster.imagePath = './Images/Monsters/Akkha.png';
monster.defenceLevel = 80;
monster.stabDefence = 60;
monster.slashDefence = 120;
monster.crushDefence = 120;
monster.magicDefence = 10;
monster.rangedDefence = 60;
monsters.set(monster.name, monster);

monster = new TargetMonster();
monster.name = "Kephri";
monster.imagePath = './Images/Monsters/Kephri.png';
monster.defenceLevel = 80;
monster.stabDefence = 60;
monster.slashDefence = 300;
monster.crushDefence = 100;
monster.magicDefence = 200;
monster.rangedDefence = 300;
monsters.set(monster.name, monster);

monster = new TargetMonster();
monster.name = "Zebak";
monster.imagePath = './Images/Monsters/Zebak.png';
monster.defenceLevel = 70;
monster.stabDefence = 160;
monster.slashDefence = 160;
monster.crushDefence = 260;
monster.magicDefence = 200;
monster.rangedDefence = 110;
monsters.set(monster.name, monster);

monster = new TargetMonster();
monster.name = "Wardens P3";
monster.imagePath = './Images/Monsters/Tumekens_Warden.png';
monster.defenceLevel = 150;
monster.stabDefence = 40;
monster.slashDefence = 40;
monster.crushDefence = 20;
monster.magicDefence = 20;
monster.rangedDefence = 20;
monsters.set(monster.name, monster);