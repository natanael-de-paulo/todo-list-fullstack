import { createUserRequestDTO } from "../dtos/create-user-dto-request";
import { createUserResponseDTO } from "../dtos/create-user-dto-response";

export interface IUsersRepository {
  create(input: createUserRequestDTO): Promise<createUserResponseDTO>
  delete(userId: string): Promise<void>
}