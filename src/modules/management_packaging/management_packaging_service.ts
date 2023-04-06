import { IManagementPackaging } from './management_packaging_interface';
import ManagementPackaging from './management_packaging_model';


/**
 * @objective add new management packaging
 * @param data 
 * @returns 
 */
export const addService = async (data: IManagementPackaging): Promise<IManagementPackaging> => {
    const managementPackaging = new ManagementPackaging(data);
    return await managementPackaging.save();

};

/** 
 * 
 * @objective get one management packaging
 * @param quary 
 * @returns
*/
export const findOneService = async (quary: object): Promise<IManagementPackaging | null> => {
    return await ManagementPackaging.findOne(quary);
};
