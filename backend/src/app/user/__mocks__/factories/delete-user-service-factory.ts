import DeleteUserService from "../../services/delete-users-service";
import InMemoryUsersRepository from "../../../../infra/database/in-memory/repositories/in-memory-users-repository";

class DeleteUserServiceFactory {
  static deleteUserService() {
    const deleteUserService = new DeleteUserService(new InMemoryUsersRepository());
    return deleteUserService;
  }
}

export default DeleteUserServiceFactory.deleteUserService();