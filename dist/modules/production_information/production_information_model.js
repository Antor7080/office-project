"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductionInformationSchema = new mongoose_1.Schema({
    generalInformationID: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    cropInformation: {
        varietyName: {
            type: String
        },
        varietyType: {
            type: String
        },
        usedInGourpLand: {
            type: Boolean
        },
    },
    raisingOfSeedlings: {
        raising: {
            type: String
        },
        seedsWereRaised: {
            type: String
        },
        isCowdungUsed: {
            type: Boolean
        },
        cowdungAmount: {
            type: Number
        },
        isVarmiCompostUsed: {
            type: Boolean
        },
        varmiCompostAmount: {
            type: Number
        },
        isCocodustUsed: {
            type: Boolean
        },
        cocodustAmount: {
            type: Number
        },
        isBiofertilizerUsed: {
            type: Boolean
        },
        biofertilizerAmount: {
            type: Number
        },
        isOtherUsed: {
            type: Boolean
        },
        otherAmount: {
            type: Number
        },
    },
    landPreparation: {
        plough: {
            type: String
        },
        isGroupPreapared: {
            type: Boolean
        },
    },
    showingTransplanting: {
        seedSource: {
            type: String
        },
        seedTreatment: {
            type: Boolean
        },
        fungicideName: {
            type: String
        },
        sowingType: {
            type: String,
            enum: ['Direcet Sowing', 'Seedling raised in seedbed']
        },
        plantDistance: {
            type: Number
        },
        rowDistance: {
            type: Number
        },
        gardenAge: {
            type: Number
        },
        plantedInGroup: {
            type: Boolean
        },
        dayDifference: {
            type: Number
        },
    },
    selectionCropWeeding: {
        cropName: {
            type: String
        },
        isWeedingPoperTime: {
            type: Boolean
        },
        firstWeedingDate: {
            type: Date
        },
        sceondWeedingDate: {
            type: Date
        },
        thirdWeedingDate: {
            type: Date
        },
        nextWeedingDate: {
            type: Date
        },
    }
});
const ProductionInformationModel = (0, mongoose_1.model)('ProductionInformation', ProductionInformationSchema);
exports.default = ProductionInformationModel;
