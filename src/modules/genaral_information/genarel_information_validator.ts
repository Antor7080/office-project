import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const genarelInformationValidation = Joi.object({
    framLocationAndCode: Joi.object({
        groupCodeNo: Joi.alternatives().try(Joi.number().required(), Joi.string()).required(),
        farmCode: Joi.alternatives().try(Joi.number().required(), Joi.string()).required(),
        mouja: Joi.string().required(),
        village: Joi.string().required(),
        union: Joi.string().required(),
        upzilla: Joi.string().required(),
        district: Joi.string().required(),
    }).required(),
    farmingSystem: Joi.object({
        system: Joi.string().valid('Single', 'Cooperative').required(),
        totalFarmers: Joi.number().required(),
        leaderName: Joi.string().required(),
        groupTotalLand: Joi.number().required(),
    }).required(),
    FarmerInformation: Joi.object({
        farmerName: Joi.string().required(),
        framProfileCode: Joi.number().required(),
        farmerVillage: Joi.string().required(),
        farmerUpzilla: Joi.string().required(),
        farmerUnion: Joi.string().required(),
        farmerDistrict: Joi.string().required(),
    }).required(),
    farmerType: Joi.object({
        type: Joi.string().valid('Small', 'Medium', 'Large').required(),
        ownedLand: Joi.number().required(),
        lease: Joi.number().required(),
        totalLand: Joi.number().required(),
    }).required(),
    siteSelection: Joi.object({
        info1: Joi.boolean().valid(true, false).required(),
        info2: Joi.boolean().valid(true, false).required(),
        info3: Joi.boolean().valid(true, false).required(),
        info4: Joi.boolean().valid(true, false).required(),
        info5: Joi.boolean().valid(true, false).required(),
        info6: Joi.boolean().valid(true, false).required(),
        info7: Joi.boolean().valid(true, false).required(),
        info8: Joi.boolean().valid(true, false).required(),
        sourceOfWater: Joi.array().items(Joi.string().valid('River', 'Pond', 'Rain', 'Ground')).required(),
        info9: Joi.boolean().valid(true, false).required(),
    }).required(),
    contratedLandCropInfo: Joi.object({
        cantractLand: Joi.number().required(),
        productionMethod: Joi.string().valid('Open Field', 'Net House').required(),
        vegetables: Joi.array().items(Joi.string()).required(),
    }).required(),
    soilType: Joi.object({
        soilName: Joi.string().valid('Sand', 'Loamy', 'Clay').required(),
        soilPH: Joi.number().required(),
        croppedType: Joi.string().valid('Single', 'Double', 'Triple').required(),
        previousCrop: Joi.string().required(),
        cultivationType: Joi.string().valid('Traditional', 'Modern').required(),
        AEZ: Joi.number().required(),
    }).required(),
});


const genarelInformationValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { error } = genarelInformationValidation.validate(req.body, {
            abortEarly: false, errors: {
                wrap: {
                    label: "",
                },
            },
        });
        console.log(error);
        if (!error) {
            next();
        } else {
            next(error)
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}

export default genarelInformationValidator;