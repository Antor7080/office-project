import IproductionInformation from "./production_information_interface";
import ProductionInformationModel from "./production_information_model";

/**
 * @objective add new production information
 * @param information 
 * @returns 
 */
export const addProductionInformationService = async (information: IproductionInformation):
    Promise<IproductionInformation> => {
    const newInformation = new ProductionInformationModel(information);
    await newInformation.save();
    return newInformation;
};

/**
 * @objective get all one information
 * @param query 
 * @returns 
 */
export const getOneQuary = async (query: object): Promise<IproductionInformation | null> => {
    const productionInfo = await ProductionInformationModel.findOne(query);
    return productionInfo;
}
// generalInformationID