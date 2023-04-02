import mongoose, { Schema } from 'mongoose';
import IIrrigationSource from './irrigation_source_interface';

const IrrigationSourceSchema: Schema = new mongoose.Schema<IIrrigationSource>({
    generalInformationID: {
        type: Schema.Types.ObjectId,
    },
    waterSource: {
        type: [String],
        enum: ['River', 'TubeWell', 'Pond', 'RainWater', 'Municipality', 'DeepTubeWell']
    },
    pollutionFree: {
        type: Boolean,

    },
    testedSource: {
        type: Boolean,

    },
    infected: {
        type: Boolean,

    },
    isPurifined: {
        type: Boolean,

    },
    purifyingAgent: {
        type: String,
    },
    localName: {
        type: String,
    },
    sourceType: {
        type: String,
    },
    badEffectHuman: {
        type: Boolean,

    },
    isHeavyMetalPresent: {
        type: Boolean,

    },
    irrigationSameTime: {
        type: Boolean,

    },
    differentIrrigationTime: {
        type: Number,
    },
    irrigation1: {
        type: Number,
    },
    irrigation2: {
        type: Number,
    },
    irrigation3: {
        type: Number,
    },
    irrigation4: {
        type: Number,
    },
    irrigation5: {
        type: Number,
    },
    totalIrrigation: {
        type: Number,
    },
    animalRoaming: {
        type: Boolean,

    },
    industryNearBy: {
        type: Boolean,

    },
    sewageWaterUsed: {
        type: Boolean,

    },
    tankDisinfection: {
        type: Boolean,

    },
    takenCooperation: {
        type: Boolean,

    },
    arrigationTime: {
        type: String,
        enum: ['Morning', 'Evening', 'Noon']

    },
    suggestionTaken: {
        type: Boolean,

    },
    irrigationMethod: {
        type: String,

    },
    poperDrainage: {
        type: Boolean,

    },
    excessWaterDrainage: {
        type: Boolean,

    },
});

const IrrigationSource = mongoose.model<IIrrigationSource>('IrrigationSource', IrrigationSourceSchema);

export default IrrigationSource;