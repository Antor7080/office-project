import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const FertilizerFertilizingSchema = Joi.object({
    generalInformationID: Joi.string().required(),
    landPreparationFertilizer: Joi.object({
        fertilizingTime: Joi.string().valid('Morning', 'Evening', 'Afternoon').required(),
        isFertilizerUsed: Joi.boolean().required(),
        fertilizerType: Joi.array().items(Joi.string().valid('Chemical', 'Organic', 'Bio fertilizer')).required(),
    }).required(),
    fertilizerNameQuantity: Joi.object({
        isUreaUsed: Joi.boolean().required(),
        ureaQuantity: Joi.number().integer().min(0),
        isPotashUsed: Joi.boolean().required(),
        potashQuantity: Joi.number().integer().min(0),
        isOrganicUsed: Joi.boolean().required(),
        organicQuantity: Joi.number().integer().min(0),
        isCowDungUsed: Joi.boolean().required(),
        cowDungQuantity: Joi.number().integer().min(0),
        isPhosphorusUsed: Joi.boolean().required(),
        phosphorusQuantity: Joi.number().integer().min(0),
        isOtherUsed: Joi.boolean().required(),
        otherQuantity: Joi.number().integer().min(0),
    }).required(),
    fertilizerNamePlant: Joi.object({
        appliedFertilizer: Joi.array().items(Joi.string().valid('Urea', 'Potash', 'Phosphorus', 'Zinc', 'Other')).required(),
    }).required(),
    totalNumberOfFertilizer: Joi.object({
        vegetable: Joi.number().integer().min(0),
        mango: Joi.number().integer().min(0),
        betelLeaf: Joi.number().integer().min(0),
    }).required(),
    timeOfFertilizerApplicationQuantity: Joi.object({
        urea1: Joi.number().integer().min(0),
        urea2: Joi.number().integer().min(0),
        urea3: Joi.number().integer().min(0),
        phosphorus1: Joi.number().integer().min(0),
        phosphorus2: Joi.number().integer().min(0),
        phosphorus3: Joi.number().integer().min(0),
        potash1: Joi.number().integer().min(0),
        potash2: Joi.number().integer().min(0),
        potash3: Joi.number().integer().min(0),
        zinc1: Joi.number().integer().min(0),
        zinc2: Joi.number().integer().min(0),
        zinc3: Joi.number().integer().min(0),
        other1: Joi.number().integer().min(0),
        other2: Joi.number().integer().min(0),
        other3: Joi.number().integer().min(0),
        organicUsedBefor: Joi.number().integer().min(0),
        betelLeafOrganic: Joi.string().valid('Cow dung', 'Mustard Oil Cake').required(),
        cowDungType: Joi.string().valid('Wet', 'Dry'),
        fertilizerStored: Joi.boolean().required(),
        fertilizerCollected: Joi.string().valid("Dealer", "Retailer").required(),
        isSuggestionsTaken: Joi.boolean().required(),
    }).required(),
});

const FertilizerFertilizingValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { error } = FertilizerFertilizingSchema.validate(req.body, { abortEarly: false });
        if (error) {
            next(error);
        }
        next();
    } catch (error) {
        next(error);
    }

};
export default FertilizerFertilizingValidator;