import UsersRepository from "../../../../infra/database/repositories/users-repository";
import { httpMiddlewareAdapter } from "../../../../infra/http/middlewares/http-middleware-adapter";
import { TokenJwt } from "../../../helpers/token-jwt";
import AuthenticationMiddleware from "../is-autheticated";

class IsAuthenticatedMiddlewareFactory {
  static isAuthenticated(){
    const isAuthenticated = new AuthenticationMiddleware(new UsersRepository(), new TokenJwt())

    return httpMiddlewareAdapter(isAuthenticated)
  }
}

export default IsAuthenticatedMiddlewareFactory.isAuthenticated()