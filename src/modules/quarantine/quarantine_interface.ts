import { Document } from "mongoose";
export interface IQuarantinePestDiseasesControl extends Document {
    generalInformationID?: string;
    quarantinePestDieases: IQuarantinePestDiseases;
    quarantineNamePests: IQuarantineNamePests;
    quarantinePestDiseseName: IQuarantinePestDiseseName;
    controlMeasures: IControlMeasures;
    organicPesiticide: IOrganicPesiticide;
    chemicalPesticide: IChemicalPesticide;
    fungicideBactericide: IFungicideBactericide;
    insectDiseases: IInsectDiseases;
    vegetables: IVegetables;
    mango: IMango;
    betelLeaf: IBetelleaf

};

interface IQuarantinePestDiseases {
    isQuarantinePestDisese: boolean;
    isPestRiskAnalysis: boolean;
    pestRiskAnalysis: number; //value in month
};

interface IQuarantineNamePests {
    vegetableName: string;
    pestsName: Array<string>;
    mangoPestsName: Array<string>;
    betelLeafPestsName: Array<string>;
};

interface IQuarantinePestDiseseName {
    vegetableDisesesName: Array<string>;
    mangoDisesesName: Array<string>;
    betelLeafDisesesName: Array<string>;
};
interface IControlMeasures {
    techniquesName: Array<string>;
    isIntegration: boolean;
    isIntegrationTwoThree: boolean;
};
interface IOrganicPesiticide {
    vegetableOrganicPesticide: [Date, string, number];
    mangoOrganicPesticide: [Date, string, number];
    betelLeafOrganicPesticide: [Date, string, number];
    otherOrganicPesticde: [Date, string, number]
};
interface IChemicalPesticide {
    vegetableChemicalPesticide: [Date, string, number];
    mangoChemicalPesticide: [Date, string, number];
    betelLeafChemicalPesticide: [Date, string, number];
    otherChemicalPesticide: [Date, string, number]
};
interface IFungicideBactericide {
    vegetableFungicideBactericide: [Date, string, number];
    mangoFungicideBactericide: [Date, string, number];
    betelLeafFungicideBactericide: [Date, string, number];
    otherFungicideBactericide: [Date, string, number]
}
interface IInsectDiseases {
    isIdentify: boolean;
    isSuggestionsTaken: boolean;
    isPheromoneUsed: boolean;
    pheromoneUsedTime: string;
    isCropPheromoneUsed: boolean;
    isChemicalPesticideUsed: boolean;
    isHormonesUsed: boolean;
};
interface IVegetables {
    isTimelyControllingPests: boolean;
    isTimelyControllingDiseascs: boolean;
    isPheromoneWorked: boolean;
    isRegularlyMonitored: boolean;
    isBagUsed: boolean;
    colorBag: string;
};
interface IMango {
    isProperManagement: boolean;
    isBaggingUsed: boolean;
    isIPMUsed: boolean;
    daysBeforeBagging: number;
    isMeaserTake: boolean;
    isLodgedBurned: boolean;
    isRightAnthracnose: boolean;
};
interface IBetelleaf {
    isSalmonellaProtection: boolean;
    isChemicalOrganicUsed: boolean;
    isPreventingExcretion: boolean;
}
/* interface IOrganicPesiticide{

} */ 