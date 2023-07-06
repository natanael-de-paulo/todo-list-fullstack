import { createUserResponseDTO } from "../../../app/user/dtos/create-user-dto-response";
import { IUsersRepository } from "../../../app/user/repository/users-repository";
import prisma from "../../../libs/prisma"
import { createUserRequestDTO } from "../../../app/user/dtos/create-user-dto-request";

class UsersRepository implements IUsersRepository {
  async create(input: createUserRequestDTO): Promise<createUserResponseDTO> {
    const output = await prisma.users.create({
      data: {
        ...input
      } as createUserRequestDTO,
      select: {
        userId: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return output
  }
}


export default UsersRepository