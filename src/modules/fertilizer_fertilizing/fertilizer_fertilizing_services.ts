import { IFertilizerFertilizing } from "./fertilizer_fertilizing_interface";
import FertilizerFertilizingModel from "./fertilizer_fertilizing_model";

export const createFertilizerFertilizing = async (fertilizerFertilizing: IFertilizerFertilizing) => {
    const newFertilizerFertilizing = new FertilizerFertilizingModel(fertilizerFertilizing);
    return await newFertilizerFertilizing.save();
};

export const findOneQuery = async (query: object): Promise<IFertilizerFertilizing | null> => {
    const data = await FertilizerFertilizingModel.findOne(query)
    if (!data) return null;
    return data;
};

