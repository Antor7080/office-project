import { NextFunction, Request, Response } from "express";
import Joi from "joi";
export const managementPackagingValidation = Joi.object({
    generalInformationID: Joi.string().required(),
    centerPackaging: Joi.object({
        transportationType: Joi.string().valid('Normal', 'Refrigerated').required(),
        isInspection: Joi.boolean().required(),
        isWashingRoom: Joi.boolean().required(),
        isDryByFan: Joi.boolean().required(),
        isFinalFacilites: Joi.boolean().required(),
        isTamperatureControl: Joi.boolean().required(),
        isBacterialContainment: Joi.boolean().required(),
        isHygienicPractices: Joi.boolean().required(),
        isHygienicIsolatedRoom: Joi.boolean().required(),
        isHygienicArrivalExit: Joi.boolean().required()
    }).required(),
    temperatureControl: Joi.object({
        isAppropriateTemperature: Joi.boolean().required(),
        vegetables: Joi.number(),
        betelLeaf: Joi.number(),
        mango: Joi.number()
    }).required(),
    vegetables: Joi.object({
        isCleaningMethod: Joi.boolean().required(),
        isColdWaterTreatment: Joi.boolean().required(),
        isChlorineted: Joi.boolean().required()
    }).required(),
    betelLeaf: Joi.object({
        isCleaningMethod: Joi.boolean().required(),
        isChlorineted: Joi.boolean().required(),
        washedWith: Joi.string().required(),
        treatedTime: Joi.number().required(),
        isWashDistilledWater: Joi.boolean().required(),
        isDryUnderFan: Joi.boolean().required()
    }).required(),
    mango: Joi.object({
        isBagging: Joi.boolean().required(),
        baggingType: Joi.string().valid('White', 'Brown').required(),
        isBoiledWaterCleaning: Joi.boolean().required(),
        treatedTemperature: Joi.number().required(),
        isDryUnderFan: Joi.boolean().required()
    }).required(),
    inspection: Joi.object({
        isInspectionByOfficer: Joi.boolean().required(),
        isNoInsect: Joi.boolean().required(),
        isCertified: Joi.boolean().required(),
        certificateDate: Joi.date().required()
    }).required(),
    finalPackaging: Joi.object({
        packagingType: Joi.string().required(),
        consumerDemandPackaging: Joi.boolean().required(),
        isMicrobialTest: Joi.boolean().required(),
        packagingMaterial: Joi.string().valid('New', 'Old').required(),
        isPaperWrapped: Joi.boolean().required(),
        isVentilation: Joi.boolean().required(),
        isDryIceUsed: Joi.boolean().required(),
        isDistilledMade: Joi.boolean().required(),
        storedTime: Joi.number().required(),
        vanType: Joi.string().valid('Normal', 'Refrigerated').required(),
        routeType: Joi.string().valid('Air', 'Sea').required(),
        isTemperatureControlRoom: Joi.boolean(),
        isPhytoSanitaryCertificate: Joi.boolean().required(),
        isLebeling: Joi.boolean().required(),
        exportedCountry: Joi.string().required(),
        exporterName: Joi.string().required(),
        exportedDate: Joi.alternatives().try(Joi.string().required(), Joi.date().required()),
        importerName: Joi.string().required(),
        isRejected: Joi.boolean().required(),
        rejectedReason: Joi.string().valid('Misclear', 'Insects', 'Diseases')
    }).required()
});

const managementPackagingValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { error } = managementPackagingValidation.validate(req.body, { abortEarly: false });
        if (error) {
            return next(error);
        }
        next();
    } catch (error) {
        next(error);
    }
}
export default managementPackagingValidator;