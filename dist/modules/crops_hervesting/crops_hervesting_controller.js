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
    "generalInformationID": "641a968de9fa2fd5a92053c3"
    "fieldSanitation": {...};
    "harvestField": {...};
    "vegetables": {...};
    "mango": {...};
    "betelLeaf": {...};
    "localCollectionCenter": {...};
};
* @resBody {
     "generalInformationID": "641a968de9fa2fd5a92053c3"
    "fieldSanitation": {...};
    "harvestField": {...};
    "vegetables": {...};
    "mango": {...};
    "betelLeaf": {...};
    "localCollectionCenter": {...};
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
  "generalInformationID": "641a968de9fa2fd5a92053c3"
    "fieldSanitation": {...};
    "harvestField": {...};
    "vegetables": {...};
    "mango": {...};
    "betelLeaf": {...};
    "localCollectionCenter": {...};}

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
 *
  "generalInformationID": "641a968de9fa2fd5a92053c3"
    "fieldSanitation": {...};
    "harvestField": {...};
    "vegetables": {...};
    "mango": {...};
    "betelLeaf": {...};
    "localCollectionCenter": {...};
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
