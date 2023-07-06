import { createUserRequestDTO } from "../../dtos/create-user-dto-request";
import { createUserResponseDTO } from "../../dtos/create-user-dto-response";

export interface IUsersServices {
  execute(input: createUserRequestDTO): Promise<createUserResponseDTO>
}