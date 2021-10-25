import { Router } from 'express';
import {
  createSiteController,
  deleteSiteController, getAllSitesController, getSiteByIDController, updateSiteController,
} from './controller';

const sites = Router();

sites.get('/', getAllSitesController)
  .post('/', createSiteController)
  .get('/:id', getSiteByIDController)
  .put('/:id', updateSiteController)
  .delete('/:id', deleteSiteController);

export default sites;
