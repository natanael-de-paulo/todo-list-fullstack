import CreateUserControllerFactory  from '../../../app/user/controllers/factories/create-user-controller-factory';
import { Router } from '../config';

export const routes = Router()

routes.post('/users', CreateUserControllerFactory.createUser())