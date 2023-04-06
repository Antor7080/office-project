import IInterculturalOperation from './intercultural_operation_interface';
import InterculturalOperation from './intercultural_operation_model';


/**
 * @objective add new intercultural operation
 * @param interculturalOperationInfo 
 * @returns 
 */
export const addInterculturalOperationService = async (interculturalOperationInfo: IInterculturalOperation) => {
    const interculturalOperation = new InterculturalOperation(interculturalOperationInfo);
    return await interculturalOperation.save();
};

/**
 * @objective get one intercultural operation
 * @returns
 */
export const getOneById = async (info: object): Promise<IInterculturalOperation | null> => {
    return await InterculturalOperation.findOne(info);
};


