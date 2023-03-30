import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../errors';
import { notFound } from '../../helpers/responseHandler';
import { IGenarelInformation } from './genarel_information_interface';
import { addGeneralInformationService, findOneQuery, getGeneralInformationService } from './genarel_information_services';

export const addGeneralInformation = (req: Request, res: Response, next: NextFunction) => {
    try {
        const newGenarelInformation: IGenarelInformation = addGeneralInformationService(req.body);
        res.created(newGenarelInformation, 'General Information Added Successfully')
    } catch (error) {
        next(error)
    }
};

export const getGeneralInformation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allGenarelInformation: Array<IGenarelInformation> = await getGeneralInformationService();
        res.ok(allGenarelInformation, 'General Information Get Successfully')
    } catch (error) {
        next(error)
    }
};

export const getGeneralInformationById = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    try {
        const allGenarelInformation: IGenarelInformation | null = await findOneQuery({ _id: id });
        if (!allGenarelInformation) {
            throw new ApiError(notFound(), 'General Information Not Found')
        }
        res.ok(allGenarelInformation, 'General Information Get Successfully')
    } catch (error) {
        next(error)
    }
};