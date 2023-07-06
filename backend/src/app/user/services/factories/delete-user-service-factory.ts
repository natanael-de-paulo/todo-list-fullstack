import UsersRepository from '../../../../infra/database/repositories/users-repository'
import DeleteUserService from '../delete-users-service';

class DeleteUserServiceFactory {
  static deleteUserService() {
    const deleteUserService = new DeleteUserService(new UsersRepository());
    return deleteUserService;
  }
}

export default DeleteUserServiceFactory.deleteUserService();