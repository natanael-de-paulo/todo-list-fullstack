import CreateUserController from "../create-user-controller"
import CreateUserServiceFactory from "../../services/factories/create-user-service-factory"
import { httpControllerAdapter } from "../../../../infra/http/controller/controller-adapter"

class CreateUserControllerFactory {
  static createUser() {
    const createUserController = new CreateUserController(CreateUserServiceFactory);
    return httpControllerAdapter(createUserController);
  }
}

export default CreateUserControllerFactory.createUser();