import { createUserRequestDTO } from "../dtos/create-user-dto-request";
import { createUserResponseDTO } from "../dtos/create-user-dto-response";
import { dataUserToUpdateDTO } from "../dtos/data-user-dto-to-update";
import { updateUserResquestDTO } from "../dtos/update-user-dto-request";

export interface IUsersRepository {
  create(input: createUserRequestDTO): Promise<createUserResponseDTO>
  delete(userId: string): Promise<void>
  update(input: dataUserToUpdateDTO): Promise<any>
}