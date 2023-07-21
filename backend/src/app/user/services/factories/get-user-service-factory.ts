import UsersRepository from '../../../../infra/database/prisma/repositories/users-repository';
import GetUserService from '../get-user-service';

class GetUserServiceFactory {
  static getUserService() {
    const getUserService = new GetUserService(new UsersRepository());
    return getUserService;
  }
}

export default GetUserServiceFactory.getUserService();