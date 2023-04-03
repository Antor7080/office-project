import { Schema, model } from 'mongoose';
import IInterculturalOperation from './intercultural_operation_interface';

const InterculturalOperationSchema: Schema = new Schema<IInterculturalOperation>({
    generalInformationID: {
        type: Schema.Types.ObjectId,
        ref: 'GenarelInformation'
    },
    weedingIntercultural: {
        isCleaned: {
            type: Boolean
        },
        timelyWeeding: {
            type: Boolean
        },
        primarilyWeeded: {
            type: Boolean
        },
        productionLevelCleaned: {
            type: Boolean
        },
        purifingAgentUsed: {
            type: Boolean
        },
        treatedChemicalName: {
            type: String
        },

    },
    vegetable: {
        vegetableCultivation: {
            type: Boolean
        },
        mulchingPaperUsed: {
            type: Boolean
        },
        supportUsed: {
            type: Boolean
        },
        lightAndAir: {
            type: Boolean
        },
        animalProtection: {
            type: Boolean
        },
        isEggPlant: {
            type: Boolean
        },
        fenceUsed: {
            type: Boolean
        },
        wasteManagement: {
            type: Boolean
        },

    },
    mango: {
        deadStemRemoved: {
            type: Boolean
        },
        doesClean: {
            type: Boolean
        },
        hormoneUsed: {
            type: Boolean
        },
        mulchingPaperUsedMango: {
            type: Boolean
        },
        fenceUsedMango: {
            type: Boolean,
        },
        wasteManagementMango: {
            type: Boolean
        }

    },
    betelLeaf: {
        landShadowNotDamp: {
            type: Boolean
        },
        supportUsedBetel: {
            type: Boolean
        },
        animalProtectionBetel: {
            type: Boolean
        },
        prohibitedEntry: {
            type: Boolean
        },

    },

});

const InterculturalOperation = model<IInterculturalOperation>('InterculturalOperation', InterculturalOperationSchema);

export default InterculturalOperation;