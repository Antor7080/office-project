import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors";
import { notFound, unProcessable } from "../../helpers/responseHandler";
import { addPersonalWorkerHygiene, findOneQuary } from "./personal_worker_hygiene_service";


/**
 * @objective Create Personal Worker Hygiene
 * @endpoint /api/v1/personal-worker-hygiene/add
 * @method POST
 * @reqBody
 */

export const addPersonalWorkerHygieneController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.body.generalInformationID;
        const isExist = await findOneQuary({ generalInformationID });
        if (isExist) {
            throw new ApiError(unProcessable(), "Personal Worker Hygiene already exist");
        }
        const newPersonalWorkerHygiene = await addPersonalWorkerHygiene(req.body);
        res.created(newPersonalWorkerHygiene);
    } catch (error) {
        next(error);
    }
};

export const getInfoByGeneralInfoId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generalInformationID: string = req.params.generalInformationID;
        const personalWorkerHygiene = await findOneQuary({ generalInformationID });
        if (!personalWorkerHygiene) {
            throw new ApiError(unProcessable(), "Personal Worker Hygiene not found");
        }
        res.ok(personalWorkerHygiene, "Personal Worker Hygiene found successfully");
    } catch (error) {
        next(error);
    }
};

export const getInfoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const _id: string = req.params._id;
        const personalWorkerHygiene = await findOneQuary({ _id });
        if (!personalWorkerHygiene) {
            throw new ApiError(notFound(), "Personal Worker Hygiene not found");
        }
        res.ok(personalWorkerHygiene, "Personal Worker Hygiene found successfully");
    } catch (error) {
        next(error);
    }
}
