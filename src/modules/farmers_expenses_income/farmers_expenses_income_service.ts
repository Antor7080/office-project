import { IFarmersExpensesIncome } from "../farmers_expenses_income/farmers_expenses_income_interface";
import FarmersExpensesIncomeModel from "./farmers_expenses_income_model";

/**
 * @objective add new farmers expenses income
 * @param farmersExpensesIncome 
 * @returns 
 */
export const addFarmersExpensesIncome = async (farmersExpensesIncome: IFarmersExpensesIncome): Promise<IFarmersExpensesIncome> => {
    const newFarmersExpensesIncome = new FarmersExpensesIncomeModel(farmersExpensesIncome);
    return await newFarmersExpensesIncome.save();
}

/**
 * @objective get one farmers expenses income
 * @param query
 * @returns 
 */
export const findOneQuary = async (query: object): Promise<IFarmersExpensesIncome | null> => {
    return await FarmersExpensesIncomeModel.findOne(query);
}