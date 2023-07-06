import { createUserResponseDTO } from "../../../app/user/dtos/create-user-dto-response";
import { IUsersRepository } from "../../../app/user/repository/users-repository";
import prisma from "../../../libs/prisma"
import { createUserRequestDTO } from "../../../app/user/dtos/create-user-dto-request";
import { dataUserToUpdateDTO } from "../../../app/user/dtos/data-user-dto-to-update";
import { UserResponseDTO } from "../../../app/user/dtos/user-dto-response";

class UsersRepository implements IUsersRepository {

  async get(userId: string): Promise<UserResponseDTO> {
    const query = await prisma.user.findUnique({
      where: {
        userId: userId
      },
      select: {
        userId: true,
        name: true,
        email: true,
        tasks: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return query as UserResponseDTO 
  }

  async create(input: createUserRequestDTO): Promise<createUserResponseDTO> {
    const output = await prisma.user.create({
      data: {
        ...input
      } as createUserRequestDTO,
      select: {
        userId: true,
      }
    })

    return output
  }

  async delete(userId: string): Promise<void> {
    await prisma.user.delete({
      where: {
        userId: userId
      }
    })
  }

  async update(input: dataUserToUpdateDTO): Promise<void> {
    await prisma.user.update({
      data: {
        ...input.dataUserToUpdate
      },
      where: {
        userId: input.userId
      }
    })

  }
}


export default UsersRepository