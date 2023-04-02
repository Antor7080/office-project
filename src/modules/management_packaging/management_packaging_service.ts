import { IManagementPackaging } from './management_packaging_interface';
import ManagementPackaging from './management_packaging_model';

export const addService = async (data: IManagementPackaging): Promise<IManagementPackaging> => {
    const managementPackaging = new ManagementPackaging(data);
    return await managementPackaging.save();

};
export const findOneService = async (quary: object): Promise<IManagementPackaging | null> => {
    return await ManagementPackaging.findOne(quary);
};
