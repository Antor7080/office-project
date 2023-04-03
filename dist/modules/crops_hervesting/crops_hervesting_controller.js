"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneByGeneralInformationId = exports.getOneById = exports.addCropsHarvestingController = void 0;
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const crops_hervesting_service_1 = require("./crops_hervesting_service");
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
const addCropsHarvestingController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const generalInformationID = body.generalInformationID;
        const isExist = yield (0, crops_hervesting_service_1.findOneCropsHarvesting)({ generalInformationID });
        if (isExist) {
            const error = new errors_1.ApiError((0, responseHandler_1.unProcessable)(), 'Crops Harvesting is already exist');
            return next(error);
        }
        const newCropsHarvesting = yield (0, crops_hervesting_service_1.addCropsHarvestingService)(body);
        res.created(newCropsHarvesting, 'Crops Harvesting added successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.addCropsHarvestingController = addCropsHarvestingController;
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
const getOneById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params } = req;
        const { id } = params;
        const cropsHarvesting = yield (0, crops_hervesting_service_1.findOneCropsHarvesting)({ _id: id });
        if (!cropsHarvesting) {
            const error = new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Crops Harvesting not found');
            return next(error);
        }
        res.ok(cropsHarvesting, 'Crops Harvesting found successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.getOneById = getOneById;
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
const getOneByGeneralInformationId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params } = req;
        const { id } = params;
        const cropsHarvesting = yield (0, crops_hervesting_service_1.findOneCropsHarvesting)({ generalInformationID: id });
        if (!cropsHarvesting) {
            const error = new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Crops Harvesting not found');
            return next(error);
        }
        res.ok(cropsHarvesting, 'Crops Harvesting found successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.getOneByGeneralInformationId = getOneByGeneralInformationId;
