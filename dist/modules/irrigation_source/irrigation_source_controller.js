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
exports.getByGeneralInformationID = exports.getIrrigationSourceInfo = exports.addIrrigationSourceInfo = void 0;
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const irrigation_source_services_1 = require("./irrigation_source_services");
/**
 * @objective Add Irrigation Source Information
 * @endpoint /api/irrigation-source/add
 * @method POST
 * @reqbody {
 "generalInformationID" :  "641a968de9fa2fd5a92053c3",
 "waterSource": "River",
 "pollutionFree": true,
 "testedSource": false,
 "infected": true,
 "isPurifined": false,
 "purifyingAgent": "test 1",
 "localName": "test local name",
 "sourceType" : "Organic",
 "badEffectHuman": true,
 "isHeavyMetalPresent": false,
 "irrigationSameTime": false,
 "differentIrrigationTime": 4,
 "irrigation1": 5,
 "irrigation2": 6,
 "irrigation3": 7,
 "irrigation4": 8,
 "irrigation5": 9,
 "totalIrrigation": 30,
 "animalRoaming": false,
 "industryNearBy" : false,
 "sewageWaterUsed": true,
 "tankDisinfection": true,
 "takenCooperation": false,
 "arrigationTime" :"Morning",
 "suggestionTaken": false,
 "irrigationMethod": ["Flood", "Deep"],
 "poperDrainage": true,
 "excessWaterDrainage": false
}
    * @res {
    "success": true,
    "message": "Irrigation Source Information Added Successfully",
    "data": {
 "generalInformationID" :  "641a968de9fa2fd5a92053c3",
 "waterSource": "River",
 "pollutionFree": true,
 "testedSource": false,
 "infected": true,
 "isPurifined": false,
 "purifyingAgent": "test 1",
 "localName": "test local name",
 "sourceType" : "Organic",
 "badEffectHuman": true,
 "isHeavyMetalPresent": false,
 "irrigationSameTime": false,
 "differentIrrigationTime": 4,
 "irrigation1": 5,
 "irrigation2": 6,
 "irrigation3": 7,
 "irrigation4": 8,
 "irrigation5": 9,
 "totalIrrigation": 30,
 "animalRoaming": false,
 "industryNearBy" : false,
 "sewageWaterUsed": true,
 "tankDisinfection": true,
 "takenCooperation": false,
 "arrigationTime" :"Morning",
 "suggestionTaken": false,
 "irrigationMethod": ["Flood", "Deep"],
 "poperDrainage": true,
 "excessWaterDrainage": false
}

    }
    */
const addIrrigationSourceInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generalInformationID = req.body.generalInformationID;
        if (!generalInformationID) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), 'General Information ID is Required');
        }
        const isIrrigationSourceExist = yield (0, irrigation_source_services_1.findOneQuery)({ generalInformationID });
        if (isIrrigationSourceExist) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), 'Irrigation Source Information Already Exist');
        }
        const newIrrigationSource = yield (0, irrigation_source_services_1.addIrrigationSource)(req.body);
        res.created(newIrrigationSource, 'Irrigation Source Information Added Successfully');
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.addIrrigationSourceInfo = addIrrigationSourceInfo;
/**
 * @objective Get Irrigation Source Information
 * @endpoint /api/irrigation-source/get/:id
 * @method GET
 * @reqparam id
 * @res {
 * "success": true,
 * "message": "Irrigation Source Information Get Successfully",
 * "data": {
        "generalInformationID" :  "641a968de9fa2fd5a92053c3",
        "waterSource": "River",
        "pollutionFree": true,
        "testedSource": false,
        "infected": true,
        "isPurifined": false,
        "purifyingAgent": "test 1",
        "localName": "test local name",
        "sourceType" : "Organic",
        "badEffectHuman": true,
        "isHeavyMetalPresent": false,
        "irrigationSameTime": false,
        "differentIrrigationTime": 4,
        "irrigation1": 5,
        "irrigation2": 6,
        "irrigation3": 7,
        "irrigation4": 8,
        "irrigation5": 9,
        "totalIrrigation": 30,
        "animalRoaming": false,
        "industryNearBy" : false,
        "sewageWaterUsed": true,
        "tankDisinfection": true,
        "takenCooperation": false,
        "arrigationTime" :"Morning",
        "suggestionTaken": false,
        "irrigationMethod": ["Flood", "Deep"],
        "poperDrainage": true,
        "excessWaterDrainage": false
        }}
    */
const getIrrigationSourceInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const irrigationSourceInfo = yield (0, irrigation_source_services_1.findOneQuery)({ _id: id });
        if (!irrigationSourceInfo) {
            throw new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Irrigation Source Information Not Found');
        }
        ;
        res.ok(irrigationSourceInfo, 'Irrigation Source Information Get Successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.getIrrigationSourceInfo = getIrrigationSourceInfo;
/**
 * @objective get irrigation source information by general information id
 * @endpoint /api/irrigation-source/get-by-general-information-id/:id
 * @method GET
 * @reqparam id
 * @res {
    "success": true,
    "code": 200,
    "data": {
        "_id": "64213acb4e6d2ccd264eaaa0",
        "generalInformationID": "641a968de9fa2fd5a92053c3",
        "waterSource": [
            "River"
        ],
        "pollutionFree": true,
        "testedSource": false,
        "infected": true,
        "isPurifined": false,
        "purifyingAgent": "test 1",
        "localName": "test local name",
        "sourceType": "Organic",
        "badEffectHuman": true,
        "isHeavyMetalPresent": false,
        "irrigationSameTime": false,
        "differentIrrigationTime": 4,
        "irrigation1": 5,
        "irrigation2": 6,
        "irrigation3": 7,
        "irrigation4": 8,
        "irrigation5": 9,
        "totalIrrigation": 30,
        "animalRoaming": false,
        "industryNearBy": false,
        "sewageWaterUsed": true,
        "tankDisinfection": true,
        "takenCooperation": false,
        "suggestionTaken": false,
        "poperDrainage": true,
        "excessWaterDrainage": false,
        "__v": 0
    },
    "message": "Irrigation Source Information Get Successfully"
}
 */
const getByGeneralInformationID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generalInformationID = req.params.id;
        const irrigationSourceInfo = yield (0, irrigation_source_services_1.findOneQuery)({ generalInformationID });
        if (!irrigationSourceInfo) {
            throw new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Irrigation Source Information Not Found');
        }
        ;
        res.ok(irrigationSourceInfo, 'Irrigation Source Information Get Successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.getByGeneralInformationID = getByGeneralInformationID;
