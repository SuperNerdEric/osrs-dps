import {TargetMonster} from "./TargetMonster";
import {Item} from "./Item";
import {AttackStyle} from "./AttackStyle";

export class Result {
    dps: number = 0;
    maxHit: number = 0;
    accuracy: number = 0;
    gearSet: Item[] = [];
    targetMonster: TargetMonster = new TargetMonster();

    calculateDPS(invocationLevel: number) {
        const attackStyle = this.gearSet[0].style;
        if (attackStyle == AttackStyle.Stab || attackStyle == AttackStyle.Slash || attackStyle == AttackStyle.Crush) {
            this.calculateDPSMelee(invocationLevel, attackStyle, 99, 99, 26, 26, 1.23, 1.2);
        } else if (attackStyle == AttackStyle.Rapid) {
            this.calculateDPSRanged(invocationLevel, attackStyle, 99, 26, 1.23, 1.2);
        }

    }

    private calculateDPSMelee(invocationLevel: number, attackStyle: AttackStyle, strengthLevel: number, attackLevel: number, strengthLevelBoost: number, attackLevelBoost: number, prayerStrengthMultiplier: number, prayerAttackMultiplier: number) {
        let effectiveStrengthLevel = Math.floor((strengthLevel + strengthLevelBoost) * prayerStrengthMultiplier);
        effectiveStrengthLevel += 3; //aggressive attack style
        effectiveStrengthLevel += 8;

        this.maxHit = this.calculateMaxHitMelee(effectiveStrengthLevel);

        let effectiveAttackLevel = Math.floor((attackLevel + attackLevelBoost) * prayerAttackMultiplier);
        effectiveAttackLevel += 8;

        let equipmentAttackBonus = 0;
        this.gearSet.forEach(item => {
            if (attackStyle == AttackStyle.Stab) {
                equipmentAttackBonus += item.stab;
            } else if (attackStyle == AttackStyle.Slash) {
                equipmentAttackBonus += item.slash;
            } else if (attackStyle == AttackStyle.Crush) {
                equipmentAttackBonus += item.crush;
            }
        });

        let attackRoll = effectiveAttackLevel * (equipmentAttackBonus + 64);
        let gearMultiplier = 1; //slayer helm, salve

        attackRoll = Math.floor(attackRoll * gearMultiplier);

        let styleDefenceBonus = 0;
        if (attackStyle == AttackStyle.Stab) {
            styleDefenceBonus = this.targetMonster.stabDefence;
        } else if (attackStyle == AttackStyle.Slash) {
            styleDefenceBonus = this.targetMonster.slashDefence;
        } else if (attackStyle == AttackStyle.Crush) {
            styleDefenceBonus = this.targetMonster.crushDefence;
        }
        let defenceRoll = (this.targetMonster.defenceLevel + 9) * (styleDefenceBonus + 64);
        defenceRoll = defenceRoll + Math.floor(defenceRoll * Math.floor(invocationLevel / 5) * 2) / 100;


        if (attackRoll > defenceRoll) {
            this.accuracy = 1 - ((defenceRoll + 2) / (2 * (attackRoll + 1)));
        } else {
            this.accuracy = attackRoll / (2 * (defenceRoll + 1));
        }

        let damagePerHit = 0;
        if (this.gearSet[0].name === "Scythe of vitur") {
            //Do 3 hits
            let damagePerHit1 = (this.maxHit * this.accuracy) / 2; //1st is 100% damage
            let damagePerHit2 = (Math.floor(this.maxHit / 2) * this.accuracy) / 2; //2nd is 50% damage
            let damagePerHit3 = (Math.floor(this.maxHit / 4) * this.accuracy) / 2; //3rd is 25% damage
            damagePerHit = damagePerHit1 + damagePerHit2 + damagePerHit3;

            this.maxHit = Math.floor(this.maxHit * 1.75);
        } else if (this.gearSet[0].name === "Osmumten's fang") {

            // Original accuracy calculation before Jagex updated on October 31st, 2022
            // https://secure.runescape.com/m=news/a=97/tombs-of-amascut-drop-mechanics--osmumtens-fang?oldschool=1
            // reroll accuracy check
            // this.accuracy = this.accuracy + (this.accuracy * (1 - this.accuracy));

            // Two hitChances multiplied by each other. One is normal 1/2 ratio and second is 2/3 ratio
            // (x + 2) / ( 2 (y + 1)) * (2x + 3) / (3 * (y+1))
            if(attackRoll > defenceRoll) {
                this.accuracy = 1 - ((defenceRoll + 2) * (2 * defenceRoll + 3)) / (6 * Math.pow(attackRoll + 1, 2));
            } else {
                this.accuracy = (6 * Math.pow(attackRoll + 1, 2) - (attackRoll + 2) * (2 * attackRoll + 3)) / (6 * (defenceRoll + 1) * (attackRoll + 1));
            }

            //lower max hit without affecting dps
            damagePerHit = (this.maxHit * this.accuracy) / 2;
            this.maxHit = Math.floor(this.maxHit * 0.85);
        } else {
            damagePerHit = (this.maxHit * this.accuracy) / 2;
        }
        console.log("Damage per hit: " + damagePerHit);
        this.dps = damagePerHit / this.gearSet[0].speedSeconds;

    }

