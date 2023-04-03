"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PersonalWorkerHygieneSchema = new mongoose_1.Schema({
    generalInformationID: { type: mongoose_1.Schema.Types.ObjectId, ref: "GenarelInformation" },
    fram: {
        isRestHouse: {
            type: Boolean, default: false,
            required: true
        },
        isToilet: {
            type: Boolean, default: false
        },
        isDistilledWater: {
            type: Boolean,
            default: false,
            required: true
        },
        isSoap: {
            type: Boolean,
            default: false,
            required: true
        },
        isMaterialRoom: {
            type: Boolean, default: false
        },
        isRoamingFree: {
            type: Boolean,
            default: false,
            required: true
        },
        isHygieneProduct: {
            type: Boolean,
            default: false,
            required: true
        },
        isMonitoring: {
            type: Boolean,
            default: false,
            required: true
        },
        isDressingRoom: {
            type: Boolean,
            default: false,
            required: true
        },
    },
    interculteralOperation: {
        isHygieneDressUsed: {
            type: Boolean,
            default: false,
            required: true
        },
        isStoredProperly: {
            type: Boolean,
            default: false,
            required: true
        },
        isRefreshed: {
            type: Boolean,
            default: false,
            required: true
        },
        isCleaned: {
            type: Boolean,
            default: false,
            required: true
        },
        pesticideApplied: String,
        isRightDirection: {
            type: Boolean,
            default: false,
            required: true
        },
        daysBeforeHarvest: {
            type: Number
        },
        isInformationTaken: {
            type: Boolean,
            default: false,
            required: true
        },
        isHandGlovesUsed: {
            type: Boolean,
            default: false,
            required: true
        },
        isHygienic: {
            type: Boolean,
            default: false,
            required: true
        },
        isPersonalHygiene: {
            type: Boolean,
            default: false,
            required: true
        },
        isAllHygiene: {
            type: Boolean,
            default: false,
            required: true
        },
        isAllPrincipleMaintained: {
            type: Boolean,
            default: false,
            required: true
        },
    },
    farmerAccounts: {
        leaseCost: {
            type: Number,
            default: 0
        },
        soilTestCost: {
            type: Number, default: 0
        },
        landPreparationCost: {
            type: Number, default: 0
        },
        seedCost: {
            type: Number, default: 0
        },
        fertilizerCost: {
            type: Number, default: 0
        },
        irrigationCost: {
            type: Number, default: 0
        },
        laborCost: {
            type: Number, default: 0
        },
        otherCost: {
            type: Number, default: 0
        },
        totalCost: {
            type: Number, default: 0
        },
        totalProduction: {
            type: Number, default: 0
        },
        totalSale: {
            type: Number, default: 0
        },
        totalProfit: {
            type: Number, default: 0
        },
    },
});
const PersonalWorkerHygieneModel = (0, mongoose_1.model)("PersonalWorkerHygiene", PersonalWorkerHygieneSchema);
exports.default = PersonalWorkerHygieneModel;
