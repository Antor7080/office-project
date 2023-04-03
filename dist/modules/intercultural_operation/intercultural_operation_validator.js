"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const interculturalOperationSchema = joi_1.default.object({
    generalInformationID: joi_1.default.string().required(),
    weedingIntercultural: joi_1.default.object({
        isCleaned: joi_1.default.boolean().required(),
        timelyWeeding: joi_1.default.boolean().required(),
        primarilyWeeded: joi_1.default.boolean().required(),
        productionLevelCleaned: joi_1.default.boolean().required(),
        purifingAgentUsed: joi_1.default.boolean().required(),
        treatedChemicalName: joi_1.default.string()
    }).required(),
    vegetable: joi_1.default.object({
        vegetableCultivation: joi_1.default.boolean().required(),
        mulchingPaperUsed: joi_1.default.boolean().required(),
        supportUsed: joi_1.default.boolean().required(),
        lightAndAir: joi_1.default.boolean().required(),
        animalProtection: joi_1.default.boolean().required(),
        isEggPlant: joi_1.default.boolean().required(),
        fenceUsed: joi_1.default.boolean().required(),
        wasteManagement: joi_1.default.boolean().required()
    }).required(),
    mango: joi_1.default.object({
        deadStemRemoved: joi_1.default.boolean().required(),
        doesClean: joi_1.default.boolean().required(),
        hormoneUsed: joi_1.default.boolean().required(),
        mulchingPaperUsedMango: joi_1.default.boolean().required(),
        fenceUsedMango: joi_1.default.boolean().required(),
        wasteManagementMango: joi_1.default.boolean().required()
    }).required(),
    betelLeaf: joi_1.default.object({
        landShadowNotDamp: joi_1.default.boolean().required(),
        supportUsedBetel: joi_1.default.boolean().required(),
        animalProtectionBetel: joi_1.default.boolean().required(),
        prohibitedEntry: joi_1.default.boolean().required()
    })
});
const interculturalOperationValidator = (req, res, next) => {
    try {
        const { error } = interculturalOperationSchema.validate(req.body, {
            abortEarly: false
        });
        if (error) {
            return next(error);
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = interculturalOperationValidator;
