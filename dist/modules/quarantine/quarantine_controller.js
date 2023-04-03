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
exports.getOneByGeneralInformationId = exports.getOneById = exports.addQuarantinePestDiseasesController = void 0;
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const quarantine_service_1 = require("./quarantine_service");
/**
 *
 * @objective Add Quarantine Pest Diseases Control
 * @endPoint /api/quarantine-pests-diseases/add
 * @method POST
 * @reqBody {
    "generalInformationID": "642a675e39088961109a93b6",
    "quarantinePestDieases": {
        "isQuarantinePestDisese": true,
        "isPestRiskAnalysis": false,
        "pestRiskAnalysis": 36
    },
    "quarantineNamePests": {
        "vegetableName": " ",
        "pestsName": [
            "a",
            "b",
            "c"
        ],
        "mangoPestsName": [
            "a",
            "b",
            "c"
        ],
        "betelLeafPestsName": [
            "a",
            "b",
            "c"
        ]
    },
    "quarantinePestDiseseName": {
        "vegetableDisesesName": [
            "a",
            "b",
            "c"
        ],
        "mangoDisesesName": [
            "a",
            "b",
            "c"
        ],
        "betelLeafDisesesName": [
            "a",
            "b",
            "c"
        ]
    },
    "controlMeasures": {
        "techniquesName": ["Physical"],
        "isIntegration": true,
        "isIntegrationTwoThree": true
    },
    "organicPesiticide": {
        "vegetableOrganicPesticide": [
            "2023-03-15",
            "a",
            200,
            "2023-03-20",
            "b",
            200,
            "2023-03-25",
            "c",
            200
        ],
        "mangoOrganicPesticide": [
            "2023-03-15",
            "a",
            200,
            "2023-03-20",
            "b",
            200,
            "2023-03-25",
            "c",
            200
        ],
        "betelLeafOrganicPesticide": [
            "2023-03-15",
            "a",
            200,
            "2023-03-20",
            "b",
            200,
            "2023-03-25",
            "c",
            200
        ],
        "otherOrganicPesticde": [
            "2023-03-15",
            "a",
            200,
            "2023-03-20",
            "b",
            200,
            "2023-03-25",
            "c",
            200
        ]
    },
    "chemicalPesticide": {
        "vegetableChemicalPesticide": [
            "2023-03-15",
            "a",
            200,
            "2023-03-20",
            "b",
            200,
            "2023-03-25",
            "c",
            200
        ],
        "mangoChemicalPesticide": [
            "2023-03-15",
            "a",
            200,
            "2023-03-20",
            "b",
            200,
            "2023-03-25",
            "c",
            200
        ],
        "betelLeafChemicalPesticide": [
            "2023-03-15",
            "a",
            200,
            "2023-03-20",
            "b",
            200,
            "2023-03-25",
            "c",
            200
        ],
        "otherChemicalPesticide": [
            "2023-03-15",
            "a",
            200,
            "2023-03-20",
            "b",
            200,
            "2023-03-25",
            "c",
            200
        ]
    },
    "fungicideBactericide": {
        "vegetableFungicideBactericide": [
            "2023-03-15",
            "a",
            200,
            "2023-03-20",
            "b",
            200,
            "2023-03-25",
            "c",
            200
        ],
        "mangoFungicideBactericide": [
            "2023-03-15",
            "a",
            200,
            "2023-03-20",
            "b",
            200,
            "2023-03-25",
            "c",
            200
        ],
        "betelLeafFungicideBactericide": [
            "2023-03-15",
            "a",
            200,
            "2023-03-20",
            "b",
            200,
            "2023-03-25",
            "c",
            200
        ],
        "otherFungicideBactericide": [
            "2023-03-15",
            "a",
            200,
            "2023-03-20",
            "b",
            200,
            "2023-03-25",
            "c",
            200
        ]
    },
    "insectDiseases": {
        "isIdentify": true,
        "isSuggestionsTaken": false,
        "isPheromoneUsed": true,
        "pheromoneUsedTime": "Before",
        "isCropPheromoneUsed": true,
        "isChemicalPesticideUsed": false,
        "isHormonesUsed": true
    },
    "vegetables": {
        "isTimelyControllingPests": true,
        "isTimelyControllingDiseascs": false,
        "isPheromoneWorked": true,
        "isRegularlyMonitored": true,
        "isBagUsed": true,
        "colorBag": "White"
    },
    "mango": {
        "isProperManagement": true,
        "isBaggingUsed": false,
        "isIPMUsed": true,
        "daysBeforeBagging": 10,
        "isMeaserTake": true,
        "isLodgedBurned": true,
        "isRightAnthracnose": false
    },
    "betelLeaf": {
        "isSalmonellaProtection": false,
        "isChemicalOrganicUsed": true,
        "isPreventingExcretion":false
    }
}
@res {
    "success": true,
    "code": 201,
    "data": {
        "generalInformationID": "642a675e39088961109a93b6",
        "quarantinePestDieases": {
            "isQuarantinePestDisese": true,
            "isPestRiskAnalysis": false,
            "pestRiskAnalysis": 36
        },
        "quarantineNamePests": {
            "vegetableName": " ",
            "pestsName": [
                "a",
                "b",
                "c"
            ],
            "mangoPestsName": [
                "a",
                "b",
                "c"
            ],
            "betelLeafPestsName": [
                "a",
                "b",
                "c"
            ]
        },
        "quarantinePestDiseseName": {
            "vegetableDisesesName": [
                "a",
                "b",
                "c"
            ],
            "mangoDisesesName": [
                "a",
                "b",
                "c"
            ],
            "betelLeafDisesesName": [
                "a",
                "b",
                "c"
            ]
        },
        "controlMeasures": {
            "techniquesName": [
                "Physical"
            ],
            "isIntegration": true,
            "isIntegrationTwoThree": true
        },
        "organicPesiticide": {
            "vegetableOrganicPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "mangoOrganicPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "betelLeafOrganicPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "otherOrganicPesticde": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ]
        },
        "chemicalPesticide": {
            "vegetableChemicalPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "mangoChemicalPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "betelLeafChemicalPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "otherChemicalPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ]
        },
        "fungicideBactericide": {
            "vegetableFungicideBactericide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "mangoFungicideBactericide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "betelLeafFungicideBactericide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "otherFungicideBactericide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ]
        },
        "insectDiseases": {
            "isIdentify": true,
            "isSuggestionsTaken": false,
            "isPheromoneUsed": true,
            "pheromoneUsedTime": "Before",
            "isCropPheromoneUsed": true,
            "isChemicalPesticideUsed": false,
            "isHormonesUsed": true
        },
        "vegetables": {
            "isTimelyControllingPests": true,
            "isTimelyControllingDiseascs": false,
            "isPheromoneWorked": true,
            "isRegularlyMonitored": true,
            "isBagUsed": true,
            "colorBag": "White"
        },
        "mango": {
            "isProperManagement": true,
            "isBaggingUsed": false,
            "isIPMUsed": true,
            "daysBeforeBagging": 10,
            "isMeaserTake": true,
            "isLodgedBurned": true,
            "isRightAnthracnose": false
        },
        "betelLeaf": {
            "isSalmonellaProtection": false,
            "isChemicalOrganicUsed": true,
            "isPreventingExcretion": false
        },
        "_id": "642a734a6ecd0b633eb000cc",
        "__v": 0
    },
    "message": "Successfully Created."
} */
const addQuarantinePestDiseasesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const generalInformationID = body.generalInformationID;
        const isExist = yield (0, quarantine_service_1.findOneQuary)({ generalInformationID });
        if (isExist) {
            const error = new errors_1.ApiError((0, responseHandler_1.unProcessable)(), 'Quarantine Pest Diseases Control is already exist');
            return next(error);
        }
        const newQuarantinePestDiseasesControl = yield (0, quarantine_service_1.addQuarantinePestDiseasesControlService)(body);
        res.created(newQuarantinePestDiseasesControl);
    }
    catch (error) {
        next(error);
    }
});
exports.addQuarantinePestDiseasesController = addQuarantinePestDiseasesController;
/**
 * @objective Get One Quarantine Pest Diseases Control
 * @endPoint /api/quarantine-pests-diseases/get/:id
 * @method GET
 * @reqParam id
 * @resBody {
    "success": true,
    "code": 200,
    "data": {
        "quarantinePestDieases": {
            "isQuarantinePestDisese": true,
            "isPestRiskAnalysis": false,
            "pestRiskAnalysis": 36
        },
        "quarantineNamePests": {
            "vegetableName": " ",
            "pestsName": [
                "a",
                "b",
                "c"
            ],
            "mangoPestsName": [
                "a",
                "b",
                "c"
            ],
            "betelLeafPestsName": [
                "a",
                "b",
                "c"
            ]
        },
        "quarantinePestDiseseName": {
            "vegetableDisesesName": [
                "a",
                "b",
                "c"
            ],
            "mangoDisesesName": [
                "a",
                "b",
                "c"
            ],
            "betelLeafDisesesName": [
                "a",
                "b",
                "c"
            ]
        },
        "controlMeasures": {
            "techniquesName": [
                "Physical"
            ],
            "isIntegration": true,
            "isIntegrationTwoThree": true
        },
        "organicPesiticide": {
            "vegetableOrganicPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "mangoOrganicPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "betelLeafOrganicPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "otherOrganicPesticde": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ]
        },
        "chemicalPesticide": {
            "vegetableChemicalPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "mangoChemicalPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "betelLeafChemicalPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "otherChemicalPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ]
        },
        "fungicideBactericide": {
            "vegetableFungicideBactericide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "mangoFungicideBactericide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "betelLeafFungicideBactericide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "otherFungicideBactericide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ]
        },
        "insectDiseases": {
            "isIdentify": true,
            "isSuggestionsTaken": false,
            "isPheromoneUsed": true,
            "pheromoneUsedTime": "Before",
            "isCropPheromoneUsed": true,
            "isChemicalPesticideUsed": false,
            "isHormonesUsed": true
        },
        "vegetables": {
            "isTimelyControllingPests": true,
            "isTimelyControllingDiseascs": false,
            "isPheromoneWorked": true,
            "isRegularlyMonitored": true,
            "isBagUsed": true,
            "colorBag": "White"
        },
        "mango": {
            "isProperManagement": true,
            "isBaggingUsed": false,
            "isIPMUsed": true,
            "daysBeforeBagging": 10,
            "isMeaserTake": true,
            "isLodgedBurned": true,
            "isRightAnthracnose": false
        },
        "betelLeaf": {
            "isSalmonellaProtection": false,
            "isChemicalOrganicUsed": true,
            "isPreventingExcretion": false
        },
        "_id": "642900f22b4e778f712df2a9",
        "generalInformationID": "6427fc064310a9504c8be92b",
        "__v": 0
    },
    "message": "Quarantine Pest Diseases Control is found"
}
*/
const getOneById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const quarantinePestDieases = yield (0, quarantine_service_1.findOneQuary)({ _id: id });
        if (!quarantinePestDieases) {
            const error = new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Quarantine Pest Diseases Control is not exist');
            next(error);
        }
        res.ok(quarantinePestDieases, "Quarantine Pest Diseases Control is found");
    }
    catch (error) {
        next(error);
    }
});
exports.getOneById = getOneById;
/**
 *
 * @objective Get One Quarantine Pest Diseases Control By General Information Id
 * @endPoint /api/quarantine-pests-diseases/get-by-general-information-id/:id
 * @method GET
 * @reqParam id
 * @resBody {
    "success": true,
    "code": 200,
    "data": {
        "quarantinePestDieases": {
            "isQuarantinePestDisese": true,
            "isPestRiskAnalysis": false,
            "pestRiskAnalysis": 36
        },
        "quarantineNamePests": {
            "vegetableName": " ",
            "pestsName": [
                "a",
                "b",
                "c"
            ],
            "mangoPestsName": [
                "a",
                "b",
                "c"
            ],
            "betelLeafPestsName": [
                "a",
                "b",
                "c"
            ]
        },
        "quarantinePestDiseseName": {
            "vegetableDisesesName": [
                "a",
                "b",
                "c"
            ],
            "mangoDisesesName": [
                "a",
                "b",
                "c"
            ],
            "betelLeafDisesesName": [
                "a",
                "b",
                "c"
            ]
        },
        "controlMeasures": {
            "techniquesName": [
                "Physical"
            ],
            "isIntegration": true,
            "isIntegrationTwoThree": true
        },
        "organicPesiticide": {
            "vegetableOrganicPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "mangoOrganicPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "betelLeafOrganicPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "otherOrganicPesticde": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ]
        },
        "chemicalPesticide": {
            "vegetableChemicalPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "mangoChemicalPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "betelLeafChemicalPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "otherChemicalPesticide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ]
        },
        "fungicideBactericide": {
            "vegetableFungicideBactericide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "mangoFungicideBactericide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "betelLeafFungicideBactericide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ],
            "otherFungicideBactericide": [
                "2023-03-15",
                "a",
                200,
                "2023-03-20",
                "b",
                200,
                "2023-03-25",
                "c",
                200
            ]
        },
        "insectDiseases": {
            "isIdentify": true,
            "isSuggestionsTaken": false,
            "isPheromoneUsed": true,
            "pheromoneUsedTime": "Before",
            "isCropPheromoneUsed": true,
            "isChemicalPesticideUsed": false,
            "isHormonesUsed": true
        },
        "vegetables": {
            "isTimelyControllingPests": true,
            "isTimelyControllingDiseascs": false,
            "isPheromoneWorked": true,
            "isRegularlyMonitored": true,
            "isBagUsed": true,
            "colorBag": "White"
        },
        "mango": {
            "isProperManagement": true,
            "isBaggingUsed": false,
            "isIPMUsed": true,
            "daysBeforeBagging": 10,
            "isMeaserTake": true,
            "isLodgedBurned": true,
            "isRightAnthracnose": false
        },
        "betelLeaf": {
            "isSalmonellaProtection": false,
            "isChemicalOrganicUsed": true,
            "isPreventingExcretion": false
        },
        "_id": "642900f22b4e778f712df2a9",
        "generalInformationID": "6427fc064310a9504c8be92b",
        "__v": 0
    },
    "message": "Quarantine Pest Diseases Control is found"
}
 */
const getOneByGeneralInformationId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const quarantinePestDieases = yield (0, quarantine_service_1.findOneQuary)({ generalInformationID: id });
        if (!quarantinePestDieases) {
            const error = new errors_1.ApiError((0, responseHandler_1.notFound)(), 'Quarantine Pest Diseases Control is not exist');
            next(error);
        }
        res.ok(quarantinePestDieases, "Quarantine Pest Diseases Control is found");
    }
    catch (error) {
        next(error);
    }
});
exports.getOneByGeneralInformationId = getOneByGeneralInformationId;
