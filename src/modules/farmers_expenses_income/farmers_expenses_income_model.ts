import { Schema, model } from "mongoose";
import { IFarmersExpensesIncome } from "./farmers_expenses_income_interface";

const FarmersExpensesIncomeSchema = new Schema<IFarmersExpensesIncome>({
    generalInformationID: { type: Schema.Types.ObjectId, ref: "GenarelInformation" },
    leaseCost: {
        type: Number,
        default: 0
    },
    soilTestCost: {
        type: Number, default: 0
    },  
    landPreparationCost: {
        type: Number, default: 0
    },
    seedCost: {
        type: Number, default: 0
    },
    fertilizerCost: {
        type: Number, default: 0
    },
    irrigationCost: {
        type: Number, default: 0
    },
    laborCost: {
        type: Number, default: 0
    },
    otherCost: {
        type: Number, default: 0
    },
    totalCost: {
        type: Number, default: 0
    },
    totalProduction: {
        type: Number, default: 0
    },
    totalSale: {
        type: Number, default: 0
    },
    totalProfit: {
        type: Number, default: 0
    },
}, { timestamps: true });

export default model<IFarmersExpensesIncome>("FarmersExpensesIncome", FarmersExpensesIncomeSchema);