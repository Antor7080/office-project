"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const quarantinePestDiseseControlSchema = joi_1.default.object({
    generalInformationID: joi_1.default.string().required(),
    quarantinePestDieases: joi_1.default.object({
        isQuarantinePestDisese: joi_1.default.boolean().required(),
        isPestRiskAnalysis: joi_1.default.boolean(),
        pestRiskAnalysis: joi_1.default.number()
    }),
    quarantineNamePests: joi_1.default.object({
        vegetableName: joi_1.default.string(),
        pestsName: joi_1.default.array().items(joi_1.default.string()),
        mangoPestsName: joi_1.default.array().items(joi_1.default.string()),
        betelLeafPestsName: joi_1.default.array().items(joi_1.default.string())
    }),
    quarantinePestDiseseName: joi_1.default.object({
        vegetableDisesesName: joi_1.default.array().items(joi_1.default.string()),
        mangoDisesesName: joi_1.default.array().items(joi_1.default.string()),
        betelLeafDisesesName: joi_1.default.array().items(joi_1.default.string())
    }),
    controlMeasures: joi_1.default.object({
        techniquesName: joi_1.default.array().items(joi_1.default.string().valid('Physical', 'Biological', 'Chemical', 'Mechanical', 'Bio Pesticide')),
        isIntegration: joi_1.default.boolean(),
        isIntegrationTwoThree: joi_1.default.boolean()
    }),
    organicPesiticide: joi_1.default.object({
        vegetableOrganicPesticide: joi_1.default.array().items(joi_1.default.any()),
        mangoOrganicPesticide: joi_1.default.array().items(joi_1.default.any()),
        betelLeafOrganicPesticide: joi_1.default.array().items(joi_1.default.any()),
        otherOrganicPesticde: joi_1.default.array().items(joi_1.default.any())
    }),
    chemicalPesticide: joi_1.default.object({
        vegetableChemicalPesticide: joi_1.default.array().items(joi_1.default.any()),
        mangoChemicalPesticide: joi_1.default.array().items(joi_1.default.any()),
        betelLeafChemicalPesticide: joi_1.default.array().items(joi_1.default.any()),
        otherChemicalPesticide: joi_1.default.array().items(joi_1.default.any())
    }),
    fungicideBactericide: joi_1.default.object({
        vegetableFungicideBactericide: joi_1.default.array().items(joi_1.default.any()),
        mangoFungicideBactericide: joi_1.default.array().items(joi_1.default.any()),
        betelLeafFungicideBactericide: joi_1.default.array().items(joi_1.default.any()),
        otherFungicideBactericide: joi_1.default.array().items(joi_1.default.any())
    }),
    insectDiseases: joi_1.default.object({
        isIdentify: joi_1.default.boolean(),
        isSuggestionsTaken: joi_1.default.boolean(),
        isPheromoneUsed: joi_1.default.boolean(),
        pheromoneUsedTime: joi_1.default.string().valid('Before', 'After'),
        isCropPheromoneUsed: joi_1.default.boolean(),
        isChemicalPesticideUsed: joi_1.default.boolean(),
        isHormonesUsed: joi_1.default.boolean()
    }),
    vegetables: joi_1.default.object({
        isTimelyControllingPests: joi_1.default.boolean(),
        isTimelyControllingDiseascs: joi_1.default.boolean(),
        isPheromoneWorked: joi_1.default.boolean(),
        isRegularlyMonitored: joi_1.default.boolean(),
        isBagUsed: joi_1.default.boolean(),
        colorBag: joi_1.default.string().valid('White', 'Brown')
    }),
    mango: joi_1.default.object({
        isProperManagement: joi_1.default.boolean(),
        isBaggingUsed: joi_1.default.boolean(),
        isIPMUsed: joi_1.default.boolean(),
        daysBeforeBagging: joi_1.default.number(),
        isMeaserTake: joi_1.default.boolean(),
        isLodgedBurned: joi_1.default.boolean(),
        isRightAnthracnose: joi_1.default.boolean()
    }),
    betelLeaf: joi_1.default.object({
        isSalmonellaProtection: joi_1.default.boolean(),
        isChemicalOrganicUsed: joi_1.default.boolean(),
        isPreventingExcretion: joi_1.default.boolean(),
    })
});
const quarantinePestDiseseControlValidator = (req, res, next) => {
    const { error } = quarantinePestDiseseControlSchema.validate(req.body, {
        abortEarly: false,
        allowUnknown: false,
    });
    if (error) {
        next(error);
    }
    next();
};
