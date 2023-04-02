export interface ICropsHarvesting {
    generalInformationID?: string,
    fieldSanitation: IFieldSanitation,
    harvestField: IHarvestField,
    vegetables: IVegetables,
    mango: Imango,
    betelLeaf: IBetelLeaf,
    localCollectionCenter: ILocalCollectionCenter,

}
interface IFieldSanitation {
    isFollowingStepTaken: boolean;
    isIdentificationSource: boolean;
    isPoperSanitation: boolean;
    isToiletFacility: boolean
};
interface IHarvestField {
    isMRLtest: boolean;
    insecticideLevel: number;
    maturityIndexUsed: boolean;
    isContainerHygienic: boolean;
    cropHarvestedTime: string;
    materials: string;
    inContainerOnSoilLevel: boolean;
    DAEliaison: boolean;
    primarilyStord: string;
    primaryGrading: boolean;
    isGlovesApronUsed: boolean;
};
interface IVegetables {
    isKnifeUsed: boolean;
    isHygienicToolUsed: boolean;
    isInjuryProtection: boolean
};
interface Imango {
    isToolsUsed: boolean;
    isLatexSecrete: boolean;
    isArrangedInContainer: boolean;
    isKeepSeparately: boolean
};
interface IBetelLeaf {
    isMaximumHygienic: boolean;
    isBacteriaFree: boolean;
    isDirectlyPut: boolean;
    isDistilledWaterApplied: boolean;
    isCautionTaken: boolean;
};
interface ILocalCollectionCenter {
    isLocalCollectionCenter: boolean;
    isCropBroughtLCC: boolean  // LCC => Local Collection Center
    isPreCoolingSystem: boolean;
    isHygienicTransporting: boolean;
    transportation: string;
    isSeconddaryGrading: boolean;
    isAirConditioned: boolean;
    hour: number;
    minutes: number;
}