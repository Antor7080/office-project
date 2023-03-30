import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../errors';
import { notFound, unProcessable } from '../../helpers/responseHandler';
import IproductionInformation from './production_information_interface';
import { addProductionInformationService, getProductionInformationByGeneralInformationID } from './production_information_service';


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
export const addProductionInformation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.body.generalInformationID;
        if (!generalInformationID) {
            throw new ApiError(unProcessable(), 'General Information ID is Required')
        }
        const isProductionInformationExist: IproductionInformation | null = await getProductionInformationByGeneralInformationID(generalInformationID);
        if (isProductionInformationExist) {
            throw new ApiError(unProcessable(), 'Production Information Already Exist')
        }
        const newProductionInformation: IproductionInformation = await addProductionInformationService(req.body);
        res.created(newProductionInformation, 'Production Information Added Successfully')
    } catch (error) {
        next(error)
    }
};

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
export const getProductionInformation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const productionInformation: IproductionInformation | null = await getProductionInformationByGeneralInformationID(id);
        if (!productionInformation) {
            throw new ApiError(notFound(), 'Production Information Not Found')
        };
        res.ok(productionInformation, 'Production Information Get Successfully')
    } catch (error) {
        next(error)
    }
}