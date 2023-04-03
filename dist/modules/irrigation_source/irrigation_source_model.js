"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const IrrigationSourceSchema = new mongoose_1.default.Schema({
    generalInformationID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'GenarelInformation'
    },
    waterSource: {
        type: [String],
        enum: ['River', 'TubeWell', 'Pond', 'RainWater', 'Municipality', 'DeepTubeWell']
    },
    pollutionFree: {
        type: Boolean,
    },
    testedSource: {
        type: Boolean,
    },
    infected: {
        type: Boolean,
    },
    isPurifined: {
        type: Boolean,
    },
    purifyingAgent: {
        type: String,
    },
    localName: {
        type: String,
    },
    sourceType: {
        type: String,
    },
    badEffectHuman: {
        type: Boolean,
    },
    isHeavyMetalPresent: {
        type: Boolean,
    },
    irrigationSameTime: {
        type: Boolean,
    },
    differentIrrigationTime: {
        type: Number,
    },
    irrigation1: {
        type: Number,
    },
    irrigation2: {
        type: Number,
    },
    irrigation3: {
        type: Number,
    },
    irrigation4: {
        type: Number,
    },
    irrigation5: {
        type: Number,
    },
    totalIrrigation: {
        type: Number,
    },
    animalRoaming: {
        type: Boolean,
    },
    industryNearBy: {
        type: Boolean,
    },
    sewageWaterUsed: {
        type: Boolean,
    },
    tankDisinfection: {
        type: Boolean,
    },
    takenCooperation: {
        type: Boolean,
    },
    arrigationTime: {
        type: String,
        enum: ['Morning', 'Evening', 'Noon']
    },
    suggestionTaken: {
        type: Boolean,
    },
    irrigationMethod: {
        type: String,
    },
    poperDrainage: {
        type: Boolean,
    },
    excessWaterDrainage: {
        type: Boolean,
    },
});
const IrrigationSource = mongoose_1.default.model('IrrigationSource', IrrigationSourceSchema);
exports.default = IrrigationSource;
