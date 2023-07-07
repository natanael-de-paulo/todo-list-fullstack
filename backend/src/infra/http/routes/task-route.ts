import CreateTaskControllerFactory from '../../../app/task/controllers/factories/create-task-controller-factory';
import DeleteTaskControllerFactory from '../../../app/task/controllers/factories/delete-task-controller-factory';
import GetTaskControllerFactory from '../../../app/task/controllers/factories/get-task-controller-factory';
import UpdateTaskControllerFactory from '../../../app/task/controllers/factories/update-task-controller-factory';
import { Router } from '../config';

export const taskRouter = Router()

taskRouter
  .route('/:userId/tasks')
  .post(CreateTaskControllerFactory)

taskRouter
  .route('/:userId/tasks/:taskId')
  .get(GetTaskControllerFactory)
  .delete(DeleteTaskControllerFactory)
  .put(UpdateTaskControllerFactory)