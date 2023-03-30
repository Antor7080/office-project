import { Schema, model } from "mongoose";
import { IFertilizerFertilizing } from "./fertilizer_fertilizing_interface";

const FertilizerFertilizingSchema = new Schema<IFertilizerFertilizing>({
    generalInformationID: {
        type: Schema.Types.ObjectId,
    },
    landPreparationFertilizer: {
        fertilizingTime: {
            type: String,
            enum: ["Morning", "Evening", "Afternoon"]
        },
        isFertilizerUsed: {
            type: Boolean
        },
        fertilizerType: {
            type: [String],
            enum: ["Chemical", "Organic", "Bio fertilizer"]
        }
    },
    fertilizerNameQuantity: {
        isUreaUsed: {
            type: Boolean
        },
        ureaQuantity: {
            type: Number
        },
        isPotashUsed: {
            type: Boolean
        },

        potashQuantity: {
            type: Number
        },
        isOrganicUsed: {
            type: Boolean
        },
        organicQuantity: {
            type: Number
        },
        isCowDungUsed: {
            type: Boolean
        },
        cowDungQuantity: {
            type: Number
        },
        isPhosphorusUsed: {
            type: Boolean
        },
        phosphorusQuantity: {
            type: Number
        },
        isOtherUsed: {
            type: Boolean
        },
        otherQuantity: {
            type: Number
        }
    },
    fertilizerNamePlant: {
        appliedFertilizer: {
            type: [String],
            enum: ["Urea", "Potash", "Phosphorus", "Zinc", "Other"]
        },

    },
    totalNumberOfFertilizer: {
        vegetable: {
            type: Number
        },
        mango: {
            type: Number
        },
        betelLeaf: {
            type: Number
        }
    },
    timeOfFertilizerApplicationQuantity: {
        urea1: {
            type: Number
        },
        urea2: {
            type: Number
        },
        urea3: {
            type: Number
        },
        phosphorus1: {
            type: Number
        },
        phosphorus2: {
            type: Number
        },
        phosphorus3: {
            type: Number
        },
        potash1: {
            type: Number
        },
        potash2: {
            type: Number
        },
        potash3: {
            type: Number
        },
        zinc1: {
            type: Number
        },
        zinc2: {
            type: Number
        },
        zinc3: {
            type: Number
        },
        other1: {
            type: Number
        },
        other2: {
            type: Number
        },
        other3: {
            type: Number
        },
        organicUsedBefor: {
            type: Number
        },
        betelLeafOrganic: {
            type: String,
            enum : ["Cow dung", "Mustard Oil Cake"]
        },
        cowDungType: {
            type: String,
            enum: ["Wet", "Dry"]
        },
        fertilizerStored: {
            type: Boolean
        },
        fertilizerCollected: {
            type: String,
        },
        isSuggestionsTaken: {
            type: Boolean
        }
    },
});

const FertilizerFertilizingModel = model<IFertilizerFertilizing>("FertilizerFertilizing", FertilizerFertilizingSchema);

export default FertilizerFertilizingModel;