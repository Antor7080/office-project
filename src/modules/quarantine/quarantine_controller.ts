import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../errors';
import { notFound, unProcessable } from '../../helpers/responseHandler';
import { addQuarantinePestDiseasesControlService, findOneQuary } from './quarantine_service';


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
export const addQuarantinePestDiseasesController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { body } = req;
        const generalInformationID: string = body.generalInformationID;
        const isExist = await findOneQuary({ generalInformationID });
        if (isExist) {
            const error = new ApiError(unProcessable(), 'Quarantine Pest Diseases Control is already exist');
            return next(error);
        }
        const newQuarantinePestDiseasesControl = await addQuarantinePestDiseasesControlService(body);
        res.created(newQuarantinePestDiseasesControl);
    } catch (error) {
        next(error);
    }
}


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
export const getOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const quarantinePestDieases = await findOneQuary({ _id: id });
        if (!quarantinePestDieases) {
            const error = new ApiError(notFound(), 'Quarantine Pest Diseases Control is not exist');
            next(error);
        }
        res.ok(quarantinePestDieases, "Quarantine Pest Diseases Control is found")
    } catch (error) {
        next(error);
    }
};


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
export const getOneByGeneralInformationId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const quarantinePestDieases = await findOneQuary({ generalInformationID: id });
        if (!quarantinePestDieases) {
            const error = new ApiError(notFound(), 'Quarantine Pest Diseases Control is not exist');
            next(error);
        }
        res.ok(quarantinePestDieases, "Quarantine Pest Diseases Control is found")
    } catch (error) {
        next(error);
    }
};