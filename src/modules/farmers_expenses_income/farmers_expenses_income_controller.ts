import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors";
import { notFound, unProcessable } from "../../helpers/responseHandler";
import { addFarmersExpensesIncome, findOneQuary } from "./farmers_expenses_income_service";

/** 
 * @objective Create Farmers Expenses Income
 * @endpoint /api/v1/farmers-expenses-income/add
 * @method POST
 * @reqBody {
    "generalInformationID": "6427fc064310a9504c8be92b",
    "leaseCost": 1000,
    "soilTestCost": 1000,
    "landPreparationCost": 500,
    "seedCost": 500,
    "fertilizerCost": 2000,
    "irrigationCost": 1000,
    "laborCost": 5000,
    "otherCost": 1000,
    "totalCost": 12000,
    "totalProduction": 100,
    "totalSale": 20000,
    "totalProfit": 8000
};
    * @Resbody {
    "success": true,
    "code": 201,
    "data": {
        "generalInformationID": "6427fc064310a9504c8be92b",
        "leaseCost": 1000,
        "soilTestCost": 1000,
        "landPreparationCost": 500,
        "seedCost": 500,
        "fertilizerCost": 2000,
        "irrigationCost": 1000,
        "laborCost": 5000,
        "otherCost": 1000,
        "totalCost": 12000,
        "totalProduction": 100,
        "totalSale": 20000,
        "totalProfit": 8000,
        "_id": "642ba5af008d8c1d8f18fcae",
        "createdAt": "2023-04-04T04:21:03.325Z",
        "updatedAt": "2023-04-04T04:21:03.325Z",
        "__v": 0
    },
    "message": "Farmers Expenses Income created successfully"
}
*/

export const addFarmersExpensesIncomeController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.body.generalInformationID;
        const isExist = await findOneQuary({ generalInformationID });
        if (isExist) {
            throw new ApiError(unProcessable(), "Farmers Expenses Income already exist");
        }
        const newFarmersExpensesIncome = await addFarmersExpensesIncome(req.body);
        res.created(newFarmersExpensesIncome, "Farmers Expenses Income created successfully");
    } catch (error) {
        next(error);
    }
};


/**
 * 
 * @objective Get Farmers Expenses Income by generalInformationID
 * @endpoint /api/v1/farmers-expenses-income/get-by-general-info-id/:generalInformationID
 * @method GET
 * @param generalInformationID
 * @resBody {
    "success": true,
    "code": 200,
    "data": {
        "_id": "642ba5af008d8c1d8f18fcae",
        "generalInformationID": "6427fc064310a9504c8be92b",
        "leaseCost": 1000,
        "soilTestCost": 1000,
        "landPreparationCost": 500,
        "seedCost": 500,
        "fertilizerCost": 2000,
        "irrigationCost": 1000,
        "laborCost": 5000,
        "otherCost": 1000,
        "totalCost": 12000,
        "totalProduction": 100,
        "totalSale": 20000,
        "totalProfit": 8000,
        "createdAt": "2023-04-04T04:21:03.325Z",
        "updatedAt": "2023-04-04T04:21:03.325Z",
        "__v": 0
    },
    "message": "Farmers Expenses Income found successfully"
}
 */
export const getInfoByGeneralInfoId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.params.generalInformationID;
        const farmersExpensesIncome = await findOneQuary({ generalInformationID });
        if (!farmersExpensesIncome) {
            throw new ApiError(unProcessable(), "Farmers Expenses Income not found");
        }
        res.ok(farmersExpensesIncome, "Farmers Expenses Income found successfully");
    } catch (error) {
        next(error);
    }
};


/**
 * 
 * @objective Get Farmers Expenses Income by id
 * @endpoint /api/v1/farmers-expenses-income/get/:id
 * @method GET
 * @param id
 * @resBody {
    "success": true,
    "code": 200,
    "data": {
        "_id": "642ba5af008d8c1d8f18fcae",
        "generalInformationID": "6427fc064310a9504c8be92b",
        "leaseCost": 1000,
        "soilTestCost": 1000,
        "landPreparationCost": 500,
        "seedCost": 500,
        "fertilizerCost": 2000,
        "irrigationCost": 1000,
        "laborCost": 5000,
        "otherCost": 1000,
        "totalCost": 12000,
        "totalProduction": 100,
        "totalSale": 20000,
        "totalProfit": 8000,
        "createdAt": "2023-04-04T04:21:03.325Z",
        "updatedAt": "2023-04-04T04:21:03.325Z",
        "__v": 0
    },
    "message": "Farmers Expenses Income found successfully"
}
 */
export const getInfoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const _id: string = req.params._id;
        const farmersExpensesIncome = await findOneQuary({ _id });
        if (!farmersExpensesIncome) {
            throw new ApiError(notFound(), "Farmers Expenses Income not found");
        }
        res.ok(farmersExpensesIncome, "Farmers Expenses Income found successfully");
    } catch (error) {
        next(error);
    }
}