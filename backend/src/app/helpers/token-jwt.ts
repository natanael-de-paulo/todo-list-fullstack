import { ITokenJwt } from "./interfaces/itoken-jwt"
import jwt from 'jsonwebtoken'
import { Request } from '../../infra/http/config'

interface PayLoad {	sub: string }


class TokenJwt implements ITokenJwt {
	token(userId: string): string {
		const key = process.env.JWT_SECRET as string
		const token = jwt.sign({ userId }, key, { subject: userId, expiresIn: "1d" })
		return token
	}

	decryptToken(req: Request): void | string {
		const authToken = req.headers.authorization as string

		// if(!authToken) return customError("Desculpa, mas você não está autenticado!")

		const [ ,token ] = authToken.split(" ")

		try {
			const { sub } = jwt.verify(
				token,
				process.env.JWT_SECRET as string
			) as PayLoad
	
			const userId = req.userId = sub

			return userId
		} catch (err) {
			// return customError("Desculpa, mas você não está autenticado!")
		}
	}
}

export { TokenJwt }