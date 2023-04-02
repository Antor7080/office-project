import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../errors';
import { notFound, unProcessable } from '../../helpers/responseHandler';
import { addQuarantinePestDiseasesControlService, findOneQuary } from './quarantine_service';


/**
 * 
 * @objective Add Quarantine Pest Diseases Control
 * @endPoint /api/quarantine-pests-diseases/add
 * @method POST
 * @reqBody {
    "generalInformationID": "641a968de9fa2fd5a92053c3"
     quarantinePestDieases: {

     };
    quarantineNamePests: {....};
    quarantinePestDiseseName: {...};
    controlMeasures: {...};
    organicPesiticide: {....};
    chemicalPesticide: {....};
    fungicideBactericide: {....};
    insectDiseases: {...};
    vegetables: {....};
    mango: {....};
    betelLeaf: {....};,
}

 */
export const addQuarantinePestDiseasesController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { body } = req;
        const generalInformationID: string = body.generalInformationID;
        const isExist = await findOneQuary({ generalInformationID });
        if (isExist) {
            const error = new ApiError(unProcessable(), 'Quarantine Pest Diseases Control is already exist');
            return next(error);
        }
        const newQuarantinePestDiseasesControl = await addQuarantinePestDiseasesControlService(body);
        res.created(newQuarantinePestDiseasesControl);
    } catch (error) {
        next(error);
    }
}


/** 
 * @objective Get One Quarantine Pest Diseases Control
 * @endPoint /api/quarantine-pests-diseases/get/:id
 * @method GET
 * @reqParam id
 * @resBody {
        "generalInformationID": "641a968de9fa2fd5a92053c3"
     quarantinePestDieases: {

     };
    quarantineNamePests: {....};
    quarantinePestDiseseName: {...};
    controlMeasures: {...};
    organicPesiticide: {....};
    chemicalPesticide: {....};
    fungicideBactericide: {....};
    insectDiseases: {...};
    vegetables: {....};
    mango: {....};
    betelLeaf: {....};
}
*/
export const getOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const quarantinePestDieases = await findOneQuary({ _id: id });
        if (!quarantinePestDieases) {
            const error = new ApiError(notFound(), 'Quarantine Pest Diseases Control is not exist');
            next(error);
        }
        res.ok(quarantinePestDieases, "Quarantine Pest Diseases Control is found")
    } catch (error) {
        next(error);
    }
};


/**
 * 
 * @objective Get One Quarantine Pest Diseases Control By General Information Id
 * @endPoint /api/quarantine-pests-diseases/get-by-general-information-id/:id
 * @method GET
 * @reqParam id
 * @resBody { 
        "generalInformationID": "641a968de9fa2fd5a92053c3"
        quarantinePestDieases: {....}
        quarantineNamePests: {.....}
        quarantinePestDiseseName: {....}
        controlMeasures: {....}
        organicPesiticide: {....}
        chemicalPesticide: {....}
        fungicideBactericide: {....}
        insectDiseases: {....}
        vegetables: {...}
        mango: {.....}
        betelLeaf: {....}
 */
export const getOneByGeneralInformationId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id;
        const quarantinePestDieases = await findOneQuary({ generalInformationID: id });
        if (!quarantinePestDieases) {
            const error = new ApiError(notFound(), 'Quarantine Pest Diseases Control is not exist');
            next(error);
        }
        res.ok(quarantinePestDieases, "Quarantine Pest Diseases Control is found")
    } catch (error) {
        next(error);
    }
};