import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const irrigationSourceSchema = Joi.object({
    generalInformationID: Joi.string().required(),
    waterSource: Joi.array().items(Joi.string().valid('River', 'Tube Well', 'Pond', 'Rain Water', 'Municipality', 'Deep Tube Well')).required(),
    pollutionFree: Joi.boolean().required(),
    testedSource: Joi.boolean().required(),
    infected: Joi.boolean().required(),
    isPurifined: Joi.boolean().required(),
    purifyingAgent: Joi.string(),
    localName: Joi.string(),
    sourceType: Joi.string(),
    badEffectHuman: Joi.boolean().required(),
    isHeavyMetalPresent: Joi.boolean().required(),
    irrigationSameTime: Joi.boolean().required(),
    differentIrrigationTime: Joi.number(),
    irrigation1: Joi.number(),
    irrigation2: Joi.number(),
    irrigation3: Joi.number(),
    irrigation4: Joi.number(),
    irrigation5: Joi.number(),
    totalIrrigation: Joi.number(),
    animalRoaming: Joi.boolean().required(),
    industryNearBy: Joi.boolean().required(),
    sewageWaterUsed: Joi.boolean().required(),
    tankDisinfection: Joi.boolean().required(),
    takenCooperation: Joi.boolean().required(),
    arrigationTime: Joi.array().items(Joi.string()),
    suggestionTaken: Joi.boolean().required(),
    irrigationMethod: Joi.array().items(Joi.string()),
    poperDrainage: Joi.boolean().required(),
    excessWaterDrainage: Joi.boolean().required()
});


const irrigationSourceValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { error } = irrigationSourceSchema.validate(req.body, {
            abortEarly: false, errors: {
                wrap: {
                    label: "",
                }
            }
        });
        if (error) {
            next(error);
        }
        next();
    } catch (error) {
        next(error);
    }
};
export default irrigationSourceValidator;