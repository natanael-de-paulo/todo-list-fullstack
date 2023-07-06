import CreateUserServiceFactory from "../../services/factories/create-user-service-factory"
import { httpControllerAdapter } from "../../../../infra/http/controller/controller-adapter"
import CreateUserController from "../create-user-controller"

class CreateUserControllerFactory {
  static createUser() {
    const createUserController = new CreateUserController(CreateUserServiceFactory);
    return httpControllerAdapter(createUserController);
  }
}

export default CreateUserControllerFactory;