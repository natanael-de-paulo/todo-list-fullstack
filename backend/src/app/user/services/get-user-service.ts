import { UserResponseDTO } from "../dtos/user-dto-response";
import { IUsersRepository } from "../repository/users-repository";

class GetUserService {
  constructor(private usersRepository: IUsersRepository){}

  async execute(userId: string) : Promise<UserResponseDTO>{
    const output = await this.usersRepository.get(userId)
    return output
  }
}

export default GetUserService