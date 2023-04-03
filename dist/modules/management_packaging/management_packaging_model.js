"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ManagementPackagingSchema = new mongoose_1.Schema({
    generalInformationID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "GenarelInformation"
    },
    centerPackaging: {
        transportationType: {
            type: String, required: true,
            enum: ["Normal", "Refrigerated"]
        },
        isInspection: {
            type: Boolean, required: true
        },
        isWashingRoom: {
            type: Boolean, required: true
        },
        isDryByFan: {
            type: Boolean, required: true
        },
        isFinalFacilites: {
            type: Boolean, required: true
        },
        isTamperatureControl: {
            type: Boolean, required: true
        },
        isBacterialContainment: {
            type: Boolean, required: true
        },
        isHygienicPractices: {
            type: Boolean, required: true
        },
        isHygienicIsolatedRoom: {
            type: Boolean, required: true
        },
        isHygienicArrivalExit: { type: Boolean, required: true }
    },
    temperatureControl: {
        isAppropriateTemperature: {
            type: Boolean, required: true
        },
        vegetables: {
            type: Number, required: true
        },
        betelLeaf: {
            type: Number, required: true
        },
        mango: { type: Number, required: true }
    },
    vegetables: {
        isCleaningMethod: {
            type: Boolean, required: true
        },
        isColdWaterTreatment: {
            type: Boolean, required: true
        },
        isChlorineted: { type: Boolean, required: true }
    },
    betelLeaf: {
        isCleaningMethod: {
            type: Boolean, required: true
        },
        isChlorineted: {
            type: Boolean, required: true
        },
        washedWith: {
            type: String, required: true
        },
        treatedTime: {
            type: Number, required: true
        },
        isWashDistilledWater: {
            type: Boolean, required: true
        },
        isDryUnderFan: { type: Boolean, required: true }
    },
    mango: {
        isBagging: {
            type: Boolean, required: true
        },
        baggingType: {
            type: String, required: true,
            enum: ["White", "Brown"]
        },
        isBoiledWaterCleaning: {
            type: Boolean, required: true
        },
        treatedTemperature: {
            type: Number, required: true
        },
        isDryUnderFan: { type: Boolean, required: true }
    },
    inspection: {
        isInspectionByOfficer: {
            type: Boolean, required: true
        },
        isNoInsect: {
            type: Boolean, required: true
        },
        isCertified: {
            type: Boolean, required: true
        },
        certificateDate: { type: Date, required: true }
    },
    finalPackaging: {
        packagingType: {
            type: String, required: true
        },
        consumerDemandPackaging: {
            type: Boolean, required: true
        },
        isMicrobialTest: {
            type: Boolean, required: true
        },
        packagingMaterial: {
            type: String, required: true,
            enum: ["New", "Old"]
        },
        isPaperWrapped: {
            type: Boolean, required: true
        },
        isVentilation: {
            type: Boolean, required: true
        },
        isDryIceUsed: {
            type: Boolean, required: true
        },
        isDistilledMade: {
            type: Boolean, required: true
        },
        storedTime: {
            type: Number, required: true
        },
        vanType: {
            type: String, required: true,
            enum: ["Normal", "Refrigerated"]
        },
        routeType: {
            type: String, required: true,
            enum: ["Air", "Sea"]
        },
        isTemperatureControlRoom: {
            type: Boolean
        },
        isPhytoSanitaryCertificate: {
            type: Boolean, required: true
        },
        isLebeling: {
            type: Boolean, required: true
        },
        exportedCountry: {
            type: String, required: true
        },
        exporterName: {
            type: String, required: true
        },
        exportedDate: {
            type: String || Date, required: true
        },
        importerName: {
            type: String, required: true
        },
        isRejected: {
            type: Boolean, required: true
        },
        rejectedReason: {
            type: String,
            enum: ["Misclear", "Insects", "Diseases"]
        },
    }
});
exports.default = (0, mongoose_1.model)("ManagementPackaging", ManagementPackagingSchema);
