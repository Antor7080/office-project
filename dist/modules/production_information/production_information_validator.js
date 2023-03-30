"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('joi');
const productionInformationSchema = Joi.object({
    generalInformationID: Joi.string().required(),
    cropInformation: Joi.object({
        varietyName: Joi.string().required(),
        varietyType: Joi.string().required(),
        usedInGourpLand: Joi.boolean().required(),
    }).required(),
    raisingOfSeedlings: Joi.object({
        raising: Joi.string().required(),
        seedsWereRaised: Joi.string().required(),
        isCowdungUsed: Joi.boolean().required(),
        cowdungAmount: Joi.number().required(),
        isVarmiCompostUsed: Joi.boolean().required(),
        varmiCompostAmount: Joi.number().required(),
        isCocodustUsed: Joi.boolean().required(),
        cocodustAmount: Joi.number().required(),
        isBiofertilizerUsed: Joi.boolean().required(),
        biofertilizerAmount: Joi.number().required(),
        isOtherUsed: Joi.boolean().required(),
        otherAmount: Joi.number().required(),
        insectPathogenSymptoms: Joi.boolean().required(),
        seedlingAge: Joi.number().required(),
    }).required(),
    landPreparation: Joi.object({
        plough: Joi.string().required(),
        isGroupPreapared: Joi.boolean().required(),
    }).required(),
    showingTransplanting: Joi.object({
        seedSource: Joi.string().required(),
        seedTreatment: Joi.boolean().required(),
        //fungicideName is optional
        fungicideName: Joi.string().optional(),
        sowingType: Joi.string().valid('Direcet Sowing', 'Seedling raised in seedbed').required(),
        plantDistance: Joi.number().required(),
        rowDistance: Joi.number().required(),
        gardenAge: Joi.number().required(),
        plantedInGroup: Joi.boolean().required(),
        dayDifference: Joi.number().required(),
    }).required(),
    selectionCropWeeding: Joi.object({
        cropName: Joi.string().required(),
        isWeedingPoperTime: Joi.boolean().required(),
        firstWeedingDate: Joi.date().required(),
        sceondWeedingDate: Joi.date().required(),
        thirdWeedingDate: Joi.date().required(),
        nextWeedingDate: Joi.date().required(),
    }).required(),
});
const productionInformationValidator = (req, res, next) => {
    try {
        const { error } = productionInformationSchema.validate(req.body);
        if (error) {
            next(error);
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = productionInformationValidator;
