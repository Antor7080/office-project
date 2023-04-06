import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../errors';
import { notFound } from '../../helpers/responseHandler';
import { IGenarelInformation } from './genarel_information_interface';
import { addGeneralInformationService, findOneQuery, getGeneralInformationService } from './genarel_information_services';


/**
 * 
 * @objective add general information
 * @endpoint /api/v1/genarel_information/add
 * @method POST
 * @requestBody {
    "framLocationAndCode": {
        "groupCodeNo": 1,
        "farmCode": 12,
        "mouja": "Love Road",
        "village": "Mirpur 2",
        "union": "Mirpur",
        "upzilla": "Mirpur",
        "district": "Dhaka"
    },
    "farmingSystem": {
        "system": "Single",
        "totalFarmers": 1,
        "leaderName": "Abdur Karim",
        "groupTotalLand": 10.50
    },
    "FarmerInformation": {
        "farmerName": "Abdur Rahim",
        "framProfileCode": 10,
        "farmerVillage": "Batikamara",
        "farmerUpzilla": "Kumarkhali",
        "farmerUnion": " ",
        "farmerDistrict": "Kushtia"
    },
    "farmerType": {
        "type": "Small",
        "ownedLand": 10,
        "lease": 10,
        "totalLand": "20"
    },
    "siteSelection": {
        "info1": true,
        "info2": true,
        "info3": true,
        "info4": true,
        "info5": true,
        "info6": true,
        "info7": true,
        "info8": true,
        "sourceOfWater": ["River"],
        "info9": true
    },
    "contratedLandCropInfo": {
        "cantractLand": 10,
        "productionMethod": "Net House",
        "vegetables": [
            "vegetable1",
            "vegetable2",
            "vegetable3",
            "vegetable4"
        ]
    },
     "soilType": {
        "soilPH": 10,
        "soilName": "Loamy",
        "croppedType": "Single",
        "previousCrop": "Rich",
        "cultivationType": "Modern",
        "AEZ": 10
    }
}
* @responseBody {
    "success": true,
    "code": 201,
    "data": {
        "framLocationAndCode": {
            "groupCodeNo": 1,
            "farmCode": 12,
            "mouja": "Love Road",
            "village": "Mirpur 2",
            "union": "Mirpur",
            "upzilla": "Mirpur",
            "district": "Dhaka"
        },
        "farmingSystem": {
            "system": "Single",
            "totalFarmers": 1,
            "leaderName": "Abdur Karim",
            "groupTotalLand": 10.5
        },
        "FarmerInformation": {
            "farmerName": "Abdur Rahim",
            "framProfileCode": 10,
            "farmerVillage": "Batikamara",
            "farmerUpzilla": "Kumarkhali",
            "farmerUnion": " ",
            "farmerDistrict": "Kushtia"
        },
        "farmerType": {
            "type": "Small",
            "ownedLand": 10,
            "lease": 10,
            "totalLand": 20
        },
        "siteSelection": {
            "info1": true,
            "info2": true,
            "info3": true,
            "info4": true,
            "info5": true,
            "info6": true,
            "info7": true,
            "info8": true,
            "sourceOfWater": [
                [
                    "River"
                ]
            ],
            "info9": true
        },
        "contratedLandCropInfo": {
            "cantractLand": 10,
            "productionMethod": "Net House",
            "vegetables": [
                "vegetable1",
                "vegetable2",
                "vegetable3",
                "vegetable4"
            ]
        },
        "soilType": {
            "soilName": "Loamy",
            "soilPH": 10,
            "croppedType": "Single",
            "previousCrop": "Rich",
            "cultivationType": "Modern",
            "AEZ": 10
        },
        "_id": "642a675e39088961109a93b6"
    },
    "message": "General Information Added Successfully"
}
 */
export const addGeneralInformation = (req: Request, res: Response, next: NextFunction) => {
    console.log(res.locals.user);
    try {
        const newGenarelInformation: IGenarelInformation = addGeneralInformationService(req.body);
        res.created(newGenarelInformation, 'General Information Added Successfully')
    } catch (error) {
        next(error)
    }
};


