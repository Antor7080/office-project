import { Document } from 'mongoose';
interface IproductionInformation extends Document {
    generalInformationID?: string;
    cropInformation: IcropInformation,
    raisingOfSeedlings: IraisingOfSeedlings,
    landPreparation: IlandPreparation,
    showingTransplanting: IshowingTransplanting,
    selectionCropWeeding: IselectionCropWeeding,
};
interface IcropInformation {
    varietyName: string;
    varietyType: string;
    usedInGourpLand: boolean;
};
interface IselectionCropWeeding {
    cropName: string;
    isWeedingPoperTime: boolean;
    firstWeedingDate: Date;
    sceondWeedingDate: Date;
    thirdWeedingDate: Date;
    nextWeedingDate: Date;
}
interface IraisingOfSeedlings {
    raising: string;
    seedsWereRaised: string;
    isCowdungUsed: boolean;
    cowdungAmount: number;
    isVarmiCompostUsed: boolean;
    varmiCompostAmount: number;
    isCocodustUsed: boolean;
    cocodustAmount: number;
    isBiofertilizerUsed: boolean;
    biofertilizerAmount: number;
    isOtherUsed: boolean;
    otherAmount: number;
};
interface IlandPreparation {
    plough: string;
    isGroupPreapared: boolean;
}
interface IshowingTransplanting {
    seedSource: string;
    seedTreatment: boolean;
    fungicideName: string;
    sowingType: string;
    plantDistance: number;
    rowDistance: number;
    gardenAge: number;
    plantedInGroup: boolean;
    dayDifference?: number;
}
export default IproductionInformation;