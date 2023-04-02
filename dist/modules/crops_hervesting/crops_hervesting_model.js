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
const CropsHarvestingSchema = new mongoose_1.default.Schema({
    generalInformationID: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    fieldSanitation: {
        isFollowingStepTaken: {
            type: Boolean
        },
        isIdentificationSource: {
            type: Boolean
        },
        isPoperSanitation: {
            type: Boolean
        },
        isToiletFacility: {
            type: Boolean
        },
    },
    harvestField: {
        isMRLtest: {
            type: Boolean
        },
        insecticideLevel: {
            type: Number
        },
        maturityIndexUsed: {
            type: Boolean
        },
        isContainerHygienic: {
            type: Boolean
        },
        cropHarvestedTime: {
            type: String,
            enum: ['Morning', 'Afternoon', 'Evening']
        },
        materials: {
            type: String
        },
        inContainerOnSoilLevel: {
            type: Boolean
        },
        DAEliaison: {
            type: Boolean
        },
        primarilyStord: {
            type: String,
            enum: ["Shaded", "Sunny"]
        },
        primaryGrading: {
            type: Boolean
        },
        isGlovesApronUsed: {
            type: Boolean
        },
    },
    vegetables: {
        isKnifeUsed: {
            type: Boolean
        },
        isHygienicToolUsed: {
            type: Boolean
        },
        isInjuryProtection: {
            type: Boolean
        },
    },
    mango: {
        isToolsUsed: {
            type: Boolean
        },
        isLatexSecrete: {
            type: Boolean
        },
        isArrangedInContainer: {
            type: Boolean
        },
        isKeepSeparately: {
            type: Boolean
        },
    },
    betelLeaf: {
        isMaximumHygienic: {
            type: Boolean
        },
        isBacteriaFree: {
            type: Boolean
        },
        isDirectlyPut: {
            type: Boolean
        },
        isDistilledWaterApplied: {
            type: Boolean
        },
        isCautionTaken: {
            type: Boolean
        },
    },
    localCollectionCenter: {
        isLocalCollectionCenter: {
            type: Boolean
        },
        isCropBroughtLCC: {
            type: Boolean
        },
        isPreCoolingSystem: {
            type: Boolean
        },
        isHygienicTransporting: {
            type: Boolean
        },
        transportation: {
            type: String,
            enum: ["Open", "Cover"]
        },
        isSeconddaryGrading: {
            type: Boolean
        },
        isAirConditioned: {
            type: Boolean
        },
        hour: {
            type: Number
        },
        minutes: {
            type: Number
        },
    }
});
exports.default = mongoose_1.default.model("CropsHarvesting", CropsHarvestingSchema);
