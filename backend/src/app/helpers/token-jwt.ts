import { ITokenJwt } from "./interfaces/itoken-jwt"
import jwt from 'jsonwebtoken'
import { Request } from '../../infra/http/config'
import { AuthException } from "../../infra/http/erros/auth-exception"

interface PayLoad {	sub: string }

class TokenJwt implements ITokenJwt {
	token(userId: string): string {
		const key = process.env.JWT_SECRET as string
		const token = jwt.sign({ userId }, key, { subject: userId, expiresIn: "1d" })
		return token
	}

	decryptToken(req: Request): void | string {
		const authHeader = req.headers.authorization as string
		if(!authHeader) throw new AuthException("Sorry, but you are not authenticated!")
		const [ ,token ] = authHeader.split(" ")

		try {
			const { sub } = jwt.verify(
				token,
				process.env.JWT_SECRET as string
			) as PayLoad
	
			return sub
		} catch (err) {
			throw new AuthException("Sorry, but you are not authenticated!")
		}
	}
}

export { TokenJwt }