import { Router } from '../config';
import { userRouter } from './user-route';

export const routes = Router()
routes.use('/', [userRouter])
