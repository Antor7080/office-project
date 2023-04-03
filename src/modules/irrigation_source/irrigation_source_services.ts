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
export const findOneQuery = async (info: object): Promise<IIrrigationSource | null> => {
    return await IrrigationSource.findOne(info);
};

