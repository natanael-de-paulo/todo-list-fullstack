import { createUserRequestDTO } from "../dtos/create-user-dto-request";
import { createUserResponseDTO } from "../dtos/create-user-dto-response";
import { dataUserToUpdateDTO } from "../dtos/data-user-dto-to-update";
import { updateUserResquestDTO } from "../dtos/update-user-dto-request";
import { UserResponseDTO } from "../dtos/user-dto-response";

export interface IUsersRepository {
  get(userId: string): Promise<UserResponseDTO>
  create(input: createUserRequestDTO): Promise<createUserResponseDTO>
  delete(userId: string): Promise<void>
  update(input: dataUserToUpdateDTO): Promise<any>
}