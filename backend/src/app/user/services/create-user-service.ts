import { createUserRequestDTO } from "../dtos/create-user-dto-request";
import { IUsersRepository } from "../repository/users-repository";
import { createUserResponseDTO } from "../dtos/create-user-dto-response";
import { ICrypt } from "../../helpers/interfaces/icrypt";

class CreateUserService {
  constructor(private usersRepository: IUsersRepository, private crypt: ICrypt){}

  async execute(input: createUserRequestDTO) : Promise<createUserResponseDTO>{
    const passwordHash = await this.crypt.hash(input.password, 8)
    const output = await this.usersRepository.create({
      email: input.email,
      name: input.name,
      password: passwordHash
    })
    return output
  }
}

export default CreateUserService