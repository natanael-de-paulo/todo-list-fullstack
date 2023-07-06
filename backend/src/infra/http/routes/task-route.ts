import CreateTaskControllerFactory from '../../../app/task/controllers/factories/create-task-controller-factory';
import { Router } from '../config';

export const taskRouter = Router()

taskRouter
  .route('/:userId/tasks')
  .post(CreateTaskControllerFactory)