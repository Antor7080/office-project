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
exports.getOneByGeneralInformationId = exports.getOneById = exports.add = void 0;
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const management_packaging_service_1 = require("./management_packaging_service");
/**
 *
 * @objective add management packaging
 * @endpoint /api/v1/management-packaging/add
 * @method: POST
 *
 * reqbody: {
    "generalInformationID": "641a968de9fa2fd5a92053c3",
    "centerPackaging": {
        "transportationType": "Normal",
        "isInspection": true,
        "isWashingRoom": true,
        "isDryByFan": false,
        "isFinalFacilites": true,
        "isTamperatureControl": false,
        "isBacterialContainment": true,
        "isHygienicPractices": false,
        "isHygienicIsolatedRoom": true,
        "isHygienicArrivalExit": false
    },
    "temperatureControl": {
        "isAppropriateTemperature": true,
        "vegetables": 200,
        "betelLeaf": 200,
        "mango": 200
    },
    "vegetables": {
        "isCleaningMethod": true,
        "isColdWaterTreatment": true,
        "isChlorineted": false
    },
    "betelLeaf": {
        "isCleaningMethod": true,
        "isChlorineted": false,
        "washedWith": "somthing",
        "treatedTime": 10,
        "isWashDistilledWater": true,
        "isDryUnderFan": true
    },
    "mango":{
        "isBagging": true,
        "baggingType": "Brown",
        "isBoiledWaterCleaning": true,
        "treatedTemperature": 26,
        "isDryUnderFan": false
    },
    "inspection":{
        "isInspectionByOfficer": true,
        "isNoInsect": false,
        "isCertified": true,
        "certificateDate":  "2022-03-25"
    },
    "finalPackaging":{
        "packagingType":"Foam box",
        "consumerDemandPackaging": true,
        "isMicrobialTest": true,
        "packagingMaterial": "New",
        "isPaperWrapped": true,
        "isVentilation": false,
        "isDryIceUsed": true,
        "isDistilledMade": true,
        "storedTime": 21,
        "vanType": "Normal",
        "routeType": "Air",
        "isTemperatureControlRoom": true,
        "isPhytoSanitaryCertificate": true,
        "isLebeling": true,
        "exportedCountry": "USA",
        "exporterName": "a",
        "exportedDate":  "2022-03-25",
        "importerName": "b",
        "isRejected": true,
        "rejectedReason": "Diseases"
    }
}

* @res {
    "success": true,
    "code": 201,
    "data": {
        "generalInformationID": "641a968de9fa2fd5a92053c3",
        "centerPackaging": {
            "transportationType": "Normal",
            "isInspection": true,
            "isWashingRoom": true,
            "isDryByFan": false,
            "isFinalFacilites": true,
            "isTamperatureControl": false,
            "isBacterialContainment": true,
            "isHygienicPractices": false,
            "isHygienicIsolatedRoom": true,
            "isHygienicArrivalExit": false
        },
        "temperatureControl": {
            "isAppropriateTemperature": true,
            "vegetables": 200,
            "betelLeaf": 200,
            "mango": 200
        },
        "vegetables": {
            "isCleaningMethod": true,
            "isColdWaterTreatment": true,
            "isChlorineted": false
        },
        "betelLeaf": {
            "isCleaningMethod": true,
            "isChlorineted": false,
            "washedWith": "somthing",
            "treatedTime": 10,
            "isWashDistilledWater": true,
            "isDryUnderFan": true
        },
        "mango": {
            "isBagging": true,
            "baggingType": "Brown",
            "isBoiledWaterCleaning": true,
            "treatedTemperature": 26,
            "isDryUnderFan": false
        },
        "inspection": {
            "isInspectionByOfficer": true,
            "isNoInsect": false,
            "isCertified": true,
            "certificateDate": "2022-03-25T00:00:00.000Z"
        },
        "finalPackaging": {
            "packagingType": "Foam box",
            "consumerDemandPackaging": true,
            "isMicrobialTest": true,
            "packagingMaterial": "New",
            "isPaperWrapped": true,
            "isVentilation": false,
            "isDryIceUsed": true,
            "isDistilledMade": true,
            "storedTime": 21,
            "vanType": "Normal",
            "routeType": "Air",
            "isTemperatureControlRoom": true,
            "isPhytoSanitaryCertificate": true,
            "isLebeling": true,
            "exportedCountry": "USA",
            "exporterName": "a",
            "exportedDate": "2022-03-25",
            "importerName": "b",
            "isRejected": true,
            "rejectedReason": "Diseases"
        },
        "_id": "642a4a59a35c5e023606f86e",
        "__v": 0
    },
    "message": "Management Packaging added successfully"
}
 *
*/
const add = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generalInformationID = req.body.generalInformationID;
        const isExsists = yield (0, management_packaging_service_1.findOneService)({ generalInformationID });
        if (isExsists) {
            return next(new errors_1.ApiError((0, responseHandler_1.unProcessable)(), 'Management Packaging already exsists'));
        }
        const managementPackaging = yield (0, management_packaging_service_1.addService)(req.body);
        res.created(managementPackaging, "Management Packaging added successfully");
    }
    catch (error) {
        next(error);
    }
});
exports.add = add;
/**
 *
 * @objective get management packaging
 * @endpoint /api/v1/management-packaging/get
 * @method: GET
 * @params { id: "83487yuedhjwh9" }
 * @resbody {
    "success": true,
    "code": 200,
    "data": {
        "centerPackaging": {
            "transportationType": "Normal",
            "isInspection": true,
            "isWashingRoom": true,
            "isDryByFan": false,
            "isFinalFacilites": true,
            "isTamperatureControl": false,
            "isBacterialContainment": true,
            "isHygienicPractices": false,
            "isHygienicIsolatedRoom": true,
            "isHygienicArrivalExit": false
        },
        "temperatureControl": {
            "isAppropriateTemperature": true,
            "vegetables": 200,
            "betelLeaf": 200,
            "mango": 200
        },
        "vegetables": {
            "isCleaningMethod": true,
            "isColdWaterTreatment": true,
            "isChlorineted": false
        },
        "betelLeaf": {
            "isCleaningMethod": true,
            "isChlorineted": false,
            "washedWith": "somthing",
            "treatedTime": 10,
            "isWashDistilledWater": true,
            "isDryUnderFan": true
        },
        "mango": {
            "isBagging": true,
            "baggingType": "Brown",
            "isBoiledWaterCleaning": true,
            "treatedTemperature": 26,
            "isDryUnderFan": false
        },
        "inspection": {
            "isInspectionByOfficer": true,
            "isNoInsect": false,
            "isCertified": true,
            "certificateDate": "2022-03-25T00:00:00.000Z"
        },
        "finalPackaging": {
            "packagingType": "Foam box",
            "consumerDemandPackaging": true,
            "isMicrobialTest": true,
            "packagingMaterial": "New",
            "isPaperWrapped": true,
            "isVentilation": false,
            "isDryIceUsed": true,
            "isDistilledMade": true,
            "storedTime": 21,
            "vanType": "Normal",
            "routeType": "Air",
            "isTemperatureControlRoom": true,
            "isPhytoSanitaryCertificate": true,
            "isLebeling": true,
            "exportedCountry": "USA",
            "exporterName": "a",
            "exportedDate": "2022-03-25",
            "importerName": "b",
            "isRejected": true,
            "rejectedReason": "Diseases"
        },
        "_id": "642a4a59a35c5e023606f86e",
        "generalInformationID": "641a968de9fa2fd5a92053c3",
        "__v": 0
    },
    "message": "Management Packaging found successfully"
}
 */
