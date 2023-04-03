import { Document } from 'mongoose';
export interface IPersonalWokerHygiene extends Document {
    generalInformationID?: string;
    fram: IFram;
    interculteralOperation: InterculteralOperation;
    farmerAccounts: IFarmerAccounts;
}

interface IFram {
    isRestHouse: boolean;
    isToilet: boolean;
    isDistilledWater: boolean;
    isSoap: boolean;
    isMaterialRoom: boolean;
    isRoamingFree: boolean;
    isHygieneProduct: boolean;
    isMonitoring: boolean;
    isDressingRoom: boolean;
};
interface InterculteralOperation {
    isHygieneDressUsed: boolean;
    isStoredProperly: boolean;
    isRefreshed: boolean;
    isCleaned: boolean;
    pesticideApplied: string;
    isRightDirection: boolean;
    daysBeforeHarvest: number;
    isInformationTaken: boolean;
    isHandGlovesUsed: boolean;
    isHygienic: boolean;
    isPersonalHygiene: boolean;
    isAllHygiene: boolean;
    isAllPrincipleMaintained: boolean;
};

interface IFarmerAccounts {
    leaseCost: number;
    soilTestCost: number;
    landPreparationCost: number;
    seedCost: number;
    fertilizerCost: number;
    irrigationCost: number;
    laborCost: number;
    otherCost: number;
    totalCost: number;
    totalProduction: number;
    totalSale: number;
    totalProfit: number;
}