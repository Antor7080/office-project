import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const quarantinePestDiseseControlSchema = Joi.object({
    generalInformationID: Joi.string().required().min(10),
    quarantinePestDieases: Joi.object({
        isQuarantinePestDisese: Joi.boolean().required(),
        isPestRiskAnalysis: Joi.boolean().required(),
        pestRiskAnalysis: Joi.number()
    }).required(),
    quarantineNamePests: Joi.object({
        vegetableName: Joi.string().required(),
        pestsName: Joi.array().items(Joi.string()).required(),
        mangoPestsName: Joi.array().items(Joi.string()),
        betelLeafPestsName: Joi.array().items(Joi.string())
    }).required(),
    quarantinePestDiseseName: Joi.object({
        vegetableDisesesName: Joi.array().items(Joi.string()),
        mangoDisesesName: Joi.array().items(Joi.string()),
        betelLeafDisesesName: Joi.array().items(Joi.string())
    }).required(),
    controlMeasures: Joi.object({
        techniquesName: Joi.array().items(Joi.string().valid('Physical', 'Biological', 'Chemical', 'Mechanical', 'Bio Pesticide').required()).required(),
        isIntegration: Joi.boolean().required(),
        isIntegrationTwoThree: Joi.boolean().required()
    }).required(),
    organicPesiticide: Joi.object({
        vegetableOrganicPesticide: Joi.array().items(Joi.any()),
        mangoOrganicPesticide: Joi.array().items(Joi.any()),
        betelLeafOrganicPesticide: Joi.array().items(Joi.any()),
        otherOrganicPesticde: Joi.array().items(Joi.any())
    }).required(),
    chemicalPesticide: Joi.object({
        vegetableChemicalPesticide: Joi.array().items(Joi.any()),
        mangoChemicalPesticide: Joi.array().items(Joi.any()),
        betelLeafChemicalPesticide: Joi.array().items(Joi.any()),
        otherChemicalPesticide: Joi.array().items(Joi.any())
    }).required(),
    fungicideBactericide: Joi.object({
        vegetableFungicideBactericide: Joi.array().items(Joi.any()),
        mangoFungicideBactericide: Joi.array().items(Joi.any()),
        betelLeafFungicideBactericide: Joi.array().items(Joi.any()),
        otherFungicideBactericide: Joi.array().items(Joi.any())
    }).required(),
    insectDiseases: Joi.object({
        isIdentify: Joi.boolean().required(),
        isSuggestionsTaken: Joi.boolean().required(),
        isPheromoneUsed: Joi.boolean().required(),
        pheromoneUsedTime: Joi.string().valid('Before', 'After').required(),
        isCropPheromoneUsed: Joi.boolean().required(),
        isChemicalPesticideUsed: Joi.boolean().required(),
        isHormonesUsed: Joi.boolean().required()
    }).required(),
    vegetables: Joi.object({
        isTimelyControllingPests: Joi.boolean().required(),
        isTimelyControllingDiseascs: Joi.boolean().required(),
        isPheromoneWorked: Joi.boolean().required(),
        isRegularlyMonitored: Joi.boolean().required(),
        isBagUsed: Joi.boolean().required(),
        colorBag: Joi.string().valid('White', 'Brown')
    }).required(),
    mango: Joi.object({
        isProperManagement: Joi.boolean().required(),
        isBaggingUsed: Joi.boolean().required(),
        isIPMUsed: Joi.boolean().required(),
        daysBeforeBagging: Joi.number(),
        isMeaserTake: Joi.boolean().required(),
        isLodgedBurned: Joi.boolean().required(),
        isRightAnthracnose: Joi.boolean().required()
    }).required(),
    betelLeaf: Joi.object({
        isSalmonellaProtection: Joi.boolean().required(),
        isChemicalOrganicUsed: Joi.boolean().required(),
        isPreventingExcretion: Joi.boolean().required(),
    })
});

const quarantinePestDiseseControlValidator = (req: Request, res: Response, next: NextFunction) => {
    const { error } = quarantinePestDiseseControlSchema.validate(req.body, {
        abortEarly: false,

    });
    console.log(error);
    if (error) {
        next(error);
    }
    next();

};

export default quarantinePestDiseseControlValidator;