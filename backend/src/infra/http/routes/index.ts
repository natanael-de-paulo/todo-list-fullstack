import { Router } from '../config';
import { securityRouter } from './security';
import { taskRouter } from './task-route';
import { userRouter } from './user-route';

export const routes = Router()
routes.use('/users', [userRouter, taskRouter])
routes.use('/security', securityRouter)