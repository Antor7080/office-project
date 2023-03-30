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
exports.getProductionInformation = exports.addProductionInformation = void 0;
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const production_information_service_1 = require("./production_information_service");
/**
 *
    * @objective Add Production Information
    * @endpoint /api/production-information/add
    * @method POST
    * @reqbody {
     "generalInformationID": "641a968de9fa2fd5a92053c3",
    "cropInformation": {
        "varietyName": "string",
        "varietyType": "string",
        "usedInGourpLand": true
    },
    "raisingOfSeedlings": {
        "raising": "string",
        "seedsWereRaised": "string",
        "isCowdungUsed": true,
        "cowdungAmount": 10,
        "isVarmiCompostUsed": true,
        "varmiCompostAmount": 10,
        "isCocodustUsed": true,
        "cocodustAmount": 10,
        "isBiofertilizerUsed": true,
        "biofertilizerAmount": 10,
        "isOtherUsed": true,
        "otherAmount": 10
    },
    "landPreparation": {
        "plough": "string",
        "isGroupPreapared": true
    },
    "showingTransplanting": {
        "seedSource": "string",
        "seedTreatment": true,
        "fungicideName": "string",
        "sowingType": "string",
        "plantDistance": 10,
        "rowDistance": 10,
        "gardenAge": 10,
        "plantedInGroup": true,
        "dayDifference": 10
    },
    "selectionCropWeeding": {
        "cropName": "string",
        "isWeedingPoperTime": true,
        "firstWeedingDate": "2022-03-25",
        "sceondWeedingDate": "2022-03-25",
        "thirdWeedingDate": "2022-03-25",
        "nextWeedingDate": "2022-03-25"
    }
}
    * @res {
    "success": true,
    "message": "Production Information Added Successfully",
    "data": {
     "generalInformationID": "641a968de9fa2fd5a92053c3",
    "cropInformation": {
        "varietyName": "string",
        "varietyType": "string",
        "usedInGourpLand": true
    },
    "raisingOfSeedlings": {
        "raising": "string",
        "seedsWereRaised": "string",
        "isCowdungUsed": true,
        "cowdungAmount": 10,
        "isVarmiCompostUsed": true,
        "varmiCompostAmount": 10,
        "isCocodustUsed": true,
        "cocodustAmount": 10,
        "isBiofertilizerUsed": true,
        "biofertilizerAmount": 10,
        "isOtherUsed": true,
        "otherAmount": 10
    },
    "landPreparation": {
        "plough": "string",
        "isGroupPreapared": true
    },
    "showingTransplanting": {
        "seedSource": "string",
        "seedTreatment": true,
        "fungicideName": "string",
        "sowingType": "string",
        "plantDistance": 10,
        "rowDistance": 10,
        "gardenAge": 10,
        "plantedInGroup": true,
        "dayDifference": 10
    },
    "selectionCropWeeding": {
        "cropName": "string",
        "isWeedingPoperTime": true,
        "firstWeedingDate": "2022-03-25",
        "sceondWeedingDate": "2022-03-25",
        "thirdWeedingDate": "2022-03-25",
        "nextWeedingDate": "2022-03-25"
    }
}
    }
 */
const addProductionInformation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generalInformationID = req.body.generalInformationID;
        if (!generalInformationID) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), 'General Information ID is Required');
        }
        const isProductionInformationExist = yield (0, production_information_service_1.getProductionInformationByGeneralInformationID)(generalInformationID);
        if (isProductionInformationExist) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), 'Production Information Already Exist');
        }
        const newProductionInformation = yield (0, production_information_service_1.addProductionInformationService)(req.body);
        res.created(newProductionInformation, 'Production Information Added Successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.addProductionInformation = addProductionInformation;
/**
 * @objective Get Production Information By General Information ID
 * @endpoint /api/production-information/:id
 * @method GET
 * @reqparam id
 * @res {
 * "success": true,
 * "message": "Production Information Get Successfully",
 * "data": {
     "generalInformationID": "641a968de9fa2fd5a92053c3",
    "cropInformation": {
        "varietyName": "string",
        "varietyType": "string",
        "usedInGourpLand": true
    },
    "raisingOfSeedlings": {
        "raising": "string",
        "seedsWereRaised": "string",
        "isCowdungUsed": true,
        "cowdungAmount": 10,
        "isVarmiCompostUsed": true,
        "varmiCompostAmount": 10,
        "isCocodustUsed": true,
        "cocodustAmount": 10,
        "isBiofertilizerUsed": true,
        "biofertilizerAmount": 10,
        "isOtherUsed": true,
        "otherAmount": 10
    },
    "landPreparation": {
        "plough": "string",
        "isGroupPreapared": true
    },
    "showingTransplanting": {
        "seedSource": "string",
        "seedTreatment": true,
        "fungicideName": "string",
        "sowingType": "string",
        "plantDistance": 10,
        "rowDistance": 10,
        "gardenAge": 10,
        "plantedInGroup": true,
        "dayDifference": 10
    },
    "selectionCropWeeding": {
        "cropName": "string",
        "isWeedingPoperTime": true,
        "firstWeedingDate": "2022-03-25",
        "sceondWeedingDate": "2022-03-25",
        "thirdWeedingDate": "2022-03-25",
        "nextWeedingDate": "2022-03-25"
    }
}
}
*/
const getProductionInformation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const productionInformation = yield (0, production_information_service_1.getProductionInformationByGeneralInformationID)(id);
        if (!productionInformation) {
            throw new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Production Information Not Found');
        }
        ;
        res.ok(productionInformation, 'Production Information Get Successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.getProductionInformation = getProductionInformation;
