import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../errors';
import { notFound, unProcessable } from '../../helpers/responseHandler';
import IIrrigationSource from './irrigation_source_interface';
import { addIrrigationSource, findOneQuery } from './irrigation_source_services';

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
export const addIrrigationSourceInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID = req.body.generalInformationID;
        if (!generalInformationID) {
            throw new ApiError(unProcessable(), 'General Information ID is Required')
        }
        const isIrrigationSourceExist: IIrrigationSource | null = await findOneQuery({ generalInformationID });
        if (isIrrigationSourceExist) {
            throw new ApiError(unProcessable(), 'Irrigation Source Information Already Exist')
        }
        const newIrrigationSource: IIrrigationSource = await addIrrigationSource(req.body);
        res.created(newIrrigationSource, 'Irrigation Source Information Added Successfully')
    } catch (error) {
        next(error)
    };
};


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

export const getIrrigationSourceInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const irrigationSourceInfo: IIrrigationSource | null = await findOneQuery({ _id: id });
        if (!irrigationSourceInfo) {
            throw new ApiError(notFound(), 'Irrigation Source Information Not Found')
        };
        res.ok(irrigationSourceInfo, 'Irrigation Source Information Get Successfully')
    } catch (error) {
        next(error)
    }
};

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

export const getByGeneralInformationID = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.params.id;
        const irrigationSourceInfo: IIrrigationSource | null = await findOneQuery({ generalInformationID });
        if (!irrigationSourceInfo) {
            throw new ApiError(notFound(), 'Irrigation Source Information Not Found')
        };
        res.ok(irrigationSourceInfo, 'Irrigation Source Information Get Successfully')
    } catch (error) {
        next(error)
    }
}
