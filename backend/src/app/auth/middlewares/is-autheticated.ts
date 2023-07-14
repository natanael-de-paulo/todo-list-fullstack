import { NextFunction, Request, Response } from '../../../infra/http/config';
import { IUsersRepository } from '../../user/repository/users-repository';
import { ITokenJwt } from '../../helpers/interfaces/itoken-jwt';


export class AuthenticationMiddleware {
  constructor(private usersRepository: IUsersRepository, private tokenJwt: ITokenJwt){}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    const userId = this.tokenJwt.decryptToken(req) as string;
    const user = await this.usersRepository.get(userId)
    if(!user) return res.status(404).json("System userid is invalid!")

    req.userId = userId;
    return next()
  }
}

export default AuthenticationMiddleware