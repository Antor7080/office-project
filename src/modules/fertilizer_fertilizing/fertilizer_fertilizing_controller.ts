import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors";
import { notFound, unProcessable } from "../../helpers/responseHandler";
import { createFertilizerFertilizing, findOneQuery } from "./fertilizer_fertilizing_services";


/**
 * 
 * @objective Add Fertilizer Fertilizing
 * @endpoint /api/v1/fertilizer-fertilizing/add
 * @method POST
 * @reqbody {
    "generalInformationID" : "642a675e39088961109a93b6",
    "landPreparationFertilizer" : {
         "fertilizingTime": "Morning",
    "isFertilizerUsed": true,
    "fertilizerType": ["Chemical", "Organic", "Bio fertilizer"]
    },
    "fertilizerNameQuantity" : {
        "isUreaUsed": true,
        "ureaQuantity": 500,
        "isPotashUsed": true,
        "potashQuantity": 500,
        "isOrganicUsed": true,
        "organicQuantity": 300,
        "isCowDungUsed": true,
        "cowDungQuantity": 200,
        "isPhosphorusUsed": true,
        "phosphorusQuantity": 90,
        "isOtherUsed": true,
        "otherQuantity": 100
    },
    "fertilizerNamePlant" : {
        "appliedFertilizer": ["Urea", "Potash", "Phosphorus", "Zinc"]
    },
    "totalNumberOfFertilizer": {
        "vegetable": 1000,
        "mango": 200,
        "betelLeaf": 200
    },
    "timeOfFertilizerApplicationQuantity" : {
        "urea1": 100,
        "urea2": 100,
        "urea3": 100,
        "phosphorus1": 100,
        "phosphorus2": 100,
        "phosphorus3": 100,
        "potash1": 12,
        "potash2": 12,
        "potash3": 12,
        "zinc1": 123,
        "zinc2": 123,
        "zinc3": 123,
        "other1": 21,
        "other2": 21,
        "other3": 21,
        "organicUsedBefor": 123,
        "betelLeafOrganic": "Cow dung",
        "cowDungType": "Wet",
        "fertilizerStored": true,
        "fertilizerCollected": "Dealer",
        "isSuggestionsTaken": true
    }
}
 * @response {
    "success": true,
    "code": 201,
    "data": {
        "generalInformationID": "642a675e39088961109a93b6",
        "landPreparationFertilizer": {
            "fertilizingTime": "Morning",
            "isFertilizerUsed": true,
            "fertilizerType": [
                "Chemical",
                "Organic",
                "Bio fertilizer"
            ]
        },
        "fertilizerNameQuantity": {
            "isUreaUsed": true,
            "ureaQuantity": 500,
            "isPotashUsed": true,
            "potashQuantity": 500,
            "isOrganicUsed": true,
            "organicQuantity": 300,
            "isCowDungUsed": true,
            "cowDungQuantity": 200,
            "isPhosphorusUsed": true,
            "phosphorusQuantity": 90,
            "isOtherUsed": true,
            "otherQuantity": 100
        },
        "fertilizerNamePlant": {
            "appliedFertilizer": [
                "Urea",
                "Potash",
                "Phosphorus",
                "Zinc"
            ]
        },
        "totalNumberOfFertilizer": {
            "vegetable": 1000,
            "mango": 200,
            "betelLeaf": 200
        },
        "timeOfFertilizerApplicationQuantity": {
            "urea1": 100,
            "urea2": 100,
            "urea3": 100,
            "phosphorus1": 100,
            "phosphorus2": 100,
            "phosphorus3": 100,
            "potash1": 12,
            "potash2": 12,
            "potash3": 12,
            "zinc1": 123,
            "zinc2": 123,
            "zinc3": 123,
            "other1": 21,
            "other2": 21,
            "other3": 21,
            "organicUsedBefor": 123,
            "betelLeafOrganic": "Cow dung",
            "cowDungType": "Wet",
            "fertilizerStored": true,
            "fertilizerCollected": "Dealer",
            "isSuggestionsTaken": true
        },
        "_id": "642a6805b9eae19acfec1e15",
        "__v": 0
    },
    "message": "Fertilizer Fertilizing Added Successfully"
}
 * @description Add Fertilizer Fertilizing 
 * 
 */
export const addFertilizerFertilizing = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.body.generalInformationID;
        const isExsist = await findOneQuery({ generalInformationID });
        if (isExsist) {
            throw new ApiError(unProcessable(), 'Fertilizer Fertilizing Already Exsist')
        }
        const fertilizerFertilizing = await createFertilizerFertilizing(req.body);
        res.created(fertilizerFertilizing, 'Fertilizer Fertilizing Added Successfully')
    } catch (error) {
        next(error)
    }
};

