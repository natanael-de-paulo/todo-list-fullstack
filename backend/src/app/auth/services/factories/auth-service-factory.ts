import UsersRepository from "../../../../infra/database/repositories/users-repository";
import { Crypt } from "../../../helpers/crypt";
import { TokenJwt } from "../../../helpers/token-jwt";
import AuthService from "../auth-service";

class AuthServiceFactory {
  static authService() {
    const authService = new AuthService(new UsersRepository(), new Crypt(), new TokenJwt());
    return authService;
  }
}

export default AuthServiceFactory.authService()