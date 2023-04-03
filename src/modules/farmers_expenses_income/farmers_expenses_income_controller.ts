import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors";
import { notFound, unProcessable } from "../../helpers/responseHandler";
import { addFarmersExpensesIncome, findOneQuary } from "./farmers_expenses_income_service";

/** 
 * @objective Create Farmers Expenses Income
 * @endpoint /api/v1/farmers-expenses-income/add
 * @method POST
 * @reqBody 
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