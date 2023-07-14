import AuthController from "../auth-controller";
import AuthServiceFactory from "../../services/factories/auth-service-factory";
import { httpControllerAdapter } from "../../../../infra/http/controller/controller-adapter"

class AuthControllerFactory {
  static auth() {
    const authController = new AuthController(AuthServiceFactory);
    return httpControllerAdapter(authController);
  }
}

export default AuthControllerFactory.auth();