import { Schema, model } from "mongoose";
import { IPersonalWokerHygiene } from "./personal_worker_hygiene_interface";

const PersonalWorkerHygieneSchema = new Schema<IPersonalWokerHygiene>({
    generalInformationID: { type: Schema.Types.ObjectId, ref: "GenarelInformation" },
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
            type:
                Boolean, default: false
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
        isDAE: {
            type: Boolean,
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
    }
});

const PersonalWorkerHygieneModel = model<IPersonalWokerHygiene>("PersonalWorkerHygiene", PersonalWorkerHygieneSchema);

export default PersonalWorkerHygieneModel;