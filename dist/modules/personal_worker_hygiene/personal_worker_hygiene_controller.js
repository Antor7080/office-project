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
exports.getInfoById = exports.getInfoByGeneralInfoId = exports.addPersonalWorkerHygieneController = void 0;
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const personal_worker_hygiene_service_1 = require("./personal_worker_hygiene_service");
/**
 * @objective Create Personal Worker Hygiene
 * @endpoint /api/v1/personal-worker-hygiene/add
 * @method POST
 * @reqBody {
    "generalInformationID": "6427fc064310a9504c8be92b",
    "fram": {
        "isRestHouse": true,
        "isToilet": true,
        "isDistilledWater": true,
        "isSoap": true,
        "isMaterialRoom": true,
        "isRoamingFree": true,
        "isHygieneProduct": true,
        "isMonitoring": true,
        "isDressingRoom": true
    },
    "interculteralOperation": {
        "isHygieneDressUsed": true,
        "isStoredProperly": true,
        "isRefreshed": true,
        "isCleaned": true,
        "pesticideApplied": "a",
        "isRightDirection": true,
        "daysBeforeHarvest": 10,
        "isInformationTaken": true,
        "isHandGlovesUsed": true,
        "isHygienic": true,
        "isPersonalHygiene": false,
        "isAllHygiene": true,
        "isAllPrincipleMaintained": false
    }
}
*@Resbody {
    "success": true,
    "code": 201,
    "data": {
        "generalInformationID": "6427fc064310a9504c8be92b",
        "fram": {
            "isRestHouse": true,
            "isToilet": true,
            "isDistilledWater": true,
            "isSoap": true,
            "isMaterialRoom": true,
            "isRoamingFree": true,
            "isHygieneProduct": true,
            "isMonitoring": true,
            "isDressingRoom": true
        },
        "interculteralOperation": {
            "isHygieneDressUsed": true,
            "isStoredProperly": true,
            "isRefreshed": true,
            "isCleaned": true,
            "pesticideApplied": "a",
            "isRightDirection": true,
            "daysBeforeHarvest": 10,
            "isInformationTaken": true,
            "isHandGlovesUsed": true,
            "isHygienic": true,
            "isPersonalHygiene": false,
            "isAllHygiene": true,
            "isAllPrincipleMaintained": false
        },
        "_id": "642b9fb6fb8672bd95eff511",
        "__v": 0
    },
    "message": "Successfully Created."
}
 */
const addPersonalWorkerHygieneController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generalInformationID = req.body.generalInformationID;
        const isExist = yield (0, personal_worker_hygiene_service_1.findOneQuary)({ generalInformationID });
        if (isExist) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), "Personal Worker Hygiene already exist");
        }
        const newPersonalWorkerHygiene = yield (0, personal_worker_hygiene_service_1.addPersonalWorkerHygiene)(req.body);
        res.created(newPersonalWorkerHygiene);
    }
    catch (error) {
        next(error);
    }
});
exports.addPersonalWorkerHygieneController = addPersonalWorkerHygieneController;
/**
 *
 * @objective Get Personal Worker Hygiene by generalInformationID
 * @endpoint /api/v1/personal-worker-hygiene/get-by-general-info-id/:generalInformationID
 * @method GET
 * @resBody {
    "success": true,
    "code": 200,
    "data": {
        "fram": {
            "isRestHouse": true,
            "isToilet": true,
            "isDistilledWater": true,
            "isSoap": true,
            "isMaterialRoom": true,
            "isRoamingFree": true,
            "isHygieneProduct": true,
            "isMonitoring": true,
            "isDressingRoom": true
        },
        "interculteralOperation": {
            "isHygieneDressUsed": true,
            "isStoredProperly": true,
            "isRefreshed": true,
            "isCleaned": true,
            "pesticideApplied": "a",
            "isRightDirection": true,
            "daysBeforeHarvest": 10,
            "isInformationTaken": true,
            "isHandGlovesUsed": true,
            "isHygienic": true,
            "isPersonalHygiene": false,
            "isAllHygiene": true,
            "isAllPrincipleMaintained": false
        },
        "_id": "642b9fb6fb8672bd95eff511",
        "generalInformationID": "6427fc064310a9504c8be92b",
        "__v": 0
    },
    "message": "Personal Worker Hygiene found successfully"
}
 */
const getInfoByGeneralInfoId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generalInformationID = req.params.generalInformationID;
        const personalWorkerHygiene = yield (0, personal_worker_hygiene_service_1.findOneQuary)({ generalInformationID });
        if (!personalWorkerHygiene) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), "Personal Worker Hygiene not found");
        }
        res.ok(personalWorkerHygiene, "Personal Worker Hygiene found successfully");
    }
    catch (error) {
        next(error);
    }
});
exports.getInfoByGeneralInfoId = getInfoByGeneralInfoId;
/**
 * @objective Get Personal Worker Hygiene by id
 * @endpoint /api/v1/personal-worker-hygiene/get/:id
 * @method GET
 * @resBody {
    "success": true,
    "code": 200,
    "data": {
        "fram": {
            "isRestHouse": true,
            "isToilet": true,
            "isDistilledWater": true,
            "isSoap": true,
            "isMaterialRoom": true,
            "isRoamingFree": true,
            "isHygieneProduct": true,
            "isMonitoring": true,
            "isDressingRoom": true
        },
        "interculteralOperation": {
            "isHygieneDressUsed": true,
            "isStoredProperly": true,
            "isRefreshed": true,
            "isCleaned": true,
            "pesticideApplied": "a",
            "isRightDirection": true,
            "daysBeforeHarvest": 10,
            "isInformationTaken": true,
            "isHandGlovesUsed": true,
            "isHygienic": true,
            "isPersonalHygiene": false,
            "isAllHygiene": true,
            "isAllPrincipleMaintained": false
        },
        "_id": "642b9fb6fb8672bd95eff511",
        "generalInformationID": "6427fc064310a9504c8be92b",
        "__v": 0
    },
    "message": "Personal Worker Hygiene found successfully"
}
*/
const getInfoById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.id;
        const personalWorkerHygiene = yield (0, personal_worker_hygiene_service_1.findOneQuary)({ _id });
        if (!personalWorkerHygiene) {
            throw new errors_1.ApiError((0, responseHandler_1.notFound)(), "Personal Worker Hygiene not found");
        }
        res.ok(personalWorkerHygiene, "Personal Worker Hygiene found successfully");
    }
    catch (error) {
        next(error);
    }
});
exports.getInfoById = getInfoById;
