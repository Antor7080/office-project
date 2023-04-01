"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const irrigationSourceSchema = joi_1.default.object({
    generalInformationID: joi_1.default.string().required(),
    waterSource: joi_1.default.array().items(joi_1.default.string().valid('River', 'Tube Well', 'Pond', 'Rain Water', 'Municipality', 'Deep Tube Well')).required(),
    pollutionFree: joi_1.default.boolean().required(),
    testedSource: joi_1.default.boolean().required(),
    infected: joi_1.default.boolean().required(),
    isPurifined: joi_1.default.boolean().required(),
    purifyingAgent: joi_1.default.string(),
    localName: joi_1.default.string(),
    sourceType: joi_1.default.string(),
    badEffectHuman: joi_1.default.boolean().required(),
    isHeavyMetalPresent: joi_1.default.boolean().required(),
    irrigationSameTime: joi_1.default.boolean().required(),
    differentIrrigationTime: joi_1.default.number(),
    irrigation1: joi_1.default.number(),
    irrigation2: joi_1.default.number(),
    irrigation3: joi_1.default.number(),
    irrigation4: joi_1.default.number(),
    irrigation5: joi_1.default.number(),
    totalIrrigation: joi_1.default.number(),
    animalRoaming: joi_1.default.boolean().required(),
    industryNearBy: joi_1.default.boolean().required(),
    sewageWaterUsed: joi_1.default.boolean().required(),
    tankDisinfection: joi_1.default.boolean().required(),
    takenCooperation: joi_1.default.boolean().required(),
    arrigationTime: joi_1.default.array().items(joi_1.default.string()),
    suggestionTaken: joi_1.default.boolean().required(),
    irrigationMethod: joi_1.default.array().items(joi_1.default.string()),
    poperDrainage: joi_1.default.boolean().required(),
    excessWaterDrainage: joi_1.default.boolean().required()
});
const irrigationSourceValidator = (req, res, next) => {
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
    }
    catch (error) {
        next(error);
    }
};
exports.default = irrigationSourceValidator;
