import { IGenarelInformation } from './genarel_information_interface';
import GenarelInformation from './genarel_information_model';
export const addGeneralInformationService = (information: IGenarelInformation): IGenarelInformation => {
    const newInformation = new GenarelInformation(information);
    newInformation.save();
    return newInformation;
};
export const getGeneralInformationService = (): Promise<IGenarelInformation[]> => {
    const allInformation = GenarelInformation.find({});
    return allInformation;
};
/**
 * 
 * @param id  get general information by id
 * @returns 
 */
export const getGeneralInformationByIDService = async (id: string): Promise<IGenarelInformation | null> => {
    const allInformation = await GenarelInformation.findById(id);
    if (!allInformation) {
        return null;
    }
    return allInformation;
};