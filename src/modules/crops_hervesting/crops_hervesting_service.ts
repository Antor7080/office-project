import { ICropsHarvesting } from './crops_hervesting_interface';
import CropsHarvesting from './crops_hervesting_model';

export const addCropsHarvestingService = async (iropsHarvestingInfo: ICropsHarvesting): Promise<ICropsHarvesting> => {
    const cropsHarvesting = new CropsHarvesting(iropsHarvestingInfo);
    return await cropsHarvesting.save();
};

export const findOneCropsHarvesting = async (query: object): Promise<ICropsHarvesting | null> => {
    const cropsHarvesting = await CropsHarvesting.findOne(query);
    return cropsHarvesting;
}