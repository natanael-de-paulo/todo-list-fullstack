import { BadRequestException } from "../../../infra/http/erros/bad-request-exception";
import { ICrypt } from "../../helpers/interfaces/icrypt";
import { ITokenJwt } from "../../helpers/interfaces/itoken-jwt";
import { IUsersRepository } from "../../user/repository/users-repository";
import { authRequestDTO } from "../dtos/auth-dto-request";
import { IAuthService } from "./interfaces/auth-service";

class AuthService implements IAuthService{
	constructor(private usersRepository: IUsersRepository, private crypt: ICrypt, private tokenJwt: ITokenJwt){}

	async execute(input: authRequestDTO) {
			const existsUser = await this.usersRepository.getUserForAuth(input.email)

			if(existsUser == null) throw new BadRequestException(`User ${input.email} not found`)

			const passwordMatch = this.crypt.compare(input.password, existsUser.password)
			
			if(!passwordMatch) throw new BadRequestException('User or password is incorrect!')

			const token = this.tokenJwt.token(existsUser.userId)

			return {
				token: token
			}

	}
}

export default AuthService;