import { IGenarelInformation } from './genarel_information_interface';
import GenarelInformation from './genarel_information_model';


/**
 * @objective add new general information
 * @param information
 * @returns IGenarelInformation
 */
export const addGeneralInformationService = (information: IGenarelInformation): IGenarelInformation => {
    const newInformation = new GenarelInformation(information);
    newInformation.save();
    return newInformation;
};

/**
 * @objective get all general information
 * @returns
 */
export const getGeneralInformationService = (): Promise<IGenarelInformation[]> => {
    const allInformation = GenarelInformation.find({});
    return allInformation;
};
/**
 * @objective get one general information
 * @param  query
 * @returns 
 */
export const findOneQuery = async (query: object): Promise<IGenarelInformation | null> => {
    const allInformation = await GenarelInformation.findOne(query);
    if (!allInformation) {
        return null;
    }
    return allInformation;
};