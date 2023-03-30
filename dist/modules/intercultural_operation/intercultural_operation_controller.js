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
exports.getInterculturalOperation = exports.addInterculturalOperation = void 0;
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const intercultural_operation_services_1 = require("./intercultural_operation_services");
/**
 *
 * @objective Add Intercultural Operation Information
 * @endpoint /api/intercultural-operation/add
 * @method POST
 * @reqbody {
    "generalInformationID" :  "641a968de9fa2fd5a92053c3",
    "weedingIntercultural": {
        "isCleaned": true,
        "timelyWeeding": false,
        "primarilyWeeded": true,
        "productionLevelCleaned": false,
        "purifingAgentUsed": true,
        "treatedChemicalName": false
    },
    "vegetable": {
        "vegetableCultivation": false,
        "mulchingPaperUsed": false,
        "supportUsed": true,
        "lightAndAir" : false,
        "animalProtection" : true,
        "isEggPlant": false,
        "fenceUsed": true,
        "wasteManagement": false
    },
    "mango":{
        "deadStemRemoved" : true,
        "doesClean": false,
        "hormoneUsed": true,
        "mulchingPaperUsedMango": true
    },
    "betelLeaf": {
        "landShadowNotDamp": true,
        "supportUsedBetel": false,
        "animalProtectionBetel": true,
        "prohibitedEntry": false
    }
}
@res {
    "success": true,
    "message": "Intercultural Operation Information Added Successfully",
    "data": {
    "generalInformationID" :  "641a968de9fa2fd5a92053c3",
    "weedingIntercultural": {
        "isCleaned": true,
        "timelyWeeding": false,
        "primarilyWeeded": true,
        "productionLevelCleaned": false,
        "purifingAgentUsed": true,
        "treatedChemicalName": false
    },
    "vegetable": {
        "vegetableCultivation": false,
        "mulchingPaperUsed": false,
        "supportUsed": true,
        "lightAndAir" : false,
        "animalProtection" : true,
        "isEggPlant": false,
        "fenceUsed": true,
        "wasteManagement": false
    },
    "mango":{
        "deadStemRemoved" : true,
        "doesClean": false,
        "hormoneUsed": true,
        "mulchingPaperUsedMango": true
    },
    "betelLeaf": {
        "landShadowNotDamp": true,
        "supportUsedBetel": false,
        "animalProtectionBetel": true,
        "prohibitedEntry": false
    }
}
}
 */
const addInterculturalOperation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generalInformationID = req.body.generalInformationID;
        if (!generalInformationID) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), 'General Information ID is Required');
        }
        ;
        const isIntercultralOperationExist = yield (0, intercultural_operation_services_1.getInterculturalOperationByGeneralInformationID)(generalInformationID);
        if (isIntercultralOperationExist) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), 'Intercultural Operation Information Already Exist');
        }
        ;
        const newInterculturalOperation = yield (0, intercultural_operation_services_1.addInterculturalOperationService)(req.body);
        res.created(newInterculturalOperation, 'Intercultural Operation Information Added Successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.addInterculturalOperation = addInterculturalOperation;
/**
 * @objective Get Intercultural Operation Information
 * @endpoint /api/intercultural-operation/get/:id
 * @method GET
 * @reqparam id
 * @res {
 * "success": true,
 * "message": "Intercultural Operation Information Get Successfully",
 * "data":  "generalInformationID" :  "641a968de9fa2fd5a92053c3",
    "weedingIntercultural": {
        "isCleaned": true,
        "timelyWeeding": false,
        "primarilyWeeded": true,
        "productionLevelCleaned": false,
        "purifingAgentUsed": true,
        "treatedChemicalName": false
    },
    "vegetable": {
        "vegetableCultivation": false,
        "mulchingPaperUsed": false,
        "supportUsed": true,
        "lightAndAir" : false,
        "animalProtection" : true,
        "isEggPlant": false,
        "fenceUsed": true,
        "wasteManagement": false
    },
    "mango":{
        "deadStemRemoved" : true,
        "doesClean": false,
        "hormoneUsed": true,
        "mulchingPaperUsedMango": true
    },
    "betelLeaf": {
        "landShadowNotDamp": true,
        "supportUsedBetel": false,
        "animalProtectionBetel": true,
        "prohibitedEntry": false
    }
 * }
    */
const getInterculturalOperation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const interculturalOperation = yield (0, intercultural_operation_services_1.getInterculturalOperationByGeneralInformationID)(id);
        if (!interculturalOperation) {
            throw new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Intercultural Operation Information Not Found');
        }
        ;
        res.ok(interculturalOperation, 'Intercultural Operation Information Get Successfully');
    }
    catch (err) {
        next(err);
    }
});
exports.getInterculturalOperation = getInterculturalOperation;
