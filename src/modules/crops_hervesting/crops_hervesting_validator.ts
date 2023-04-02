import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
const cropsHarvestingSchemaValidation = Joi.object({
    generalInformationID: Joi.string().required(),
    fieldSanitation: Joi.object({
        isFollowingStepTaken: Joi.boolean().required(),
        isIdentificationSource: Joi.boolean().required(),
        isPoperSanitation: Joi.boolean().required(),
        isToiletFacility: Joi.boolean().required(),
    }).required(),
    harvestField: Joi.object({
        isMRLtest: Joi.boolean().required(),
        insecticideLevel: Joi.number().required(),
        maturityIndexUsed: Joi.boolean().required(),
        isContainerHygienic: Joi.boolean().required(),
        cropHarvestedTime: Joi.string().valid('Morning', 'Afternoon', 'Evening').required(),
        materials: Joi.string().required(),
        inContainerOnSoilLevel: Joi.boolean().required(),
        DAEliaison: Joi.boolean().required(),
        primarilyStord: Joi.string().valid('Shaded', 'Sunny').required(),
        primaryGrading: Joi.boolean().required(),
        isGlovesApronUsed: Joi.boolean().required(),
    }).required(),
    vegetables: Joi.object({
        isKnifeUsed: Joi.boolean().required(),
        isHygienicToolUsed: Joi.boolean().required(),
        isInjuryProtection: Joi.boolean().required(),
    }).required(),
    mango: Joi.object({
        isToolsUsed: Joi.boolean().required(),
        isLatexSecrete: Joi.boolean().required(),
        isArrangedInContainer: Joi.boolean().required(),
        isKeepSeparately: Joi.boolean().required(),
    }).required(),
    betelLeaf: Joi.object({
        isMaximumHygienic: Joi.boolean().required(),
        isBacteriaFree: Joi.boolean().required(),
        isDirectlyPut: Joi.boolean().required(),
        isDistilledWaterApplied: Joi.boolean().required(),
        isCautionTaken: Joi.boolean().required(),
    }).required(),
    localCollectionCenter: Joi.object({
        isLocalCollectionCenter: Joi.boolean().required(),
        isCropBroughtLCC: Joi.boolean().required(),
        isPreCoolingSystem: Joi.boolean().required(),
        isHygienicTransporting: Joi.boolean().required(),
        transportation: Joi.string().valid('Open', 'Cover').required(),
        isSeconddaryGrading: Joi.boolean().required(),
        isAirConditioned: Joi.boolean().required(),
        hour: Joi.number().required(),
        minutes: Joi.number().required(),
    }).required(),
});

export const cropsHarvestingValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { error } = cropsHarvestingSchemaValidation.validate(req.body);
        if (error) {
            return next(error);
        }
        next();
    } catch (error) {
        next(error);
    }
};