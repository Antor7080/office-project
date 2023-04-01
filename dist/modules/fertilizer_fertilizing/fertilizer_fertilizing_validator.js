"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const FertilizerFertilizingSchema = joi_1.default.object({
    generalInformationID: joi_1.default.string().required(),
    landPreparationFertilizer: joi_1.default.object({
        fertilizingTime: joi_1.default.string().valid('Morning', 'Evening', 'Afternoon').required(),
        isFertilizerUsed: joi_1.default.boolean().required(),
        fertilizerType: joi_1.default.array().items(joi_1.default.string().valid('Chemical', 'Organic', 'Bio fertilizer')).required(),
    }).required(),
    fertilizerNameQuantity: joi_1.default.object({
        isUreaUsed: joi_1.default.boolean().required(),
        ureaQuantity: joi_1.default.number().integer().min(0),
        isPotashUsed: joi_1.default.boolean().required(),
        potashQuantity: joi_1.default.number().integer().min(0),
        isOrganicUsed: joi_1.default.boolean().required(),
        organicQuantity: joi_1.default.number().integer().min(0),
        isCowDungUsed: joi_1.default.boolean().required(),
        cowDungQuantity: joi_1.default.number().integer().min(0),
        isPhosphorusUsed: joi_1.default.boolean().required(),
        phosphorusQuantity: joi_1.default.number().integer().min(0),
        isOtherUsed: joi_1.default.boolean().required(),
        otherQuantity: joi_1.default.number().integer().min(0),
    }).required(),
    fertilizerNamePlant: joi_1.default.object({
        appliedFertilizer: joi_1.default.array().items(joi_1.default.string().valid('Urea', 'Potash', 'Phosphorus', 'Zinc', 'Other')).required(),
    }).required(),
    totalNumberOfFertilizer: joi_1.default.object({
        vegetable: joi_1.default.number().integer().min(0),
        mango: joi_1.default.number().integer().min(0),
        betelLeaf: joi_1.default.number().integer().min(0),
    }).required(),
    timeOfFertilizerApplicationQuantity: joi_1.default.object({
        urea1: joi_1.default.number().integer().min(0),
        urea2: joi_1.default.number().integer().min(0),
        urea3: joi_1.default.number().integer().min(0),
        phosphorus1: joi_1.default.number().integer().min(0),
        phosphorus2: joi_1.default.number().integer().min(0),
        phosphorus3: joi_1.default.number().integer().min(0),
        potash1: joi_1.default.number().integer().min(0),
        potash2: joi_1.default.number().integer().min(0),
        potash3: joi_1.default.number().integer().min(0),
        zinc1: joi_1.default.number().integer().min(0),
        zinc2: joi_1.default.number().integer().min(0),
        zinc3: joi_1.default.number().integer().min(0),
        other1: joi_1.default.number().integer().min(0),
        other2: joi_1.default.number().integer().min(0),
        other3: joi_1.default.number().integer().min(0),
        organicUsedBefor: joi_1.default.number().integer().min(0),
        betelLeafOrganic: joi_1.default.string().valid('Cow dung', 'Mustard Oil Cake').required(),
        cowDungType: joi_1.default.string().valid('Wet', 'Dry'),
        fertilizerStored: joi_1.default.boolean().required(),
        fertilizerCollected: joi_1.default.string().valid("Dealer", "Retailer").required(),
        isSuggestionsTaken: joi_1.default.boolean().required(),
    }).required(),
});
const FertilizerFertilizingValidator = (req, res, next) => {
    try {
        const { error } = FertilizerFertilizingSchema.validate(req.body, { abortEarly: false });
        if (error) {
            next(error);
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = FertilizerFertilizingValidator;
