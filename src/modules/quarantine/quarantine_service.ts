import { IQuarantinePestDiseasesControl } from "./quarantine_interface";
import quarantinePestDiseseControlSchema from "./quarantine_model";

export const addQuarantinePestDiseasesControlService = async (quarantinePestDiseasesControl: IQuarantinePestDiseasesControl): Promise<IQuarantinePestDiseasesControl> => {
    const newQuarantinePestDiseasesControl = new quarantinePestDiseseControlSchema(quarantinePestDiseasesControl);
    await newQuarantinePestDiseasesControl.save();
    return newQuarantinePestDiseasesControl;
};

export const findOneQuary = async (query: object): Promise<IQuarantinePestDiseasesControl | null> => {
    const quarantinePestDieases = quarantinePestDiseseControlSchema.findOne(query);
    return quarantinePestDieases;
};