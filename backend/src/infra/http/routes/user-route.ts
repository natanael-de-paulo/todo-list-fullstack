import CreateUserControllerFactory from '../../../app/user/controllers/factories/create-user-controller-factory';
import DeleteUserControllerFactory from '../../../app/user/controllers/factories/delete-user-controller-factory';
import UpdateUserControllerFactory from '../../../app/user/controllers/factories/update-user-controller-factory';

import { Router } from '../config';

export const userRouter = Router()

userRouter
  .route('/users')
  .get(() => {
    console.log('test');
  })
  .post(CreateUserControllerFactory)
 
userRouter
  .route('/users/:userId')
  .put(UpdateUserControllerFactory)
  .delete(DeleteUserControllerFactory)

