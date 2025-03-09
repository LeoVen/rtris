import { UnitStats } from "../../models/Unit";
import { UnitStatsContainer, UnitStatsRow } from "./components";

export default function UnitStatsSection(stats: UnitStats) {

    const totalDefence = stats.armour + stats.defence_skill + stats.shield;

    return (
        <UnitStatsContainer>
            <div>
                <UnitStatsRow>
                    <span>Morale</span>
                    <span>{stats.morale}</span>
                </UnitStatsRow>
                <UnitStatsRow>
                    <span>Melee Attack</span>
                    <span>{stats.melee_attack}</span>
                </UnitStatsRow>
                <UnitStatsRow>
                    <span>Missile Attack</span>
                    <span>{stats.missile_attack}</span>
                </UnitStatsRow>
                <UnitStatsRow>
                    <span>Ammo</span>
                    <span>{stats.missile_ammo}</span>
                </UnitStatsRow>
                <UnitStatsRow>
                    <span>Missile Range</span>
                    <span>{stats.missile_range}</span>
                </UnitStatsRow>
            </div>
            <div>
                <UnitStatsRow>
                    <span>Total Defence</span>
                    <span>{totalDefence}</span>
                </UnitStatsRow>
                <UnitStatsRow>
                    <span>Armour</span>
                    <span>{stats.armour}</span>
                </UnitStatsRow>
                <UnitStatsRow>
                    <span>Defence Skill</span>
                    <span>{stats.defence_skill}</span>
                </UnitStatsRow>
                <UnitStatsRow>
                    <span>Shield</span>
                    <span>{stats.shield}</span>
                </UnitStatsRow>
                <UnitStatsRow>
                    <span>Charge</span>
                    <span>{stats.charge}</span>
                </UnitStatsRow>
            </div>
        </UnitStatsContainer>
    )
}