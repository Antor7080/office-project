
import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../errors';
import { notFound, unProcessable } from '../../helpers/responseHandler';
import { addCropsHarvestingService, findOneCropsHarvesting } from './crops_hervesting_service';

/** 
 * @objective Add Crops Harvesting
 * @endPoint /api/crops-harvesting/add
 * @method POST
 * @reqBody {
    "generalInformationID": "641a968de9fa2fd5a92053c3",
    "fieldSanitation": {
        "isFollowingStepTaken": true,
        "isIdentificationSource": true,
        "isPoperSanitation": false,
        "isToiletFacility": true
    },
    "harvestField": {
        "isMRLtest": true,
        "insecticideLevel": 200,
        "maturityIndexUsed": true,
        "isContainerHygienic": false,
        "cropHarvestedTime": "Morning",
        "materials": " ",
        "inContainerOnSoilLevel": true,
        "DAEliaison": true,
        "primarilyStord": "Sunny",
        "primaryGrading": true,
        "isGlovesApronUsed": false
    },
    "vegetables": {
        "isKnifeUsed": true,
        "isHygienicToolUsed": false,
        "isInjuryProtection": true
    },
    "mango": {
        "isToolsUsed": false,
        "isLatexSecrete": false,
        "isArrangedInContainer": true,
        "isKeepSeparately": false
    },
    "betelLeaf": {
        "isMaximumHygienic": true,
        "isBacteriaFree": false,
        "isDirectlyPut": true,
        "isDistilledWaterApplied": true,
        "isCautionTaken": true
    },
    "localCollectionCenter": {
        "isLocalCollectionCenter": true,
        "isCropBroughtLCC": false,
        "isPreCoolingSystem": true,
        "isHygienicTransporting": false,
        "transportation": "Cover",
        "isSeconddaryGrading": false,
        "isAirConditioned": true,
        "hour": 1,
        "minutes": 59
    }
};
* @resBody {
    "success": true,
    "code": 201,
    "data": {
        "generalInformationID": "642a675e39088961109a93b6",
        "fieldSanitation": {
            "isFollowingStepTaken": true,
            "isIdentificationSource": true,
            "isPoperSanitation": false,
            "isToiletFacility": true
        },
        "harvestField": {
            "isMRLtest": true,
            "insecticideLevel": 200,
            "maturityIndexUsed": true,
            "isContainerHygienic": false,
            "cropHarvestedTime": "Morning",
            "materials": " ",
            "inContainerOnSoilLevel": true,
            "DAEliaison": true,
            "primarilyStord": "Sunny",
            "primaryGrading": true,
            "isGlovesApronUsed": false
        },
        "vegetables": {
            "isKnifeUsed": true,
            "isHygienicToolUsed": false,
            "isInjuryProtection": true
        },
        "mango": {
            "isToolsUsed": false,
            "isLatexSecrete": false,
            "isArrangedInContainer": true,
            "isKeepSeparately": false
        },
        "betelLeaf": {
            "isMaximumHygienic": true,
            "isBacteriaFree": false,
            "isDirectlyPut": true,
            "isDistilledWaterApplied": true,
            "isCautionTaken": true
        },
        "localCollectionCenter": {
            "isLocalCollectionCenter": true,
            "isCropBroughtLCC": false,
            "isPreCoolingSystem": true,
            "isHygienicTransporting": false,
            "transportation": "Cover",
            "isSeconddaryGrading": false,
            "isAirConditioned": true,
            "hour": 1,
            "minutes": 59
        },
        "_id": "642a67b667e01c2efbc86d1a",
        "__v": 0
    },
    "message": "Crops Harvesting added successfully"
}
 */
export const addCropsHarvestingController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { body } = req;
        const generalInformationID: string = body.generalInformationID;
        const isExist = await findOneCropsHarvesting({ generalInformationID });
        if (isExist) {
            const error = new ApiError(unProcessable(), 'Crops Harvesting is already exist');
            return next(error);
        }
        const newCropsHarvesting = await addCropsHarvestingService(body);
        res.created(newCropsHarvesting, 'Crops Harvesting added successfully');
    } catch (error) {
        next(error);
    }
};

