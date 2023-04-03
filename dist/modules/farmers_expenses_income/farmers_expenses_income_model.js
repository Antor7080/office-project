"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FarmersExpensesIncomeSchema = new mongoose_1.Schema({
    generalInformationID: { type: mongoose_1.Schema.Types.ObjectId, ref: "GenarelInformation" },
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
exports.default = (0, mongoose_1.model)("FarmersExpensesIncome", FarmersExpensesIncomeSchema);
