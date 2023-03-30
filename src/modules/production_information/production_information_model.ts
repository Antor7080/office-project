import { Schema, model } from 'mongoose';
import IproductionInformation from './production_information_interface';

const ProductionInformationSchema = new Schema<IproductionInformation>({
    generalInformationID: {

        type: Schema.Types.ObjectId,
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

const ProductionInformationModel = model<IproductionInformation>('ProductionInformation', ProductionInformationSchema);

export default ProductionInformationModel;