const getOneById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const managementPackaging = yield (0, management_packaging_service_1.findOneService)({ _id: id });
        if (!managementPackaging) {
            return next(new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Management Packaging not found'));
        }
        res.ok(managementPackaging, "Management Packaging found successfully");
    }
    catch (error) {
        next(error);
    }
});
exports.getOneById = getOneById;
/**
 *
 * @objective get management packaging by general information id
 * @endpoint /api/v1/management-packaging/get-by-general-information-id/:id
 * @method: GET
 * @params { id: "641a968de9fa2fd5a92053c3" }
 * @resbody {
    "success": true,
    "code": 200,
    "data": {
        "centerPackaging": {
            "transportationType": "Normal",
            "isInspection": true,
            "isWashingRoom": true,
            "isDryByFan": false,
            "isFinalFacilites": true,
            "isTamperatureControl": false,
            "isBacterialContainment": true,
            "isHygienicPractices": false,
            "isHygienicIsolatedRoom": true,
            "isHygienicArrivalExit": false
        },
        "temperatureControl": {
            "isAppropriateTemperature": true,
            "vegetables": 200,
            "betelLeaf": 200,
            "mango": 200
        },
        "vegetables": {
            "isCleaningMethod": true,
            "isColdWaterTreatment": true,
            "isChlorineted": false
        },
        "betelLeaf": {
            "isCleaningMethod": true,
            "isChlorineted": false,
            "washedWith": "somthing",
            "treatedTime": 10,
            "isWashDistilledWater": true,
            "isDryUnderFan": true
        },
        "mango": {
            "isBagging": true,
            "baggingType": "Brown",
            "isBoiledWaterCleaning": true,
            "treatedTemperature": 26,
            "isDryUnderFan": false
        },
        "inspection": {
            "isInspectionByOfficer": true,
            "isNoInsect": false,
            "isCertified": true,
            "certificateDate": "2022-03-25T00:00:00.000Z"
        },
        "finalPackaging": {
            "packagingType": "Foam box",
            "consumerDemandPackaging": true,
            "isMicrobialTest": true,
            "packagingMaterial": "New",
            "isPaperWrapped": true,
            "isVentilation": false,
            "isDryIceUsed": true,
            "isDistilledMade": true,
            "storedTime": 21,
            "vanType": "Normal",
            "routeType": "Air",
            "isTemperatureControlRoom": true,
            "isPhytoSanitaryCertificate": true,
            "isLebeling": true,
            "exportedCountry": "USA",
            "exporterName": "a",
            "exportedDate": "2022-03-25",
            "importerName": "b",
            "isRejected": true,
            "rejectedReason": "Diseases"
        },
        "_id": "642a4a59a35c5e023606f86e",
        "generalInformationID": "641a968de9fa2fd5a92053c3",
        "__v": 0
    },
    "message": "Management Packaging found successfully"
}
 *
*/
const getOneByGeneralInformationId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const generalInformationID = req.params.id;
    try {
        const managementPackaging = yield (0, management_packaging_service_1.findOneService)({ generalInformationID });
        if (!managementPackaging) {
            return next(new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Management Packaging not found'));
        }
        res.ok(managementPackaging, "Management Packaging found successfully");
    }
    catch (error) {
        next(error);
    }
});
exports.getOneByGeneralInformationId = getOneByGeneralInformationId;
