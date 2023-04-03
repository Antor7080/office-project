import { IPersonalWokerHygiene } from './personal_worker_hygiene_interface';
import PersonalWorkerHygiene from './personal_worker_hygiene_model';

export const addPersonalWorkerHygiene = async (personalWorkerHygiene: IPersonalWokerHygiene): Promise<IPersonalWokerHygiene> => {
    const newPersonalWorkerHygiene = new PersonalWorkerHygiene(personalWorkerHygiene);
    return newPersonalWorkerHygiene.save();
};

export const findOneQuary = async (query: object): Promise<IPersonalWokerHygiene | null> => {
    return await PersonalWorkerHygiene.findOne(query);
}