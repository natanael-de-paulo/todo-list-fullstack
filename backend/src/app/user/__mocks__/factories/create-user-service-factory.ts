import CreateUserService from '../../services/create-user-service';
import InMemoryUsersRepository from '../../../../infra/database/in-memory/repositories/in-memory-users-repository';
import { Crypt } from '../../../helpers/crypt';


class CreateUserServiceFactory {
  static createUserService() {
    const createUserService = new CreateUserService(new InMemoryUsersRepository(), new Crypt());
    return createUserService;
  }
}

export default CreateUserServiceFactory.createUserService();