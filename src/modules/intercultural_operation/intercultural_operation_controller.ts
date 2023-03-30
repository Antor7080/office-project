import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors";
import { notFound, unProcessable } from "../../helpers/responseHandler";
import IInterculturalOperation from "./intercultural_operation_interface";
import { addInterculturalOperationService, getInterculturalOperationByGeneralInformationID } from "./intercultural_operation_services";

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
export const addInterculturalOperation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.body.generalInformationID;
        if (!generalInformationID) {
            throw new ApiError(unProcessable(), 'General Information ID is Required')
        };
        const isIntercultralOperationExist: IInterculturalOperation | null = await getInterculturalOperationByGeneralInformationID(generalInformationID);
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
export const getInterculturalOperation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const interculturalOperation: IInterculturalOperation | null = await getInterculturalOperationByGeneralInformationID(id);
        if (!interculturalOperation) {
            throw new ApiError(notFound(), 'Intercultural Operation Information Not Found')
        };
        res.ok(interculturalOperation, 'Intercultural Operation Information Get Successfully')
    } catch (err) {
        next(err)
    }
};