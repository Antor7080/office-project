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
exports.getGeneralInformationById = exports.getGeneralInformation = exports.addGeneralInformation = void 0;
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const genarel_information_services_1 = require("./genarel_information_services");
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
const addGeneralInformation = (req, res, next) => {
    try {
        const newGenarelInformation = (0, genarel_information_services_1.addGeneralInformationService)(req.body);
        res.created(newGenarelInformation, 'General Information Added Successfully');
    }
    catch (error) {
        next(error);
    }
};
exports.addGeneralInformation = addGeneralInformation;
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
const getGeneralInformation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allGenarelInformation = yield (0, genarel_information_services_1.getGeneralInformationService)();
        res.ok(allGenarelInformation, 'General Information Get Successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.getGeneralInformation = getGeneralInformation;
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
const getGeneralInformationById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const allGenarelInformation = yield (0, genarel_information_services_1.findOneQuery)({ _id: id });
        if (!allGenarelInformation) {
            throw new errors_1.ApiError((0, responseHandler_1.notFound)(), 'General Information Not Found');
        }
        res.ok(allGenarelInformation, 'General Information Get Successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.getGeneralInformationById = getGeneralInformationById;
