import IInterculturalOperation from './intercultural_operation_interface';
import InterculturalOperation from './intercultural_operation_model';

export const addInterculturalOperationService = async (interculturalOperationInfo: IInterculturalOperation) => {
    const interculturalOperation = new InterculturalOperation(interculturalOperationInfo);
    return await interculturalOperation.save();
};

export const getInterculturalOperationById = async (id: string): Promise<IInterculturalOperation | null> => {
    return await InterculturalOperation.findById(id);
};

export const getInterculturalOperationByGeneralInformationID = async (generalInformationID: string): Promise<IInterculturalOperation | null> => {
    return await InterculturalOperation.findOne({ generalInformationID });
};
