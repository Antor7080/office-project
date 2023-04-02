"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cropsHarvestingValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const cropsHarvestingSchemaValidation = joi_1.default.object({
    generalInformationID: joi_1.default.string().required(),
    fieldSanitation: joi_1.default.object({
        isFollowingStepTaken: joi_1.default.boolean().required(),
        isIdentificationSource: joi_1.default.boolean().required(),
        isPoperSanitation: joi_1.default.boolean().required(),
        isToiletFacility: joi_1.default.boolean().required(),
    }).required(),
    harvestField: joi_1.default.object({
        isMRLtest: joi_1.default.boolean().required(),
        insecticideLevel: joi_1.default.number().required(),
        maturityIndexUsed: joi_1.default.boolean().required(),
        isContainerHygienic: joi_1.default.boolean().required(),
        cropHarvestedTime: joi_1.default.string().valid('Morning', 'Afternoon', 'Evening').required(),
        materials: joi_1.default.string().required(),
        inContainerOnSoilLevel: joi_1.default.boolean().required(),
        DAEliaison: joi_1.default.boolean().required(),
        primarilyStord: joi_1.default.string().valid('Shaded', 'Sunny').required(),
        primaryGrading: joi_1.default.boolean().required(),
        isGlovesApronUsed: joi_1.default.boolean().required(),
    }).required(),
    vegetables: joi_1.default.object({
        isKnifeUsed: joi_1.default.boolean().required(),
        isHygienicToolUsed: joi_1.default.boolean().required(),
        isInjuryProtection: joi_1.default.boolean().required(),
    }).required(),
    mango: joi_1.default.object({
        isToolsUsed: joi_1.default.boolean().required(),
        isLatexSecrete: joi_1.default.boolean().required(),
        isArrangedInContainer: joi_1.default.boolean().required(),
        isKeepSeparately: joi_1.default.boolean().required(),
    }).required(),
    betelLeaf: joi_1.default.object({
        isMaximumHygienic: joi_1.default.boolean().required(),
        isBacteriaFree: joi_1.default.boolean().required(),
        isDirectlyPut: joi_1.default.boolean().required(),
        isDistilledWaterApplied: joi_1.default.boolean().required(),
        isCautionTaken: joi_1.default.boolean().required(),
    }).required(),
    localCollectionCenter: joi_1.default.object({
        isLocalCollectionCenter: joi_1.default.boolean().required(),
        isCropBroughtLCC: joi_1.default.boolean().required(),
        isPreCoolingSystem: joi_1.default.boolean().required(),
        isHygienicTransporting: joi_1.default.boolean().required(),
        transportation: joi_1.default.string().valid('Open', 'Cover').required(),
        isSeconddaryGrading: joi_1.default.boolean().required(),
        isAirConditioned: joi_1.default.boolean().required(),
        hour: joi_1.default.number().required(),
        minutes: joi_1.default.number().required(),
    }).required(),
});
const cropsHarvestingValidator = (req, res, next) => {
    try {
        const { error } = cropsHarvestingSchemaValidation.validate(req.body);
        if (error) {
            return next(error);
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.cropsHarvestingValidator = cropsHarvestingValidator;
