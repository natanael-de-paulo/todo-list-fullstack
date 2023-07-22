import UpdateUserService from "../../services/update-user-service";
import InMemoryUsersRepository from "../../../../infra/database/in-memory/repositories/in-memory-users-repository";

class UpdateUserServiceFactory {
  static updateUserService() {
    const updateUserService = new UpdateUserService(new InMemoryUsersRepository());
    return updateUserService;
  }
}

export default UpdateUserServiceFactory.updateUserService();