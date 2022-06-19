import { Request, Response } from 'express';

export const getPersonalizationController = (
  req: Request,
  res: Response,
  next: any
) => {
  res.send('Featured being implemented, please wait');
};
