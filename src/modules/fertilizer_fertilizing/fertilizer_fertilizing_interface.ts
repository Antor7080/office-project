import { Document } from 'mongoose';
export interface IFertilizerFertilizing extends Document {
    generalInformationID?: string;
    landPreparationFertilizer: IlandPreparationFertilizer;
    fertilizerNameQuantity: IfertilizerNameQuantity;
    fertilizerNamePlant: IfertilizerNamePlant;
    totalNumberOfFertilizer: ItotalNumberOfFertilizer;
    timeOfFertilizerApplicationQuantity: ItimeOfFertilizerApplicationQuantity;
};

interface IlandPreparationFertilizer {
    fertilizingTime: string;
    isFertilizerUsed: boolean;
    fertilizerType: [string];
};
interface IfertilizerNameQuantity {
    isUreaUsed: boolean;
    ureaQuantity: number;
    isPotashUsed: boolean;
    potashQuantity: number;
    isOrganicUsed: boolean;
    organicQuantity: number;
    isCowDungUsed: boolean;
    cowDungQuantity: number;
    isPhosphorusUsed: boolean;
    phosphorusQuantity: number;
    isOtherUsed: boolean;
    otherQuantity: number;
};
interface IfertilizerNamePlant {
    appliedFertilizer: [string];
};
interface ItotalNumberOfFertilizer {
    vegetable: number;
    mango: number;
    betelLeaf: number;
};
interface ItimeOfFertilizerApplicationQuantity {
    urea1: number;
    urea2: number;
    urea3: number;
    phosphorus1: number;
    phosphorus2: number;
    phosphorus3: number;
    potash1: number;
    potash2: number;
    potash3: number;
    zinc1: number;
    zinc2: number;
    zinc3: number;
    other1: number;
    other2: number;
    other3: number;
    organicUsedBefor: number;
    betelLeafOrganic: string;
    cowDungType: string;
    fertilizerStored: boolean;
    fertilizerCollected: string;
    isSuggestionsTaken: boolean;
};
