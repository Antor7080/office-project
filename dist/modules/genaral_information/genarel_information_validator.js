"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const genarelInformationValidation = joi_1.default.object({
    framLocationAndCode: joi_1.default.object({
        groupCodeNo: joi_1.default.alternatives().try(joi_1.default.number().required(), joi_1.default.string()).required(),
        farmCode: joi_1.default.alternatives().try(joi_1.default.number().required(), joi_1.default.string()).required(),
        mouja: joi_1.default.string().required(),
        village: joi_1.default.string().required(),
        union: joi_1.default.string().required(),
        upzilla: joi_1.default.string().required(),
        district: joi_1.default.string().required(),
    }).required(),
    farmingSystem: joi_1.default.object({
        system: joi_1.default.string().valid('Single', 'Cooperative').required(),
        totalFarmers: joi_1.default.number().required(),
        leaderName: joi_1.default.string().required(),
        groupTotalLand: joi_1.default.number().required(),
    }).required(),
    FarmerInformation: joi_1.default.object({
        farmerName: joi_1.default.string().required(),
        framProfileCode: joi_1.default.number().required(),
        farmerVillage: joi_1.default.string().required(),
        farmerUpzilla: joi_1.default.string().required(),
        farmerUnion: joi_1.default.string().required(),
        farmerDistrict: joi_1.default.string().required(),
    }).required(),
    farmerType: joi_1.default.object({
        type: joi_1.default.string().valid('Small', 'Medium', 'Large').required(),
        ownedLand: joi_1.default.number().required(),
        lease: joi_1.default.number().required(),
        totalLand: joi_1.default.number().required(),
    }).required(),
    siteSelection: joi_1.default.object({
        info1: joi_1.default.boolean().valid(true, false).required(),
        info2: joi_1.default.boolean().valid(true, false).required(),
        info3: joi_1.default.boolean().valid(true, false).required(),
        info4: joi_1.default.boolean().valid(true, false).required(),
        info5: joi_1.default.boolean().valid(true, false).required(),
        info6: joi_1.default.boolean().valid(true, false).required(),
        info7: joi_1.default.boolean().valid(true, false).required(),
        info8: joi_1.default.boolean().valid(true, false).required(),
        sourceOfWater: joi_1.default.array().items(joi_1.default.string().valid('River', 'Pond', 'Rain', 'Ground')).required(),
        info9: joi_1.default.boolean().valid(true, false).required(),
    }).required(),
    contratedLandCropInfo: joi_1.default.object({
        cantractLand: joi_1.default.number().required(),
        productionMethod: joi_1.default.string().valid('Open Field', 'Net House').required(),
        vegetables: joi_1.default.array().items(joi_1.default.string()).required(),
    }).required(),
    soilType: joi_1.default.object({
        soilName: joi_1.default.string().valid('Sand', 'Loamy', 'Clay').required(),
        soilPH: joi_1.default.number().required(),
        croppedType: joi_1.default.string().valid('Single', 'Double', 'Triple').required(),
        previousCrop: joi_1.default.string().required(),
        cultivationType: joi_1.default.string().valid('Traditional', 'Modern').required(),
        AEZ: joi_1.default.number().required(),
    }).required(),
});
const genarelInformationValidator = (req, res, next) => {
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
        }
        else {
            next(error);
        }
    }
    catch (error) {
        console.log(error);
        next(error);
    }
};
exports.default = genarelInformationValidator;
