import express, { Router } from 'express';
import { getPersonalizationController } from '../controllers/personalization.controller';
import { getQueryController, mockSuccessQueryController } from '../controllers/query.controller';

const mainRouter: Router = express.Router();

mainRouter.get('/query', getQueryController);
mainRouter.get('/personalization', getPersonalizationController);
mainRouter.get('/mockResult', mockSuccessQueryController);

export default mainRouter;