"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const quarantinePestDiseseControlSchema = new mongoose_1.Schema({
    generalInformationID: {
        type: mongoose_1.Schema.Types.ObjectId,
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
            type: [String]
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
            type: [mongoose_1.Schema.Types.Mixed]
        },
        mangoOrganicPesticide: {
            type: [mongoose_1.Schema.Types.Mixed]
        },
        betelLeafOrganicPesticide: {
            type: [mongoose_1.Schema.Types.Mixed]
        },
        otherOrganicPesticde: {
            type: [mongoose_1.Schema.Types.Mixed]
        },
    },
    chemicalPesticide: {
        vegetableChemicalPesticide: {
            type: [mongoose_1.Schema.Types.Mixed]
        },
        mangoChemicalPesticide: {
            type: [mongoose_1.Schema.Types.Mixed]
        },
        betelLeafChemicalPesticide: {
            type: [mongoose_1.Schema.Types.Mixed]
        },
        otherChemicalPesticide: {
            type: [mongoose_1.Schema.Types.Mixed]
        },
    },
    fungicideBactericide: {
        vegetableFungicideBactericide: {
            type: [mongoose_1.Schema.Types.Mixed]
        },
        mangoFungicideBactericide: {
            type: [mongoose_1.Schema.Types.Mixed]
        },
        betelLeafFungicideBactericide: {
            type: [mongoose_1.Schema.Types.Mixed]
        },
        otherFungicideBactericide: {
            type: [mongoose_1.Schema.Types.Mixed]
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
            type: String
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
            type: String
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
const QuarantinePestDiseasesControl = (0, mongoose_1.model)("QuarantinePestDiseasesControl", quarantinePestDiseseControlSchema);
exports.default = QuarantinePestDiseasesControl;
