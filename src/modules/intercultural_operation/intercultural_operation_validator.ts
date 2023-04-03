import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const interculturalOperationSchema = Joi.object({
    generalInformationID: Joi.string().required(),
    weedingIntercultural: Joi.object({
        isCleaned: Joi.boolean().required(),
        timelyWeeding: Joi.boolean().required(),
        primarilyWeeded: Joi.boolean().required(),
        productionLevelCleaned: Joi.boolean().required(),
        purifingAgentUsed: Joi.boolean().required(),
        treatedChemicalName: Joi.string()
    }).required(),
    vegetable: Joi.object({
        vegetableCultivation: Joi.boolean().required(),
        mulchingPaperUsed: Joi.boolean().required(),
        supportUsed: Joi.boolean().required(),
        lightAndAir: Joi.boolean().required(),
        animalProtection: Joi.boolean().required(),
        isEggPlant: Joi.boolean().required(),
        fenceUsed: Joi.boolean().required(),
        wasteManagement: Joi.boolean().required()
    }).required(),
    mango: Joi.object({
        deadStemRemoved: Joi.boolean().required(),
        doesClean: Joi.boolean().required(),
        hormoneUsed: Joi.boolean().required(),
        mulchingPaperUsedMango: Joi.boolean().required(),
        fenceUsedMango: Joi.boolean().required(),
        wasteManagementMango: Joi.boolean().required()
    }).required(),
    betelLeaf: Joi.object({
        landShadowNotDamp: Joi.boolean().required(),
        supportUsedBetel: Joi.boolean().required(),
        animalProtectionBetel: Joi.boolean().required(),
        prohibitedEntry: Joi.boolean().required()
    })
});

const interculturalOperationValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { error } = interculturalOperationSchema.validate(req.body, {
            abortEarly: false
        });
        if (error) {
            return next(error);
        }
        next();
    } catch (error) {
        next(error);
    }
}

export default interculturalOperationValidator;