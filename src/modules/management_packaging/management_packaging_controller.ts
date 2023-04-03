import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../errors';
import { notFound, unProcessable } from '../../helpers/responseHandler';
import { IManagementPackaging } from './management_packaging_interface';
import { addService, findOneService } from './management_packaging_service';


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
export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.body.generalInformationID;
        const isExsists = await findOneService({ generalInformationID });
        if (isExsists) {
            return next(new ApiError(unProcessable(), 'Management Packaging already exsists'));
        }
        const managementPackaging: IManagementPackaging = await addService(req.body);
        res.created(managementPackaging, "Management Packaging added successfully");
    } catch (error) {
        next(error);
    }
};

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

export const getOneById = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    try {
        const managementPackaging: IManagementPackaging | null = await findOneService({ _id: id });
        if (!managementPackaging) {
            return next(new ApiError(notFound(), 'Management Packaging not found'));
        }
        res.ok(managementPackaging, "Management Packaging found successfully");
    } catch (error) {
        next(error);
    }
};

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

export const getOneByGeneralInformationId = async (req: Request, res: Response, next: NextFunction) => {
    const generalInformationID: string = req.params.id;
    try {
        const managementPackaging: IManagementPackaging | null = await findOneService({ generalInformationID });
        if (!managementPackaging) {
            return next(new ApiError(notFound(), 'Management Packaging not found'));
        }
        res.ok(managementPackaging, "Management Packaging found successfully");
    } catch (error) {
        next(error);
    }
}