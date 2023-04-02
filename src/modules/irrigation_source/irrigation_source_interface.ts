import { Document } from "mongoose";

export default interface IIrrigationSource extends Document {
    generalInformationID?: string;
    waterSource: [string];
    pollutionFree: boolean;
    testedSource: boolean;
    infected: boolean;
    isPurifined: boolean;
    purifyingAgent: string;
    localName: string;
    sourceType: string;
    badEffectHuman: boolean;
    isHeavyMetalPresent: boolean;
    irrigationSameTime: boolean;
    differentIrrigationTime: number;
    irrigation1: number;
    irrigation2: number;
    irrigation3: number;
    irrigation4: number;
    irrigation5: number;
    totalIrrigation: number;
    animalRoaming: boolean;
    industryNearBy: boolean;
    sewageWaterUsed: boolean;
    tankDisinfection: boolean;
    takenCooperation: boolean;
    arrigationTime: string;
    suggestionTaken: boolean;
    irrigationMethod: string ;
    poperDrainage: boolean;
    excessWaterDrainage: boolean;
}