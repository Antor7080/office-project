"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personalWorkerHygieneValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.personalWorkerHygieneValidation = joi_1.default.object({
    generalInformationID: joi_1.default.string().required(),
    fram: joi_1.default.object({
        isRestHouse: joi_1.default.boolean().required(),
        isToilet: joi_1.default.boolean(),
        isDistilledWater: joi_1.default.boolean().required(),
        isSoap: joi_1.default.boolean().required(),
        isMaterialRoom: joi_1.default.boolean(),
        isRoamingFree: joi_1.default.boolean().required(),
        isHygieneProduct: joi_1.default.boolean().required(),
        isMonitoring: joi_1.default.boolean().required(),
        isDressingRoom: joi_1.default.boolean().required(),
    }).required(),
    interculteralOperation: joi_1.default.object({
        isHygieneDressUsed: joi_1.default.boolean().required(),
        isStoredProperly: joi_1.default.boolean().required(),
        isRefreshed: joi_1.default.boolean().required(),
        isCleaned: joi_1.default.boolean().required(),
        pesticideApplied: joi_1.default.string(),
        isRightDirection: joi_1.default.boolean().required(),
        isDAE: joi_1.default.boolean().required(),
        daysBeforeHarvest: joi_1.default.number(),
        isInformationTaken: joi_1.default.boolean().required(),
        isHandGlovesUsed: joi_1.default.boolean().required(),
        isHygienic: joi_1.default.boolean().required(),
        isPersonalHygiene: joi_1.default.boolean().required(),
        isAllHygiene: joi_1.default.boolean().required(),
        isAllPrincipleMaintained: joi_1.default.boolean().required(),
    }).required()
});
const personalWorkerHygieneValidator = (req, res, next) => {
    try {
        const { error } = exports.personalWorkerHygieneValidation.validate(req.body, { abortEarly: false });
        if (error) {
            return next(error);
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = personalWorkerHygieneValidator;
