import IInterculturalOperation from './intercultural_operation_interface';
import InterculturalOperation from './intercultural_operation_model';

export const addInterculturalOperationService = async (interculturalOperationInfo: IInterculturalOperation) => {
    const interculturalOperation = new InterculturalOperation(interculturalOperationInfo);
    return await interculturalOperation.save();
};

export const getOneById = async (info: object): Promise<IInterculturalOperation | null> => {
    return await InterculturalOperation.findOne(info);
};


