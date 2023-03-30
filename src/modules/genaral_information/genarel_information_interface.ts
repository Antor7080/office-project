import { Document } from "mongoose";
export interface IGenarelInformation extends Document {
    framLocationAndCode: IframLocationAndCode,
    farmingSystem: IfarmingSystem,
    FarmerInformation: FarmerInformation,
    farmerType: IfarmerType,
    siteSelection: IsiteSelection,
    contratedLandCropInfo: IcontratedLandCropInfo,
    soilType: IsoilType,
    _id?: string;
}

interface IfarmerType {
    type: string;
    ownedLand: number;
    lease: number;
    totalLand: number;
};
interface IsiteSelection {
    info1: boolean;
    info2: boolean;
    info3: boolean;
    info4: boolean;
    info5: boolean;
    info6: boolean;
    info7: boolean;
    info8: boolean;
    sourceOfWater: [string]
    info9: boolean;
};

interface FarmerInformation {
    farmerName: string;
    framProfileCode: number;
    farmerVillage: string;
    farmerUpzilla: string;
    farmerUnion: string;
    farmerDistrict: string;
};

interface IsoilType {
    soilName: string;
    soilPH: number;
    croppedType: string;
    previousCrop: string;
    cultivationType: string;
    AEZ: number;
};

interface IframLocationAndCode {
    groupCodeNo: number | string;
    farmCode: number | string;
    mouja: string;
    village: string;
    union: string;
    upzilla: string;
    district: string;
};
interface IfarmingSystem {
    system: string;
    totalFarmers: number;
    leaderName: string;
    groupTotalLand: number;
};
interface IcontratedLandCropInfo {
    cantractLand: number;
    productionMethod: string;
    vegetables: Array<string>;
}
