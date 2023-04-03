"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const FarmersExpensesIncomeJoiSchema = joi_1.default.object({
    generalInformationID: joi_1.default.string().required(),
    leaseCost: joi_1.default.number().default(0),
    soilTestCost: joi_1.default.number().default(0),
    landPreparationCost: joi_1.default.number().default(0),
    seedCost: joi_1.default.number().default(0),
    fertilizerCost: joi_1.default.number().default(0),
    irrigationCost: joi_1.default.number().default(0),
    laborCost: joi_1.default.number().default(0),
    otherCost: joi_1.default.number().default(0),
    totalCost: joi_1.default.number().default(0),
    totalProduction: joi_1.default.number().default(0),
    totalSale: joi_1.default.number().default(0),
    totalProfit: joi_1.default.number().default(0),
});
const FarmersExpensesIncomeValidator = (req, res, next) => {
    try {
        const { error } = FarmersExpensesIncomeJoiSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return next(error);
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = FarmersExpensesIncomeValidator;
