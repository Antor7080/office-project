
import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../errors';
import { notFound, unProcessable } from '../../helpers/responseHandler';
import { addCropsHarvestingService, findOneCropsHarvesting } from './crops_hervesting_service';

/** 
 * @objective Add Crops Harvesting
 * @endPoint /api/crops-harvesting/add
 * @method POST
 * @reqBody {
    "generalInformationID": "641a968de9fa2fd5a92053c3"
    "fieldSanitation": {...};
    "harvestField": {...};
    "vegetables": {...};
    "mango": {...};
    "betelLeaf": {...};
    "localCollectionCenter": {...};
};
* @resBody {
     "generalInformationID": "641a968de9fa2fd5a92053c3"
    "fieldSanitation": {...};
    "harvestField": {...};
    "vegetables": {...};
    "mango": {...};
    "betelLeaf": {...};
    "localCollectionCenter": {...};
}
 */
export const addCropsHarvestingController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { body } = req;
        const generalInformationID: string = body.generalInformationID;
        const isExist = await findOneCropsHarvesting({ generalInformationID });
        if (isExist) {
            const error = new ApiError(unProcessable(), 'Crops Harvesting is already exist');
            return next(error);
        }
        const newCropsHarvesting = await addCropsHarvestingService(body);
        res.created(newCropsHarvesting, 'Crops Harvesting added successfully');
    } catch (error) {
        next(error);
    }
};

/** 
 * @objective Get One Crops Harvesting
 * @endPoint /api/crops-harvesting/get/:id
 * @method GET
 * @reqParam id
 * @resBody {
  "generalInformationID": "641a968de9fa2fd5a92053c3"
    "fieldSanitation": {...};
    "harvestField": {...};
    "vegetables": {...};
    "mango": {...};
    "betelLeaf": {...};
    "localCollectionCenter": {...};}

 */
export const getOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { params } = req;
        const { id } = params;
        const cropsHarvesting = await findOneCropsHarvesting({ _id: id });
        if (!cropsHarvesting) {
            const error = new ApiError(notFound(), 'Crops Harvesting not found');
            return next(error);
        }
        res.ok(cropsHarvesting, 'Crops Harvesting found successfully');
    } catch (error) {
        next(error);
    }
};

/** 
 * @objective get one Crops Harvesting by generalInformationID
 * @endPoint /api/crops-harvesting/get-by-general-information-id/:id
 * @method GET
 * @reqParam id
 * @resBody {
 *
  "generalInformationID": "641a968de9fa2fd5a92053c3"
    "fieldSanitation": {...};
    "harvestField": {...};
    "vegetables": {...};
    "mango": {...};
    "betelLeaf": {...};
    "localCollectionCenter": {...};
}
*/
export const getOneByGeneralInformationId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { params } = req;
        const { id } = params;
        const cropsHarvesting = await findOneCropsHarvesting({ generalInformationID: id });
        if (!cropsHarvesting) {
            const error = new ApiError(notFound(), 'Crops Harvesting not found');
            return next(error);
        }
        res.ok(cropsHarvesting, 'Crops Harvesting found successfully');
    } catch (error) {
        next(error);
    }
};