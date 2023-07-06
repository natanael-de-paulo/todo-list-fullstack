import { Router } from '../config';
import { taskRouter } from './task-route';
import { userRouter } from './user-route';

export const routes = Router()
routes.use('/', [userRouter, taskRouter])
