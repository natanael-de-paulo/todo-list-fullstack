import GetUserController from "../get-user-controller";
import GetUserServiceFactory from "../../services/factories/get-user-service-factory";
import { httpControllerAdapter } from "../../../../infra/http/controller/controller-adapter"

class GetUserControllerFactory {
  static getUser() {
    const getUserController = new GetUserController(GetUserServiceFactory);
    return httpControllerAdapter(getUserController);
  }
}

export default GetUserControllerFactory.getUser();