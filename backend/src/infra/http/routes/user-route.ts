import IsAuthenticatedMiddlewareFactory from '../../../app/auth/middlewares/factories/is-authenticated-middleware-factory';
import CreateUserControllerFactory from '../../../app/user/controllers/factories/create-user-controller-factory';
import DeleteUserControllerFactory from '../../../app/user/controllers/factories/delete-user-controller-factory';
import GetUserControllerFactory from '../../../app/user/controllers/factories/get-user-controller-factory';
import UpdateUserControllerFactory from '../../../app/user/controllers/factories/update-user-controller-factory';

import { Router } from '../config';

export const userRouter = Router()

userRouter
  .route('/')
  .post(CreateUserControllerFactory)
 
userRouter
  .route('/:userId')
  .all(IsAuthenticatedMiddlewareFactory)
  .get(GetUserControllerFactory)
  .put(UpdateUserControllerFactory)
  .delete(DeleteUserControllerFactory)

