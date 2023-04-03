import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors";
import { notFound, unProcessable } from "../../helpers/responseHandler";
import IInterculturalOperation from "./intercultural_operation_interface";
import { addInterculturalOperationService, getOneById } from "./intercultural_operation_services";

/**
 * 
 * @objective Add Intercultural Operation Information 
 * @endpoint /api/intercultural-operation/add
 * @method POST
 * @reqbody {
    "generalInformationID" :  "642a675e39088961109a93b6",
    "weedingIntercultural": {
        "isCleaned": true,
        "timelyWeeding": false,
        "primarilyWeeded": true,
        "productionLevelCleaned": false,
        "purifingAgentUsed": true,
        "treatedChemicalName": "timelyWeeding"
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
        "mulchingPaperUsedMango": true,
        "fenceUsedMango": true,
        "wasteManagementMango": true
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
    "code": 201,
    "data": {
        "generalInformationID": "642a675e39088961109a93b6",
        "weedingIntercultural": {
            "isCleaned": true,
            "timelyWeeding": false,
            "primarilyWeeded": true,
            "productionLevelCleaned": false,
            "purifingAgentUsed": true,
            "treatedChemicalName": "timelyWeeding"
        },
        "vegetable": {
            "vegetableCultivation": false,
            "mulchingPaperUsed": false,
            "supportUsed": true,
            "lightAndAir": false,
            "animalProtection": true,
            "isEggPlant": false,
            "fenceUsed": true,
            "wasteManagement": false
        },
        "mango": {
            "deadStemRemoved": true,
            "doesClean": false,
            "hormoneUsed": true,
            "mulchingPaperUsedMango": true,
            "fenceUsedMango": true,
            "wasteManagementMango": true
        },
        "betelLeaf": {
            "landShadowNotDamp": true,
            "supportUsedBetel": false,
            "animalProtectionBetel": true,
            "prohibitedEntry": false
        },
        "_id": "642a6a7b8bcf3efe40101015",
        "__v": 0
    },
    "message": "Intercultural Operation Information Added Successfully"
}
 */
export const addInterculturalOperation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.body.generalInformationID;
        if (!generalInformationID) {
            throw new ApiError(unProcessable(), ' General Information ID is Required')
        };
        const isIntercultralOperationExist: IInterculturalOperation | null = await getOneById({ generalInformationID });
        if (isIntercultralOperationExist) {
            throw new ApiError(unProcessable(), 'Intercultural Operation Information Already Exist')
        };
        const newInterculturalOperation: IInterculturalOperation | null = await addInterculturalOperationService(req.body);
        res.created(newInterculturalOperation, 'Intercultural Operation Information Added Successfully')
    } catch (error) {
        next(error)
    }
};

/** 
 * @objective Get Intercultural Operation Information
 * @endpoint /api/intercultural-operation/get/:id
 * @method GET
 * @reqparam id
 * @res {
    "success": true,
    "code": 200,
    "data": {
        "weedingIntercultural": {
            "isCleaned": true,
            "timelyWeeding": false,
            "primarilyWeeded": true,
            "productionLevelCleaned": false,
            "purifingAgentUsed": true,
            "treatedChemicalName": "timelyWeeding"
        },
        "vegetable": {
            "vegetableCultivation": false,
            "mulchingPaperUsed": false,
            "supportUsed": true,
            "lightAndAir": false,
            "animalProtection": true,
            "isEggPlant": false,
            "fenceUsed": true,
            "wasteManagement": false
        },
        "mango": {
            "deadStemRemoved": true,
            "doesClean": false,
            "hormoneUsed": true,
            "mulchingPaperUsedMango": true,
            "fenceUsedMango": true,
            "wasteManagementMango": true
        },
        "betelLeaf": {
            "landShadowNotDamp": true,
            "supportUsedBetel": false,
            "animalProtectionBetel": true,
            "prohibitedEntry": false
        },
        "_id": "642a6a7b8bcf3efe40101015",
        "generalInformationID": "642a675e39088961109a93b6",
        "__v": 0
    },
    "message": "Intercultural Operation Information Get Successfully"
}
    */
export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const interculturalOperation: IInterculturalOperation | null = await getOneById({ _id: id });
        if (!interculturalOperation) {
            throw new ApiError(notFound(), 'Intercultural Operation Information Not Found')
        };
        res.ok(interculturalOperation, 'Intercultural Operation Information Get Successfully')
    } catch (error) {
        next(error)
    }
};

/**
 * @objective Get Intercultural Operation Information By General Information ID
 * @endpoint /api/intercultural-operation/get-by-general-information-id/:id
 * @method GET
 * @reqparam id
 * @res {
    "success": true,
    "code": 200,
    "data": {
        "weedingIntercultural": {
            "isCleaned": true,
            "timelyWeeding": false,
            "primarilyWeeded": true,
            "productionLevelCleaned": false,
            "purifingAgentUsed": true,
            "treatedChemicalName": "timelyWeeding"
        },
        "vegetable": {
            "vegetableCultivation": false,
            "mulchingPaperUsed": false,
            "supportUsed": true,
            "lightAndAir": false,
            "animalProtection": true,
            "isEggPlant": false,
            "fenceUsed": true,
            "wasteManagement": false
        },
        "mango": {
            "deadStemRemoved": true,
            "doesClean": false,
            "hormoneUsed": true,
            "mulchingPaperUsedMango": true,
            "fenceUsedMango": true,
            "wasteManagementMango": true
        },
        "betelLeaf": {
            "landShadowNotDamp": true,
            "supportUsedBetel": false,
            "animalProtectionBetel": true,
            "prohibitedEntry": false
        },
        "_id": "642a6a7b8bcf3efe40101015",
        "generalInformationID": "642a675e39088961109a93b6",
        "__v": 0
    },
    "message": "Intercultural Operation Information Get Successfully"
}
 */
export const getOneByGeneralInformationId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.params.id;
        const interculturalOperation: IInterculturalOperation | null = await getOneById({ generalInformationID });
        if (!interculturalOperation) {
            throw new ApiError(notFound(), 'Intercultural Operation Information Not Found')
        };
        res.ok(interculturalOperation, 'Intercultural Operation Information Get Successfully')
    } catch (error) {
        next(error)
    }
};