/**
 * 
 * @objective get all general information
 * @endpoint /api/v1/genarel_information
 * @method GET
 * @responseBody [{
    "framLocationAndCode": {
        "groupCodeNo": 1,
        "farmCode": 12,
        "mouja": "Love Road",
        "village": "Mirpur 2",
        "union": "Mirpur",
        "upzilla": "Mirpur",
        "district": "Dhaka"
    },
    "farmingSystem": {
        "system": "Single",
        "totalFarmers": 1,
        "leaderName": "Abdur Karim",
        "groupTotalLand": 10.50
    },
    "FarmerInformation": {
        "farmerName": "Abdur Rahim",
        "framProfileCode": 10,
        "farmerVillage": "Batikamara",
        "farmerUpzilla": "Kumarkhali",
        "farmerUnion": " ",
        "farmerDistrict": "Kushtia"
    },
    "farmerType": {
        "type": "Small",
        "ownedLand": 10,
        "lease": 10,
        "totalLand": "20"
    },
    "siteSelection": {
        "info1": true,
        "info2": true,
        "info3": true,
        "info4": true,
        "info5": true,
        "info6": true,
        "info7": true,
        "info8": true,
        "sourceOfWater": ["River"],
        "info9": true
    },
    "contratedLandCropInfo": {
        "cantractLand": 10,
        "productionMethod": "Net House",
        "vegetables": [
            "vegetable1",
            "vegetable2",
            "vegetable3",
            "vegetable4"
        ]
    },
     "soilType": {
        "soilPH": 10,
        "soilName": "Loamy",
        "croppedType": "Single",
        "previousCrop": "Rich",
        "cultivationType": "Modern",
        "AEZ": 10
    }, 
    _id: 60a1b1b0b0b5a8a0c4b0b1a0, 
    createdAt: 2021-05-18T09:12:00.000Z, 
    updatedAt: 2021-05-18T09:12:00.000Z, 
    __v: 0
}]
 * 
 */
export const getGeneralInformation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allGenarelInformation: Array<IGenarelInformation> = await getGeneralInformationService();
        res.ok(allGenarelInformation, 'General Information Get Successfully')
    } catch (error) {
        next(error)
    }
};

/**
 * 
 * @objective get general information by id
 * @endpoint /api/v1/genarel_information/:id
 * @method GET
 * @responseBody {
    "framLocationAndCode": {
        "groupCodeNo": 1,
        "farmCode": 12,
        "mouja": "Love Road",
        "village": "Mirpur 2",
        "union": "Mirpur",
        "upzilla": "Mirpur",
        "district": "Dhaka"
    },
    "farmingSystem": {
        "system": "Single",
        "totalFarmers": 1,
        "leaderName": "Abdur Karim",
        "groupTotalLand": 10.50
    },
    "FarmerInformation": {
        "farmerName": "Abdur Rahim",
        "framProfileCode": 10,
        "farmerVillage": "Batikamara",
        "farmerUpzilla": "Kumarkhali",
        "farmerUnion": " ",
        "farmerDistrict": "Kushtia"
    },
    "farmerType": {
        "type": "Small",
        "ownedLand": 10,
        "lease": 10,
        "totalLand": "20"
    },
    "siteSelection": {
        "info1": true,
        "info2": true,
        "info3": true,
        "info4": true,
        "info5": true,
        "info6": true,
        "info7": true,
        "info8": true,
        "sourceOfWater": ["River"],
        "info9": true
    },
    "contratedLandCropInfo": {
        "cantractLand": 10,
        "productionMethod": "Net House",
        "vegetables": [
            "vegetable1",
            "vegetable2",
            "vegetable3",
            "vegetable4"
        ]
    },
     "soilType": {
        "soilPH": 10,
        "soilName": "Loamy",
        "croppedType": "Single",
        "previousCrop": "Rich",
        "cultivationType": "Modern",
        "AEZ": 10
    }, 
    _id: 60a1b1b0b0b5a8a0c4b0b1a0, 
    createdAt: 2021-05-18T09:12:00.000Z, 
    updatedAt: 2021-05-18T09:12:00.000Z, 
    __v: 0
}
 */
export const getGeneralInformationById = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    try {
        const allGenarelInformation: IGenarelInformation | null = await findOneQuery({ _id: id });
        if (!allGenarelInformation) {
            throw new ApiError(notFound(), 'General Information Not Found')
        }
        res.ok(allGenarelInformation, 'General Information Get Successfully')
    } catch (error) {
        next(error)
    }
};