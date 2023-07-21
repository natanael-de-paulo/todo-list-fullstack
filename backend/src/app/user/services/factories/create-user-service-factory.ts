
import UsersRepository from '../../../../infra/database/prisma/repositories/users-repository';
import { Crypt } from '../../../helpers/crypt';
import CreateUserService  from '../create-user-service'

class CreateUserServiceFactory {
  static createUserService() {
    const createUserService = new CreateUserService(new UsersRepository(), new Crypt());
    return createUserService;
  }
}

export default CreateUserServiceFactory.createUserService();