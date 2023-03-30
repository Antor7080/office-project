import { Schema, model, } from "mongoose";
import { IGenarelInformation } from "./genarel_information_interface";

const genarelInformationSchema: Schema = new Schema<IGenarelInformation>({
    framLocationAndCode: {
        groupCodeNo: {
            type: Number || String
        },
        farmCode: {
            type: Number || String
        },
        mouja: {
            type: String
        },
        village: {
            type: String
        },
        union: {
            type: String
        },
        upzilla: {
            type: String
        },
        district: {
            type: String
        },
    },
    farmingSystem: {
        system: {
            type: String,
            enum: ["Single", "Coorperative"]
        },
        totalFarmers: {
            type: Number
        },
        leaderName: {
            type: String
        },
        groupTotalLand: {
            type: Number
        }
    },

    FarmerInformation: {
        farmerName: {
            type: String
        },
        framProfileCode: {
            type: Number
        },
        farmerVillage: {
            type: String
        },
        farmerUpzilla: {
            type: String,
        },
        farmerUnion: {
            type: String
        },
        farmerDistrict: {
            type: String
        }
    },

    farmerType: {
        type: {
            type: String,
            enum: ['Small', 'Medium', 'Large']
        },
        ownedLand: {
            type: Number
        },
        lease: {
            type: Number,
        },
        totalLand: {
            type: Number
        }
    },
    siteSelection: {
        info1: {
            type: Boolean,
            enum: [true, false]
        },
        info2: {
            type: Boolean,
            enum: [true, false]
        },
        info3: {
            type: Boolean,
            enum: [true, false]
        },
        info4: {
            type: Boolean,
            enum: [true, false]
        },
        info5: {
            type: Boolean,
            enum: [true, false]
        },
        info6: {
            type: Boolean,
            enum: [true, false]
        },
        info7: {
            type: Boolean,
            enum: [true, false]
        },
        info8: {
            type: Boolean,
            enum: [true, false]
        },

        sourceOfWater: [{
            type: [String],
            enum: ['River', 'Pond', 'Rain', 'Ground']
        }],
        info9: {
            type: Boolean,
            enum: [true, false]
        },

    },
    contratedLandCropInfo: {
        cantractLand: {
            type: Number
        },
        productionMethod: {
            type: String,
            enum: ['Open Field', 'Net House']
        },
        vegetables: {
            type: [String]
        }
    },
    soilType: {
        soilName: {
            type: String,
            enum: ["Sand", "Loamy", "Clay"]
        },
        soilPH: {
            type: Number
        },
        croppedType: {
            type: String,
            enum: ['Single', 'Double', 'Triple']
        },
        previousCrop: {
            type: String
        },
        cultivationType: {
            type: String,
            enum: ['Traditional', 'Modern']
        },
        AEZ: {
            type: Number,
        }
    }
});


const GenarelInformation = model<IGenarelInformation>('GenarelInformation', genarelInformationSchema);
export default GenarelInformation