import UpdateUserService from '../update-user-service';
import UsersRepository from '../../../../infra/database/repositories/users-repository'

class UpdateUserServiceFactory {
  static updateUserService() {
    const deleteUserService = new UpdateUserService(new UsersRepository());
    return deleteUserService;
  }
}

export default UpdateUserServiceFactory.updateUserService();