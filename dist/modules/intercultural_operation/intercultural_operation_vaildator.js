"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const interculturalOperationSchema = joi_1.default.object({
    generalInformationID: joi_1.default.string().required(),
    weedingIntercultural: joi_1.default.object({
        isCleaned: joi_1.default.boolean(),
        timelyWeeding: joi_1.default.boolean(),
        primarilyWeeded: joi_1.default.boolean(),
        productionLevelCleaned: joi_1.default.boolean(),
        purifingAgentUsed: joi_1.default.boolean(),
        treatedChemicalName: joi_1.default.string().allow(null)
    }),
    vegetable: joi_1.default.object({
        vegetableCultivation: joi_1.default.boolean(),
        mulchingPaperUsed: joi_1.default.boolean(),
        supportUsed: joi_1.default.boolean(),
        lightAndAir: joi_1.default.boolean(),
        animalProtection: joi_1.default.boolean(),
        isEggPlant: joi_1.default.boolean(),
        fenceUsed: joi_1.default.boolean(),
        wasteManagement: joi_1.default.boolean()
    }),
    mango: joi_1.default.object({
        deadStemRemoved: joi_1.default.boolean(),
        doesClean: joi_1.default.boolean(),
        hormoneUsed: joi_1.default.boolean(),
        mulchingPaperUsedMango: joi_1.default.boolean()
    }),
    betelLeaf: joi_1.default.object({
        landShadowNotDamp: joi_1.default.boolean(),
        supportUsedBetel: joi_1.default.boolean(),
        animalProtectionBetel: joi_1.default.boolean(),
        prohibitedEntry: joi_1.default.boolean()
    })
});
const interculturalOperationValidator = (req, res, next) => {
    try {
        const { error } = interculturalOperationSchema.validate(req.body);
        if (error) {
            next(error);
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = interculturalOperationValidator;
