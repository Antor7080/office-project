"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.managementPackagingValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.managementPackagingValidation = joi_1.default.object({
    generalInformationID: joi_1.default.string().required(),
    centerPackaging: joi_1.default.object({
        transportationType: joi_1.default.string().valid('Normal', 'Refrigerated').required(),
        isInspection: joi_1.default.boolean().required(),
        isWashingRoom: joi_1.default.boolean().required(),
        isDryByFan: joi_1.default.boolean().required(),
        isFinalFacilites: joi_1.default.boolean().required(),
        isTamperatureControl: joi_1.default.boolean().required(),
        isBacterialContainment: joi_1.default.boolean().required(),
        isHygienicPractices: joi_1.default.boolean().required(),
        isHygienicIsolatedRoom: joi_1.default.boolean().required(),
        isHygienicArrivalExit: joi_1.default.boolean().required()
    }).required(),
    temperatureControl: joi_1.default.object({
        isAppropriateTemperature: joi_1.default.boolean().required(),
        vegetables: joi_1.default.number(),
        betelLeaf: joi_1.default.number(),
        mango: joi_1.default.number()
    }).required(),
    vegetables: joi_1.default.object({
        isCleaningMethod: joi_1.default.boolean().required(),
        isColdWaterTreatment: joi_1.default.boolean().required(),
        isChlorineted: joi_1.default.boolean().required()
    }).required(),
    betelLeaf: joi_1.default.object({
        isCleaningMethod: joi_1.default.boolean().required(),
        isChlorineted: joi_1.default.boolean().required(),
        washedWith: joi_1.default.string().required(),
        treatedTime: joi_1.default.number().required(),
        isWashDistilledWater: joi_1.default.boolean().required(),
        isDryUnderFan: joi_1.default.boolean().required()
    }).required(),
    mango: joi_1.default.object({
        isBagging: joi_1.default.boolean().required(),
        baggingType: joi_1.default.string().valid('White', 'Brown').required(),
        isBoiledWaterCleaning: joi_1.default.boolean().required(),
        treatedTemperature: joi_1.default.number().required(),
        isDryUnderFan: joi_1.default.boolean().required()
    }).required(),
    inspection: joi_1.default.object({
        isInspectionByOfficer: joi_1.default.boolean().required(),
        isNoInsect: joi_1.default.boolean().required(),
        isCertified: joi_1.default.boolean().required(),
        certificateDate: joi_1.default.date().required()
    }).required(),
    finalPackaging: joi_1.default.object({
        packagingType: joi_1.default.string().required(),
        consumerDemandPackaging: joi_1.default.boolean().required(),
        isMicrobialTest: joi_1.default.boolean().required(),
        packagingMaterial: joi_1.default.string().valid('New', 'Old').required(),
        isPaperWrapped: joi_1.default.boolean().required(),
        isVentilation: joi_1.default.boolean().required(),
        isDryIceUsed: joi_1.default.boolean().required(),
        isDistilledMade: joi_1.default.boolean().required(),
        storedTime: joi_1.default.number().required(),
        vanType: joi_1.default.string().valid('Normal', 'Refrigerated').required(),
        routeType: joi_1.default.string().valid('Air', 'Sea').required(),
        isTemperatureControlRoom: joi_1.default.boolean(),
        isPhytoSanitaryCertificate: joi_1.default.boolean().required(),
        isLebeling: joi_1.default.boolean().required(),
        exportedCountry: joi_1.default.string().required(),
        exporterName: joi_1.default.string().required(),
        exportedDate: joi_1.default.alternatives().try(joi_1.default.string().required(), joi_1.default.date().required()),
        importerName: joi_1.default.string().required(),
        isRejected: joi_1.default.boolean().required(),
        rejectedReason: joi_1.default.string().valid('Misclear', 'Insects', 'Diseases')
    }).required()
});
const managementPackagingValidator = (req, res, next) => {
    try {
        const { error } = exports.managementPackagingValidation.validate(req.body, { abortEarly: false });
        if (error) {
            return next(error);
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = managementPackagingValidator;
