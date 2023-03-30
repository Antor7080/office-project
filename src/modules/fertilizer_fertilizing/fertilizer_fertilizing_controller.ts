import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors";
import { notFound, unProcessable } from "../../helpers/responseHandler";
import { createFertilizerFertilizing, findOneQuery } from "./fertilizer_fertilizing_services";


/**
 * 
 * @objective Add Fertilizer Fertilizing
 * @endpoint /api/v1/fertilizer-fertilizing/add
 * @method POST
 * @body {generalInformationID, landPreparationFertilizer, fertilizerNameQuantity, fertilizerNamePlant}
 * @response {status, message, data}
 * @description Add Fertilizer Fertilizing 
 * 
 */
export const addFertilizerFertilizing = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.body.generalInformationID;
        const isExsist = await findOneQuery({ generalInformationID });
        if (isExsist) {
            throw new ApiError(unProcessable(), 'Fertilizer Fertilizing Already Exsist')
        }
        const fertilizerFertilizing = await createFertilizerFertilizing(req.body);
        res.created(fertilizerFertilizing, 'Fertilizer Fertilizing Added Successfully')
    } catch (error) {
        next(error)
    }
};

/** 
 * 
 * @objective Get Fertilizer Fertilizing
 * @endpoint /api/v1/fertilizer-fertilizing/get/:id
 * @method GET
 * @response {status, message, data}
 * @description Get Fertilizer Fertilizing
 * 
*/

export const getFertilizerFertilizing = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const fertilizerFertilizing = await findOneQuery({ _id: id });
        if (!fertilizerFertilizing) {
            throw new ApiError(notFound(), 'Fertilizer Fertilizing Not Found')
        }
        res.ok(fertilizerFertilizing, 'Fertilizer Fertilizing Get Successfully')
    } catch (error) {
        next(error)
    }
};