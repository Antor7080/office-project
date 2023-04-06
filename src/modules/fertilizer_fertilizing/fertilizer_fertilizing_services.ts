import { IFertilizerFertilizing } from "./fertilizer_fertilizing_interface";
import FertilizerFertilizingModel from "./fertilizer_fertilizing_model";


/**
 * @objective add new fertilizer fertilizing
 * @param fertilizerFertilizing 
 * @returns IFertilizerFertilizing
 */
export const createFertilizerFertilizing = async (fertilizerFertilizing: IFertilizerFertilizing) => {
    const newFertilizerFertilizing = new FertilizerFertilizingModel(fertilizerFertilizing);
    return await newFertilizerFertilizing.save();
};

/**
 * @objective get one fertilizer fertilizing
 * @param query
 * @returns IFertilizerFertilizing | null
 * 
 */
export const findOneQuery = async (query: object): Promise<IFertilizerFertilizing | null> => {
    const data = await FertilizerFertilizingModel.findOne(query)
    if (!data) return null;
    return data;
};