/** 
 * @objective Get One Crops Harvesting
 * @endPoint /api/crops-harvesting/get/:id
 * @method GET
 * @reqParam id
 * @resBody {
    "success": true,
    "code": 200,
    "data": {
        "fieldSanitation": {
            "isFollowingStepTaken": true,
            "isIdentificationSource": true,
            "isPoperSanitation": false,
            "isToiletFacility": true
        },
        "harvestField": {
            "isMRLtest": true,
            "insecticideLevel": 200,
            "maturityIndexUsed": true,
            "isContainerHygienic": false,
            "cropHarvestedTime": "Morning",
            "materials": " ",
            "inContainerOnSoilLevel": true,
            "DAEliaison": true,
            "primarilyStord": "Sunny",
            "primaryGrading": true,
            "isGlovesApronUsed": false
        },
        "vegetables": {
            "isKnifeUsed": true,
            "isHygienicToolUsed": false,
            "isInjuryProtection": true
        },
        "mango": {
            "isToolsUsed": false,
            "isLatexSecrete": false,
            "isArrangedInContainer": true,
            "isKeepSeparately": false
        },
        "betelLeaf": {
            "isMaximumHygienic": true,
            "isBacteriaFree": false,
            "isDirectlyPut": true,
            "isDistilledWaterApplied": true,
            "isCautionTaken": true
        },
        "localCollectionCenter": {
            "isLocalCollectionCenter": true,
            "isCropBroughtLCC": false,
            "isPreCoolingSystem": true,
            "isHygienicTransporting": false,
            "transportation": "Cover",
            "isSeconddaryGrading": false,
            "isAirConditioned": true,
            "hour": 1,
            "minutes": 59
        },
        "_id": "642922c55a9b316c9ecad5ad",
        "generalInformationID": "641a968de9fa2fd5a92053c3",
        "__v": 0
    },
    "message": "Crops Harvesting found successfully"
}
 */
export const getOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { params } = req;
        const { id } = params;
        const cropsHarvesting = await findOneCropsHarvesting({ _id: id });
        if (!cropsHarvesting) {
            const error = new ApiError(notFound(), 'Crops Harvesting not found');
            return next(error);
        }
        res.ok(cropsHarvesting, 'Crops Harvesting found successfully');
    } catch (error) {
        next(error);
    }
};

/** 
 * @objective get one Crops Harvesting by generalInformationID
 * @endPoint /api/crops-harvesting/get-by-general-information-id/:id
 * @method GET
 * @reqParam id
 * @resBody {
    "success": true,
    "code": 200,
    "data": {
        "fieldSanitation": {
            "isFollowingStepTaken": true,
            "isIdentificationSource": true,
            "isPoperSanitation": false,
            "isToiletFacility": true
        },
        "harvestField": {
            "isMRLtest": true,
            "insecticideLevel": 200,
            "maturityIndexUsed": true,
            "isContainerHygienic": false,
            "cropHarvestedTime": "Morning",
            "materials": " ",
            "inContainerOnSoilLevel": true,
            "DAEliaison": true,
            "primarilyStord": "Sunny",
            "primaryGrading": true,
            "isGlovesApronUsed": false
        },
        "vegetables": {
            "isKnifeUsed": true,
            "isHygienicToolUsed": false,
            "isInjuryProtection": true
        },
        "mango": {
            "isToolsUsed": false,
            "isLatexSecrete": false,
            "isArrangedInContainer": true,
            "isKeepSeparately": false
        },
        "betelLeaf": {
            "isMaximumHygienic": true,
            "isBacteriaFree": false,
            "isDirectlyPut": true,
            "isDistilledWaterApplied": true,
            "isCautionTaken": true
        },
        "localCollectionCenter": {
            "isLocalCollectionCenter": true,
            "isCropBroughtLCC": false,
            "isPreCoolingSystem": true,
            "isHygienicTransporting": false,
            "transportation": "Cover",
            "isSeconddaryGrading": false,
            "isAirConditioned": true,
            "hour": 1,
            "minutes": 59
        },
        "_id": "642922c55a9b316c9ecad5ad",
        "generalInformationID": "641a968de9fa2fd5a92053c3",
        "__v": 0
    },
    "message": "Crops Harvesting found successfully"
}
*/
export const getOneByGeneralInformationId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { params } = req;
        const { id } = params;
        const cropsHarvesting = await findOneCropsHarvesting({ generalInformationID: id });
        if (!cropsHarvesting) {
            const error = new ApiError(notFound(), 'Crops Harvesting not found');
            return next(error);
        }
        res.ok(cropsHarvesting, 'Crops Harvesting found successfully');
    } catch (error) {
        next(error);
    }
};