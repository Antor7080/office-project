import { ICropsHarvesting } from './crops_hervesting_interface';
import CropsHarvesting from './crops_hervesting_model';

/**
 * @objective add new crops harvesting
 * @param iropsHarvestingInfo
 * @returns ICropsHarvesting
 * */
export const addCropsHarvestingService = async (iropsHarvestingInfo: ICropsHarvesting): Promise<ICropsHarvesting> => {
    const cropsHarvesting = new CropsHarvesting(iropsHarvestingInfo);
    return await cropsHarvesting.save();
};

/**
 * @objective get all crops harvesting
 * @returns ICropsHarvesting[]
 * 
 */
export const findOneCropsHarvesting = async (query: object): Promise<ICropsHarvesting | null> => {
    const cropsHarvesting = await CropsHarvesting.findOne(query);
    return cropsHarvesting;
}