/** 
 * 
 * @objective Get Fertilizer Fertilizing
 * @endpoint /api/v1/fertilizer-fertilizing/get/:id
 * @method GET
 * @response {
    "success": true,
    "code": 200,
    "data": {
        "landPreparationFertilizer": {
            "fertilizingTime": "Morning",
            "isFertilizerUsed": true,
            "fertilizerType": [
                "Chemical",
                "Organic",
                "Bio fertilizer"
            ]
        },
        "fertilizerNameQuantity": {
            "isUreaUsed": true,
            "ureaQuantity": 500,
            "isPotashUsed": true,
            "potashQuantity": 500,
            "isOrganicUsed": true,
            "organicQuantity": 300,
            "isCowDungUsed": true,
            "cowDungQuantity": 200,
            "isPhosphorusUsed": true,
            "phosphorusQuantity": 90,
            "isOtherUsed": true,
            "otherQuantity": 100
        },
        "fertilizerNamePlant": {
            "appliedFertilizer": [
                "Urea",
                "Potash",
                "Phosphorus",
                "Zinc"
            ]
        },
        "totalNumberOfFertilizer": {
            "vegetable": 1000,
            "mango": 200,
            "betelLeaf": 200
        },
        "timeOfFertilizerApplicationQuantity": {
            "urea1": 100,
            "urea2": 100,
            "urea3": 100,
            "phosphorus1": 100,
            "phosphorus2": 100,
            "phosphorus3": 100,
            "potash1": 12,
            "potash2": 12,
            "potash3": 12,
            "zinc1": 123,
            "zinc2": 123,
            "zinc3": 123,
            "other1": 21,
            "other2": 21,
            "other3": 21,
            "organicUsedBefor": 123,
            "betelLeafOrganic": "Cow dung",
            "cowDungType": "Wet",
            "fertilizerStored": true,
            "fertilizerCollected": "Dealer",
            "isSuggestionsTaken": true
        },
        "_id": "642a6805b9eae19acfec1e15",
        "generalInformationID": "642a675e39088961109a93b6",
        "__v": 0
    },
    "message": "Fertilizer Fertilizing Get Successfully"
}
 * @description Get Fertilizer Fertilizing
 * 
*/

export const getFertilizerFertilizing = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const fertilizerFertilizing = await findOneQuery({ _id: id });
        if (!fertilizerFertilizing) {
            throw new ApiError(notFound(), 'Fertilizer Fertilizing Not Found')
        }
        res.ok(fertilizerFertilizing, 'Fertilizer Fertilizing Get Successfully')
    } catch (error) {
        next(error)
    }
};

/**
 * 
 * @objective Get Fertilizer Fertilizing By General Information ID
 * @endpoint /api/v1/fertilizer-fertilizing/get/general-information/:id
 * @method GET
 * @response {
    "success": true,
    "code": 200,
    "data": {
        "landPreparationFertilizer": {
            "fertilizingTime": "Morning",
            "isFertilizerUsed": true,
            "fertilizerType": [
                "Chemical",
                "Organic",
                "Bio fertilizer"
            ]
        },
        "fertilizerNameQuantity": {
            "isUreaUsed": true,
            "ureaQuantity": 500,
            "isPotashUsed": true,
            "potashQuantity": 500,
            "isOrganicUsed": true,
            "organicQuantity": 300,
            "isCowDungUsed": true,
            "cowDungQuantity": 200,
            "isPhosphorusUsed": true,
            "phosphorusQuantity": 90,
            "isOtherUsed": true,
            "otherQuantity": 100
        },
        "fertilizerNamePlant": {
            "appliedFertilizer": [
                "Urea",
                "Potash",
                "Phosphorus",
                "Zinc"
            ]
        },
        "totalNumberOfFertilizer": {
            "vegetable": 1000,
            "mango": 200,
            "betelLeaf": 200
        },
        "timeOfFertilizerApplicationQuantity": {
            "urea1": 100,
            "urea2": 100,
            "urea3": 100,
            "phosphorus1": 100,
            "phosphorus2": 100,
            "phosphorus3": 100,
            "potash1": 12,
            "potash2": 12,
            "potash3": 12,
            "zinc1": 123,
            "zinc2": 123,
            "zinc3": 123,
            "other1": 21,
            "other2": 21,
            "other3": 21,
            "organicUsedBefor": 123,
            "betelLeafOrganic": "Cow dung",
            "cowDungType": "Wet",
            "fertilizerStored": true,
            "fertilizerCollected": "Dealer",
            "isSuggestionsTaken": true
        },
        "_id": "642a6805b9eae19acfec1e15",
        "generalInformationID": "642a675e39088961109a93b6",
        "__v": 0
    },
    "message": "Fertilizer Fertilizing Get Successfully"
}
    * @description Get Fertilizer Fertilizing By General Information ID
 */
export const getFertilizerFertilizingByGeneralInformationID = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const fertilizerFertilizing = await findOneQuery({ generalInformationID: id });
        if (!fertilizerFertilizing) {
            throw new ApiError(notFound(), 'Fertilizer Fertilizing Not Found')
        };
        res.ok(fertilizerFertilizing, 'Fertilizer Fertilizing Get Successfully')
    } catch (error) {
        next(error)
    }
};