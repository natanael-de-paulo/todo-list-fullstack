import UsersRepository from '../../../../infra/database/repositories/users-repository'
import CreateUserService  from '../create-user-service'

class CreateUserServiceFactory {
  static createUserService() {
    const createUserService = new CreateUserService(new UsersRepository());
    return createUserService;
  }
}

export default CreateUserServiceFactory.createUserService();