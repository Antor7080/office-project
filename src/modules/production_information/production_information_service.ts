import IproductionInformation from "./production_information_interface";
import ProductionInformationModel from "./production_information_model";
export const addProductionInformationService = async (information: IproductionInformation):
    Promise<IproductionInformation> => {
    const newInformation = new ProductionInformationModel(information);
    await newInformation.save();
    return newInformation;
};
export const getProductionInformationById = async (id: string): Promise<IproductionInformation | null> => {
    const productionInfo = await ProductionInformationModel.findById(id);
    return productionInfo;
};

export const getOneQuary = async (query: object): Promise<IproductionInformation | null> => {
    const productionInfo = await ProductionInformationModel.findOne(query);
    return productionInfo;
}
// generalInformationID