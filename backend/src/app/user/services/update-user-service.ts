import { dataUserToUpdateDTO } from "../dtos/data-user-dto-to-update";
import { IUsersRepository } from "../repository/users-repository";

class UpdateUserService {
  constructor(private usersRepository: IUsersRepository){}

  async execute(input: dataUserToUpdateDTO) : Promise<void>{
    await this.usersRepository.update(input)
  }
}

export default UpdateUserService