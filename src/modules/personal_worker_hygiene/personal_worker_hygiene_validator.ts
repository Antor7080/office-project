import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export const personalWorkerHygieneValidation = Joi.object({
    generalInformationID: Joi.string().required(),
    fram: Joi.object({
        isRestHouse: Joi.boolean().required(),
        isToilet: Joi.boolean(),
        isDistilledWater: Joi.boolean().required(),
        isSoap: Joi.boolean().required(),
        isMaterialRoom: Joi.boolean(),
        isRoamingFree: Joi.boolean().required(),
        isHygieneProduct: Joi.boolean().required(),
        isMonitoring: Joi.boolean().required(),
        isDressingRoom: Joi.boolean().required(),
    }).required(),
    interculteralOperation: Joi.object({
        isHygieneDressUsed: Joi.boolean().required(),
        isStoredProperly: Joi.boolean().required(),
        isRefreshed: Joi.boolean().required(),
        isCleaned: Joi.boolean().required(),
        pesticideApplied: Joi.string(),
        isRightDirection: Joi.boolean().required(),
        daysBeforeHarvest: Joi.number(),
        isInformationTaken: Joi.boolean().required(),
        isHandGlovesUsed: Joi.boolean().required(),
        isHygienic: Joi.boolean().required(),
        isPersonalHygiene: Joi.boolean().required(),
        isAllHygiene: Joi.boolean().required(),
        isAllPrincipleMaintained: Joi.boolean().required(),
    }).required()
});

const personalWorkerHygieneValidator = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = personalWorkerHygieneValidation.validate(req.body, { abortEarly: false });
    if (error) {
      return next(error);
    }
    next();
  } catch (error) {
    next(error);
  }
};
export default personalWorkerHygieneValidator;