    private calculateMaxHitMelee(effectiveStrengthLevel: number): number {
        let equipmentMeleeStrength = 0;

        this.gearSet.forEach(item => {
            equipmentMeleeStrength += item.strength;
        })

        let maxHit = effectiveStrengthLevel * (equipmentMeleeStrength + 64);
        maxHit += 320;
        maxHit = Math.floor(maxHit / 640);

        let gearMultiplier = 1; //Todo: slayer helm, salve

        maxHit = Math.floor(maxHit * gearMultiplier);

        return maxHit;
    }

    private calculateDPSRanged(invocationLevel: number, attackStyle: AttackStyle, rangedLevel: number, rangedLevelBoost: number, prayerStrengthMultiplier: number, prayerAttackMultiplier: number) {
        let effectiveRangedStrength = Math.floor((rangedLevel + rangedLevelBoost) * prayerStrengthMultiplier);
        effectiveRangedStrength += 8;

        let equipmentRangedStrength = 0;
        this.gearSet.forEach(item => {
            equipmentRangedStrength += item.rangedStrength;
        })

        let gearMultiplier = 1; //Todo: slayer helm, salve
        let accuracyMultiplier = 1;
        if (this.gearSet[0].name === "Twisted bow") {
            let targetMagic = this.targetMonster.magicLevel;

            if (this.targetMonster.magicAccuracy > targetMagic) {
                targetMagic = this.targetMonster.magicAccuracy;
            }
            console.log("Target magic: " + targetMagic);

            //accuracyMultiplier =  140 + (((10 * 3 * targetMagic)/10 - 10) / 100) - Math.pow(((3*targetMagic)/10 - 100), 2) / 100;
            //Todo Other calcs seems to round down here? Not sure if correct though
            accuracyMultiplier = 140 + Math.floor((3 * targetMagic - 10) / 100) - Math.floor(Math.pow(3 * targetMagic / 10 - 100, 2) / 100);
            if (accuracyMultiplier > 140) {
                accuracyMultiplier = 140;
            }


            accuracyMultiplier /= 100;

            console.log("Twisted Bow Accuracy Multiplier: " + accuracyMultiplier);
            let damageMultiplier = 250 + (((10 * 3 * targetMagic) / 10 - 14) / 100) - Math.pow(((3 * targetMagic) / 10 - 140), 2) / 100;
            //Todo Other calcs seems to round down here? Not sure if correct though
            damageMultiplier = 250 + Math.floor((3 * targetMagic - 14) / 100) - Math.floor(Math.pow(3 * targetMagic / 10 - 140, 2) / 100)
            if (damageMultiplier > 250) {
                damageMultiplier = 250;
            }
            gearMultiplier = damageMultiplier / 100;
            console.log("Twisted Bow Damage Multiplier: " + damageMultiplier);
        }

        this.maxHit = Math.floor(Math.floor(0.5 + (((effectiveRangedStrength) * (equipmentRangedStrength + 64)) / 640)) * gearMultiplier);

        let effectiveRangedAttack = Math.floor((rangedLevel + rangedLevelBoost) * prayerAttackMultiplier)
        effectiveRangedAttack += 8;

        let equipmentRangedAttack = 0;
        this.gearSet.forEach(item => {
            equipmentRangedAttack += item.ranged;
        })

        let attackRoll = Math.floor(Math.floor(effectiveRangedAttack * (equipmentRangedAttack + 64)) * accuracyMultiplier);

        let defenceRoll = (this.targetMonster.defenceLevel + 9) * (this.targetMonster.rangedDefence + 64);
        defenceRoll = defenceRoll + Math.floor(defenceRoll * Math.floor(invocationLevel / 5) * 2) / 100;

        if (attackRoll > defenceRoll) {
            this.accuracy = 1 - ((defenceRoll + 2) / (2 * (attackRoll + 1)));
        } else {
            this.accuracy = attackRoll / (2 * (defenceRoll + 1));
        }

        this.accuracy = this.accuracy;

        let damagePerHit = (this.maxHit * this.accuracy) / 2;

        let speedSeconds = this.gearSet[0].speedSeconds;
        if (attackStyle == AttackStyle.Rapid) {
            speedSeconds -= 0.6;
        }
        this.dps = damagePerHit / speedSeconds;
    }
}

