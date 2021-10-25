import { Router } from 'express';
import {
  getAllProjectsController,
  createProjectController,
  getProjectByIdController,
  updateProjectController,
  deleteProjectController,
  saveCodeController,
} from './controller';

// write get,post,put,delete apis for projects

const projects = Router();

projects.get('/', getAllProjectsController)
  .post('/', createProjectController)
  .post('/saveCode', saveCodeController)
  .get('/:id', getProjectByIdController)
  .put('/:id', updateProjectController)
  .delete('/:id', deleteProjectController);

export default projects;
