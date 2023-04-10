import { Document, ObjectId } from "mongoose";

export interface IFarmersExpensesIncome extends Document {
    generalInformationID?: string;
    leaseCost: number;
    soilTestCost: number;
    landPreparationCost: number;
    seedCost: number;
    fertilizerCost: number;
    irrigationCost: number;
    interCulturalCost: number;
    transportCost: number;
    laborCost: number;
    otherCost: number;
    totalCost: number;
    totalProduction: number;
    totalSale: number;
    totalProfit: number;
    _id?: ObjectId;
}