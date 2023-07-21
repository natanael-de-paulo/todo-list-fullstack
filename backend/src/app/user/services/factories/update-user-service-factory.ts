import UsersRepository from '../../../../infra/database/prisma/repositories/users-repository';
import UpdateUserService from '../update-user-service';

class UpdateUserServiceFactory {
  static updateUserService() {
    const deleteUserService = new UpdateUserService(new UsersRepository());
    return deleteUserService;
  }
}

export default UpdateUserServiceFactory.updateUserService();