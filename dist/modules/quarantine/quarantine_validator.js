"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const quarantinePestDiseseControlSchema = joi_1.default.object({
    generalInformationID: joi_1.default.string().required().min(10),
    quarantinePestDieases: joi_1.default.object({
        isQuarantinePestDisese: joi_1.default.boolean().required(),
        isPestRiskAnalysis: joi_1.default.boolean().required(),
        pestRiskAnalysis: joi_1.default.number()
    }).required(),
    quarantineNamePests: joi_1.default.object({
        vegetableName: joi_1.default.string().required(),
        pestsName: joi_1.default.array().items(joi_1.default.string()).required(),
        mangoPestsName: joi_1.default.array().items(joi_1.default.string()),
        betelLeafPestsName: joi_1.default.array().items(joi_1.default.string())
    }).required(),
    quarantinePestDiseseName: joi_1.default.object({
        vegetableDisesesName: joi_1.default.array().items(joi_1.default.string()),
        mangoDisesesName: joi_1.default.array().items(joi_1.default.string()),
        betelLeafDisesesName: joi_1.default.array().items(joi_1.default.string())
    }).required(),
    controlMeasures: joi_1.default.object({
        techniquesName: joi_1.default.array().items(joi_1.default.string().valid('Physical', 'Biological', 'Chemical', 'Mechanical', 'Bio Pesticide').required()).required(),
        isIntegration: joi_1.default.boolean().required(),
        isIntegrationTwoThree: joi_1.default.boolean().required()
    }).required(),
    organicPesiticide: joi_1.default.object({
        vegetableOrganicPesticide: joi_1.default.array().items(joi_1.default.any()),
        mangoOrganicPesticide: joi_1.default.array().items(joi_1.default.any()),
        betelLeafOrganicPesticide: joi_1.default.array().items(joi_1.default.any()),
        otherOrganicPesticde: joi_1.default.array().items(joi_1.default.any())
    }).required(),
    chemicalPesticide: joi_1.default.object({
        vegetableChemicalPesticide: joi_1.default.array().items(joi_1.default.any()),
        mangoChemicalPesticide: joi_1.default.array().items(joi_1.default.any()),
        betelLeafChemicalPesticide: joi_1.default.array().items(joi_1.default.any()),
        otherChemicalPesticide: joi_1.default.array().items(joi_1.default.any())
    }).required(),
    fungicideBactericide: joi_1.default.object({
        vegetableFungicideBactericide: joi_1.default.array().items(joi_1.default.any()),
        mangoFungicideBactericide: joi_1.default.array().items(joi_1.default.any()),
        betelLeafFungicideBactericide: joi_1.default.array().items(joi_1.default.any()),
        otherFungicideBactericide: joi_1.default.array().items(joi_1.default.any())
    }).required(),
    insectDiseases: joi_1.default.object({
        isIdentify: joi_1.default.boolean().required(),
        isSuggestionsTaken: joi_1.default.boolean().required(),
        isPheromoneUsed: joi_1.default.boolean().required(),
        pheromoneUsedTime: joi_1.default.string().valid('Before', 'After').required(),
        isCropPheromoneUsed: joi_1.default.boolean().required(),
        isChemicalPesticideUsed: joi_1.default.boolean().required(),
        isHormonesUsed: joi_1.default.boolean().required()
    }).required(),
    vegetables: joi_1.default.object({
        isTimelyControllingPests: joi_1.default.boolean().required(),
        isTimelyControllingDiseascs: joi_1.default.boolean().required(),
        isPheromoneWorked: joi_1.default.boolean().required(),
        isRegularlyMonitored: joi_1.default.boolean().required(),
        isBagUsed: joi_1.default.boolean().required(),
        colorBag: joi_1.default.string().valid('White', 'Brown')
    }).required(),
    mango: joi_1.default.object({
        isProperManagement: joi_1.default.boolean().required(),
        isBaggingUsed: joi_1.default.boolean().required(),
        isIPMUsed: joi_1.default.boolean().required(),
        daysBeforeBagging: joi_1.default.number(),
        isMeaserTake: joi_1.default.boolean().required(),
        isLodgedBurned: joi_1.default.boolean().required(),
        isRightAnthracnose: joi_1.default.boolean().required()
    }).required(),
    betelLeaf: joi_1.default.object({
        isSalmonellaProtection: joi_1.default.boolean().required(),
        isChemicalOrganicUsed: joi_1.default.boolean().required(),
        isPreventingExcretion: joi_1.default.boolean().required(),
    })
});
const quarantinePestDiseseControlValidator = (req, res, next) => {
    const { error } = quarantinePestDiseseControlSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        return next(error);
    }
    next();
};
exports.default = quarantinePestDiseseControlValidator;
