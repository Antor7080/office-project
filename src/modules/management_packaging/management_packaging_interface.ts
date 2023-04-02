export interface IManagementPackaging {
    generalInformationID?: string;
    centerPackaging: ICenterPackaging;
    temperatureControl: ITemperatureControl;
    vegetables: IVegetables;
    betelLeaf: IBetelLeaf;
    mango: IMango;
    inspection: IInspection;
    finalPackaging: IFinalPackaging;
    
}

interface ICenterPackaging {
    transportationType: string;
    isInspection: boolean;
    isWashingRoom: boolean;
    isDryByFan: boolean;
    isFinalFacilites: boolean,
    isTamperatureControl: boolean,
    isBacterialContainment: boolean,
    isHygienicPractices: boolean,
    isHygienicIsolatedRoom: boolean,
    isHygienicArrivalExit: boolean,
};
interface ITemperatureControl {
    isAppropriateTemperature: boolean;
    vegetables: number;
    betelLeaf: number;
    mango: number;
};
interface IVegetables {
    isCleaningMethod: boolean;
    isColdWaterTreatment: boolean;
    isChlorineted: boolean;
};
interface IBetelLeaf {
    isCleaningMethod: boolean;
    isChlorineted: boolean;
    washedWith: string;
    treatedTime: number;
    isWashDistilledWater: boolean;
    isDryUnderFan: boolean;
};

interface IMango {
    isBagging: boolean;
    baggingType: string;
    isBoiledWaterCleaning: boolean;
    treatedTemperature: number;
    isDryUnderFan: boolean;
};

interface IInspection {
    isInspectionByOfficer: boolean;
    isNoInsect: boolean;
    isCertified: boolean;
    certificateDate: Date | string;
};
interface IFinalPackaging {
    packagingType: string;
    consumerDemandPackaging: boolean;
    isMicrobialTest: boolean;
    packagingMaterial: string;
    isPaperWrapped: boolean;
    isVentilation: boolean;
    isDryIceUsed: boolean;
    isDistilledMade: boolean;
    storedTime: number;
    vanType: string;
    routeType: string;
    isTemperatureControlRoom: boolean;
    isPhytoSanitaryCertificate: boolean;
    isLebeling: boolean;
    exportedCountry: string;
    exporterName: string;
    exportedDate: Date | string;
    importerName: string;
    isRejected: boolean;
    rejectedReason: string;


}