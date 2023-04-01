import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const quarantinePestDiseseControlSchema = Joi.object({
    generalInformationID: Joi.string().required(),
    quarantinePestDieases: Joi.object({
        isQuarantinePestDisese: Joi.boolean().required(),
        isPestRiskAnalysis: Joi.boolean(),
        pestRiskAnalysis: Joi.number()
    }),
    quarantineNamePests: Joi.object({
        vegetableName: Joi.string(),
        pestsName: Joi.array().items(Joi.string()),
        mangoPestsName: Joi.array().items(Joi.string()),
        betelLeafPestsName: Joi.array().items(Joi.string())
    }),
    quarantinePestDiseseName: Joi.object({
        vegetableDisesesName: Joi.array().items(Joi.string()),
        mangoDisesesName: Joi.array().items(Joi.string()),
        betelLeafDisesesName: Joi.array().items(Joi.string())
    }),
    controlMeasures: Joi.object({
        techniquesName: Joi.array().items(Joi.string().valid('Physical', 'Biological', 'Chemical', 'Mechanical', 'Bio Pesticide')),
        isIntegration: Joi.boolean(),
        isIntegrationTwoThree: Joi.boolean()
    }),
    organicPesiticide: Joi.object({
        vegetableOrganicPesticide: Joi.array().items(Joi.any()),
        mangoOrganicPesticide: Joi.array().items(Joi.any()),
        betelLeafOrganicPesticide: Joi.array().items(Joi.any()),
        otherOrganicPesticde: Joi.array().items(Joi.any())
    }),
    chemicalPesticide: Joi.object({
        vegetableChemicalPesticide: Joi.array().items(Joi.any()),
        mangoChemicalPesticide: Joi.array().items(Joi.any()),
        betelLeafChemicalPesticide: Joi.array().items(Joi.any()),
        otherChemicalPesticide: Joi.array().items(Joi.any())
    }),
    fungicideBactericide: Joi.object({
        vegetableFungicideBactericide: Joi.array().items(Joi.any()),
        mangoFungicideBactericide: Joi.array().items(Joi.any()),
        betelLeafFungicideBactericide: Joi.array().items(Joi.any()),
        otherFungicideBactericide: Joi.array().items(Joi.any())
    }),
    insectDiseases: Joi.object({
        isIdentify: Joi.boolean(),
        isSuggestionsTaken: Joi.boolean(),
        isPheromoneUsed: Joi.boolean(),
        pheromoneUsedTime: Joi.string().valid('Before', 'After'),
        isCropPheromoneUsed: Joi.boolean(),
        isChemicalPesticideUsed: Joi.boolean(),
        isHormonesUsed: Joi.boolean()
    }),
    vegetables: Joi.object({
        isTimelyControllingPests: Joi.boolean(),
        isTimelyControllingDiseascs: Joi.boolean(),
        isPheromoneWorked: Joi.boolean(),
        isRegularlyMonitored: Joi.boolean(),
        isBagUsed: Joi.boolean(),
        colorBag: Joi.string().valid('White', 'Brown')
    }),
    mango: Joi.object({
        isProperManagement: Joi.boolean(),
        isBaggingUsed: Joi.boolean(),
        isIPMUsed: Joi.boolean(),
        daysBeforeBagging: Joi.number(),
        isMeaserTake: Joi.boolean(),
        isLodgedBurned: Joi.boolean(),
        isRightAnthracnose: Joi.boolean()
    }),
    betelLeaf: Joi.object({
        isSalmonellaProtection: Joi.boolean(),
        isChemicalOrganicUsed: Joi.boolean(),
        isPreventingExcretion: Joi.boolean(),
    })
});

const quarantinePestDiseseControlValidator = (req: Request, res: Response, next: NextFunction) => {
    const { error } = quarantinePestDiseseControlSchema.validate(req.body, {
        abortEarly: false,
       
    });
    if (error) {
        next(error);
    }
    next();

};