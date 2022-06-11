import express, { Router } from 'express';
import { getPersonalizationController } from '../controllers/personalization.controller';
import { getQueryController } from '../controllers/query.controller';

const mainRouter: Router = express.Router();

mainRouter.get('/query', getQueryController);
mainRouter.get('/personalization', getPersonalizationController);

export default mainRouter;