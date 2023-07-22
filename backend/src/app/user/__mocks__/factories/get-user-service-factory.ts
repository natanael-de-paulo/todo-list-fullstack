import GetUserService from '../../services/get-user-service';
import InMemoryUsersRepository from '../../../../infra/database/in-memory/repositories/in-memory-users-repository';

class GetUserServiceFactory {
  static getUserService() {
    const getUserService = new GetUserService(new InMemoryUsersRepository());
    return getUserService;
  }
}

export default GetUserServiceFactory.getUserService();