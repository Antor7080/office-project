import IIrrigationSource from './irrigation_source_interface';
import IrrigationSource from './irrigation_source_model';

/**
 * 
 * @param irrigationSourceInfo 
 * @returns 
 */
export const addIrrigationSource = async (irrigationSourceInfo: IIrrigationSource): Promise<IIrrigationSource> => {
    const newIrrigationSource = new IrrigationSource(irrigationSourceInfo);
    await newIrrigationSource.save();
    return newIrrigationSource;
};

/** \
 * 
 * @param generalInformationID
 * @returns
*/
export const getIrrigationSourceByGeneralInformationID = async (generalInformationID: string): Promise<IIrrigationSource | null> => {
    return await IrrigationSource.findOne({ generalInformationID });
};

/** 
 * 
 * @param id
 * @returns
*/
export const getleIrrigationSourceByID = async (id: string): Promise<IIrrigationSource | null> => {
    return await IrrigationSource.findById(id);
};