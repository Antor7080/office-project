import mongoose, { Schema } from "mongoose";
import { ICropsHarvesting } from "./crops_hervesting_interface";

const CropsHarvestingSchema: Schema = new mongoose.Schema<ICropsHarvesting>({
    generalInformationID: {
        type: Schema.Types.ObjectId,
        ref: "GenarelInformation"

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
            enum:["Open", "Cover"]
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
})

export default mongoose.model<ICropsHarvesting>("CropsHarvesting", CropsHarvestingSchema);