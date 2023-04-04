import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors";
import { notFound, unProcessable } from "../../helpers/responseHandler";
import { addPersonalWorkerHygiene, findOneQuary } from "./personal_worker_hygiene_service";


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

export const addPersonalWorkerHygieneController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.body.generalInformationID;
        const isExist = await findOneQuary({ generalInformationID });
        if (isExist) {
            throw new ApiError(unProcessable(), "Personal Worker Hygiene already exist");
        }
        const newPersonalWorkerHygiene = await addPersonalWorkerHygiene(req.body);
        res.created(newPersonalWorkerHygiene);
    } catch (error) {
        next(error);
    }
};


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
export const getInfoByGeneralInfoId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.params.generalInformationID;
        const personalWorkerHygiene = await findOneQuary({ generalInformationID });
        if (!personalWorkerHygiene) {
            throw new ApiError(unProcessable(), "Personal Worker Hygiene not found");
        }
        res.ok(personalWorkerHygiene, "Personal Worker Hygiene found successfully");
    } catch (error) {
        next(error);
    }
};


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
export const getInfoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const _id: string = req.params.id;
        const personalWorkerHygiene = await findOneQuary({ _id });
        if (!personalWorkerHygiene) {
            throw new ApiError(notFound(), "Personal Worker Hygiene not found");
        }
        res.ok(personalWorkerHygiene, "Personal Worker Hygiene found successfully");
    } catch (error) {
        next(error);
    }
}
