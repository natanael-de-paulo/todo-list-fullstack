import { createUserRequestDTO } from "../dtos/create-user-dto-request";
import { IUsersRepository } from "../repository/users-repository";
import { createUserResponseDTO } from "../dtos/create-user-dto-response";

class CreateUserService {
  constructor(private usersRepository: IUsersRepository){}

  async execute(input: createUserRequestDTO) : Promise<createUserResponseDTO>{
    const output = await this.usersRepository.create(input)
    return output
  }
}

export default CreateUserService