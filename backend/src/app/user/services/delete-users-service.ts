import { IUsersRepository } from "../repository/users-repository";

class DeleteUserService {
  constructor(private usersRepository: IUsersRepository){}

  async execute(userId: string) : Promise<void>{
    await this.usersRepository.delete(userId)
  }
}

export default DeleteUserService