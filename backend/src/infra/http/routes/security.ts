import AuthControllerFactory from '../../../app/auth/controllers/factories/auth-controller-factory';
import { Router } from '../config';

export const securityRouter = Router()

securityRouter
  .post('/auth', AuthControllerFactory)
  
