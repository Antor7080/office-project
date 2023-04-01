import { Schema, model } from "mongoose";
import { IQuarantinePestDiseasesControl } from './quarantine_interface';

const quarantinePestDiseseControlSchema = new Schema<IQuarantinePestDiseasesControl>({
    generalInformationID: {
        type: Schema.Types.ObjectId,

    },
    quarantinePestDieases: {
        isQuarantinePestDisese: {
            type: Boolean, required: true
        },
        isPestRiskAnalysis: {
            type: Boolean,
        },
        pestRiskAnalysis: {
            type: Number,
        },

    },
    quarantineNamePests: {
        vegetableName: {
            type: String
        },
        pestsName: {
            type: [String]
        },
        mangoPestsName: {
            type: [String]
        },
        betelLeafPestsName: {
            type: [String]
        },

    },
    quarantinePestDiseseName: {
        vegetableDisesesName: {
            type: [String]
        },
        mangoDisesesName: {
            type: [String]
        },
        betelLeafDisesesName: {
            type: [String]
        },

    },
    controlMeasures: {
        techniquesName: {
            type: [String],
            enum: ["Physical", "Biological", "Chemical", "Mechanical", "Bio Pesticide"]
        },
        isIntegration: {
            type: Boolean
        },
        isIntegrationTwoThree: {
            type: Boolean
        },

    },
    organicPesiticide: {
        vegetableOrganicPesticide: {
            type: [Schema.Types.Mixed]
        },
        mangoOrganicPesticide: {
            type: [Schema.Types.Mixed]
        },
        betelLeafOrganicPesticide: {
            type: [Schema.Types.Mixed]
        },
        otherOrganicPesticde: {
            type: [Schema.Types.Mixed]
        },

    },
    chemicalPesticide: {
        vegetableChemicalPesticide: {
            type: [Schema.Types.Mixed]
        },
        mangoChemicalPesticide: {
            type: [Schema.Types.Mixed]
        },
        betelLeafChemicalPesticide: {
            type: [Schema.Types.Mixed]
        },
        otherChemicalPesticide: {
            type: [Schema.Types.Mixed]
        },

    },
    fungicideBactericide: {
        vegetableFungicideBactericide: {
            type: [Schema.Types.Mixed]
        },
        mangoFungicideBactericide: {
            type: [Schema.Types.Mixed]
        },
        betelLeafFungicideBactericide: {
            type: [Schema.Types.Mixed]
        },
        otherFungicideBactericide: {
            type: [Schema.Types.Mixed]
        },

    },
    insectDiseases: {
        isIdentify: {
            type: Boolean
        },
        isSuggestionsTaken: {
            type: Boolean
        },
        isPheromoneUsed: {
            type: Boolean
        },
        pheromoneUsedTime: {
            type: String,
            enum: ["Before", "After"]
        },
        isCropPheromoneUsed: {
            type: Boolean
        },
        isChemicalPesticideUsed: {
            type: Boolean
        },
        isHormonesUsed: {
            type: Boolean
        },

    },
    vegetables: {
        isTimelyControllingPests: {
            type: Boolean
        },
        isTimelyControllingDiseascs: {
            type: Boolean
        },
        isPheromoneWorked: {
            type: Boolean
        },
        isRegularlyMonitored: {
            type: Boolean
        },
        isBagUsed: {
            type: Boolean
        },
        colorBag: {
            type: String,
            enum:["White", "Brown"]
        },

    },
    mango: {
        isProperManagement: {
            type: Boolean
        },
        isBaggingUsed: {
            type: Boolean
        },
        isIPMUsed: {
            type: Boolean
        },
        daysBeforeBagging: {
            type: Number
        },
        isMeaserTake: {
            type: Boolean
        },
        isLodgedBurned: {
            type: Boolean
        },
        isRightAnthracnose: {
            type: Boolean
        },

    },
    betelLeaf: {
        isSalmonellaProtection: {
            type: Boolean
        },
        isChemicalOrganicUsed: {
            type: Boolean

        },
        isPreventingExcretion: {
            type: Boolean
        }
    }
});

const QuarantinePestDiseasesControl = model<IQuarantinePestDiseasesControl>("QuarantinePestDiseasesControl", quarantinePestDiseseControlSchema);
export default QuarantinePestDiseasesControl;