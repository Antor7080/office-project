import { IPersonalWokerHygiene } from './personal_worker_hygiene_interface';
import PersonalWorkerHygiene from './personal_worker_hygiene_model';


/**
 * @objective add new personal worker hygiene
 * @param personalWorkerHygiene 
 * @returns 
 */
export const addPersonalWorkerHygiene = async (personalWorkerHygiene: IPersonalWokerHygiene): Promise<IPersonalWokerHygiene> => {
    const newPersonalWorkerHygiene = new PersonalWorkerHygiene(personalWorkerHygiene);
    return newPersonalWorkerHygiene.save();
};


/**
 * @objective get one personal worker hygiene
 * @param query 
 * @returns 
 */
export const findOneQuary = async (query: object): Promise<IPersonalWokerHygiene | null> => {
    return await PersonalWorkerHygiene.findOne(query);
}