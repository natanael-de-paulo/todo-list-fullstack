import GetUserService from '../get-user-service';
import UsersRepository from '../../../../infra/database/repositories/users-repository'

class GetUserServiceFactory {
  static getUserService() {
    const getUserService = new GetUserService(new UsersRepository());
    return getUserService;
  }
}

export default GetUserServiceFactory.getUserService();