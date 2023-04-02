import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../errors';
import { notFound, unProcessable } from '../../helpers/responseHandler';
import { IManagementPackaging } from './management_packaging_interface';
import { addService, findOneService } from './management_packaging_service';


/** 
 * 
 * @objective: add management packaging
 * @endpoint: /api/v1/management-packaging/add
 * @method: POST
 * @
 * reqbody: { 
    generalInformationID: "83487yuedhjwh9",
    centerPackaging: {.....}, 
    temperatureControl: {.....},
    vegetables: {.....},
    betelLeaf: {.....},
    mango: {.....},
    inspection: {.....},
    finalPackaging: {.....}

     }
 * 
*/
export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.body.generalInformationID;
        const isExsists = await findOneService({ generalInformationID });
        if (isExsists) {
            return next(new ApiError(unProcessable(), 'Management Packaging already exsists'));
        }
        const managementPackaging: IManagementPackaging = await addService(req.body);
        res.created(managementPackaging, "Management Packaging added successfully");
    } catch (error) {
        next(error);
    }
};

/**
 * 
 * @objective: get management packaging
 * @endpoint: /api/v1/management-packaging/get
 * @method: GET
 * params: { id: "83487yuedhjwh9" }
 * resbody: {
  id: "83487yuedhjwh9",
    centerPackaging: {.....}, 
    temperatureControl: {.....},
    vegetables: {.....},
    betelLeaf: {.....},
    mango: {.....},
    inspection: {.....},
    finalPackaging: {.....}

 * }
 */

export const getOneById = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    try {
        const managementPackaging: IManagementPackaging | null = await findOneService({ _id: id });
        if (!managementPackaging) {
            return next(new ApiError(notFound(), 'Management Packaging not found'));
        }
        res.ok(managementPackaging, "Management Packaging found successfully");
    } catch (error) {
        next(error);
    }
};

/** 
 * 
 * @objective: get management packaging by general information id
 * @endpoint: /api/v1/management-packaging/get-by-general-information-id/:id
 * @method: GET
 * params: { id: "83487yuedhjwh9" }
 * resbody: {
 *  generalInformationID: "83487yuedhjwh9",
    centerPackaging: {.....}, 
    temperatureControl: {.....},
    vegetables: {.....},
    betelLeaf: {.....},
    mango: {.....},
    inspection: {.....},
    finalPackaging: {.....}

 * }
 * 
*/

export const getOneByGeneralInformationId = async (req: Request, res: Response, next: NextFunction) => {
    const generalInformationID: string = req.params.id;
    try {
        const managementPackaging: IManagementPackaging | null = await findOneService({ generalInformationID });
        if (!managementPackaging) {
            return next(new ApiError(notFound(), 'Management Packaging not found'));
        }
        res.ok(managementPackaging, "Management Packaging found successfully");
    } catch (error) {
        next(error);
    }
}