import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const FarmersExpensesIncomeJoiSchema = Joi.object({
    generalInformationID: Joi.string().required(),
    leaseCost: Joi.number().default(0),
    soilTestCost: Joi.number().default(0),
    landPreparationCost: Joi.number().default(0),
    seedCost: Joi.number().default(0),
    fertilizerCost: Joi.number().default(0),
    irrigationCost: Joi.number().default(0),
    interCulturalCost: Joi.number().default(0),
    transportCost: Joi.number().default(0),
    laborCost: Joi.number().default(0),
    otherCost: Joi.number().default(0),
    totalCost: Joi.number().default(0),
    totalProduction: Joi.number().default(0),
    totalSale: Joi.number().default(0),
    totalProfit: Joi.number().default(0),
});

const FarmersExpensesIncomeValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { error } = FarmersExpensesIncomeJoiSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return next(error);
        }
        next();
    } catch (error) {
        next(error);
    }
};

export default FarmersExpensesIncomeValidator;