import { Request } from '../../../infra/http/config'

export interface ITokenJwt {
  token(userId: string): string
	decryptToken(request: Request): void | string
}