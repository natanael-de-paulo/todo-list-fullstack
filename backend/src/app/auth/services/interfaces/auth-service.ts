import { authRequestDTO } from "../../dtos/auth-dto-request";

export interface IAuthService {
  execute(input: authRequestDTO ): Promise<any>
}