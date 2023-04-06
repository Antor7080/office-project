import { IQuarantinePestDiseasesControl } from "./quarantine_interface";
import quarantinePestDiseseControlSchema from "./quarantine_model";


/**
 * @objective add new quarantine pest diseases control
 * @param quarantinePestDiseasesControl 
 * @returns 
 */
export const addQuarantinePestDiseasesControlService = async (quarantinePestDiseasesControl: IQuarantinePestDiseasesControl): Promise<IQuarantinePestDiseasesControl> => {
    const newQuarantinePestDiseasesControl = new quarantinePestDiseseControlSchema(quarantinePestDiseasesControl);
    await newQuarantinePestDiseasesControl.save();
    return newQuarantinePestDiseasesControl;
};

/**
 * @objective get one quarantine pest diseases control
 * @param query 
 * @returns 
 */
export const findOneQuary = async (query: object): Promise<IQuarantinePestDiseasesControl | null> => {
    const quarantinePestDieases = quarantinePestDiseseControlSchema.findOne(query);
    return quarantinePestDieases;
};