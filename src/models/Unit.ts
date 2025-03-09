export interface Unit {
    descr: UnitDescr,
    text: {
        name: string,
        descr: string,
        descr_short: string,
    }
}

export interface UnitDescr {
    unit_type: string;
    dict: string;
    stats: UnitStats,
    info: UnitInfo,
    factions: string[],
}

export interface UnitStats {
    morale: number,
    melee_attack: number,
    missile_attack: number,
    missile_ammo: number,
    missile_range: number,
    armour: number,
    defence_skill: number,
    shield: number,
    charge: number,
}

export interface UnitInfo {
    soldiers: number,
    turns: number,
    recruit: number,
    upkeep: number,
}