import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const interculturalOperationSchema = Joi.object({
    generalInformationID: Joi.string().required(),
    weedingIntercultural: Joi.object({
        isCleaned: Joi.boolean(),
        timelyWeeding: Joi.boolean(),
        primarilyWeeded: Joi.boolean(),
        productionLevelCleaned: Joi.boolean(),
        purifingAgentUsed: Joi.boolean(),
        treatedChemicalName: Joi.string().allow(null)
    }),
    vegetable: Joi.object({
        vegetableCultivation: Joi.boolean(),
        mulchingPaperUsed: Joi.boolean(),
        supportUsed: Joi.boolean(),
        lightAndAir: Joi.boolean(),
        animalProtection: Joi.boolean(),
        isEggPlant: Joi.boolean(),
        fenceUsed: Joi.boolean(),
        wasteManagement: Joi.boolean()
    }),
    mango: Joi.object({
        deadStemRemoved: Joi.boolean(),
        doesClean: Joi.boolean(),
        hormoneUsed: Joi.boolean(),
        mulchingPaperUsedMango: Joi.boolean()
    }),
    betelLeaf: Joi.object({
        landShadowNotDamp: Joi.boolean(),
        supportUsedBetel: Joi.boolean(),
        animalProtectionBetel: Joi.boolean(),
        prohibitedEntry: Joi.boolean()
    })
});

const interculturalOperationValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { error } = interculturalOperationSchema.validate(req.body);
        if (error) {
            next(error);
        }
        next();
    } catch (error) {
        next(error);
    }
}

export default interculturalOperationValidator;