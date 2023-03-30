

export default interface IInterculturalOperation extends Document {
    generalInformationID?: string;
    weedingIntercultural: {
        isCleaned: boolean;
        timelyWeeding: boolean;
        primarilyWeeded: boolean;
        productionLevelCleaned: boolean;
        purifingAgentUsed: boolean;
        treatedChemicalName: string;
    };
    vegetable: {
        vegetableCultivation: boolean;
        mulchingPaperUsed: boolean;
        supportUsed: boolean;
        lightAndAir: boolean;
        animalProtection: boolean;
        isEggPlant: boolean;
        fenceUsed: boolean;
        wasteManagement: boolean;
    };
    mango: {
        deadStemRemoved: boolean;
        doesClean: boolean;
        hormoneUsed: boolean;
        mulchingPaperUsedMango: boolean;
        fenceUsedMango: boolean;
    };
    betelLeaf: {
        landShadowNotDamp: boolean;
        supportUsedBetel: boolean;
        animalProtectionBetel: boolean;
        prohibitedEntry: boolean;
    };
}