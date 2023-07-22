import { createUserResponseDTO } from "../../../../app/user/dtos/create-user-dto-response";
import { IUsersRepository } from "../../../../app/user/repository/users-repository";
import { createUserRequestDTO } from "../../../../app/user/dtos/create-user-dto-request";
import { dataUserToUpdateDTO } from "../../../../app/user/dtos/data-user-dto-to-update";
import { UserResponseDTO } from "../../../../app/user/dtos/user-dto-response";
import { UserDataOutputDTO } from "../../../../app/auth/dtos/user-data-output-dto";
import inMemoryDatabase from "../in-memory-database";
import { GeneratorUUID } from "../../../../app/helpers/generator-uuid";
import { IGeneratorUUID } from "../../../../app/helpers/interfaces/igenerator-uuid";

class InMemoryUsersRepository implements IUsersRepository {
  private generatorUUID: IGeneratorUUID
  
  constructor() {
    this.generatorUUID = new GeneratorUUID()
  }


  async getUserForAuth(email: string): Promise<UserDataOutputDTO | null> {
    // const query = await prisma.user.findUnique({
    //   where: {
    //     email: email
    //   },
    //   select: {
    //     userId: true,
    //     password: true,
    //     name: true,
    //     email: true,
    //     createdAt: true,
    //     updatedAt: true
    //   }
    // })

    // return query 
    return {} as UserDataOutputDTO 
  }


  async get(userId: string): Promise<UserResponseDTO> {
    // const query = await prisma.user.findUnique({
    //   where: {
    //     userId: userId,
    //   },
    //   select: {
    //     userId: true,
    //     name: true,
    //     email: true,
    //     tasks: true,
    //     createdAt: true,
    //     updatedAt: true
    //   }
    // })

    // return query as UserResponseDTO 
    return {} as UserResponseDTO
  }

  async create(input: createUserRequestDTO): Promise<createUserResponseDTO> {
    const index = inMemoryDatabase.users.push({
      userId: this.generatorUUID.ramdomUUID(),
      name: input.name,
      email: input.email,
      password: input.password,
      createdAt: new Date(),
      updatedAt: new Date(),
      tasks: []
    })

    const output = inMemoryDatabase.users[index - 1]
    return {
      userId: output.userId,
      name: output.name,
      email: output.email,
    } as createUserResponseDTO
  }

  async delete(userId: string): Promise<void> {
    // await prisma.user.delete({
    //   where: {
    //     userId: userId
    //   }
    // })
  }

  async update(input: dataUserToUpdateDTO): Promise<void> {
    // await prisma.user.update({
    //   data: {
    //     ...input.dataUserToUpdate
    //   },
    //   where: {
    //     userId: input.userId
    //   }
    // })
  }
}


export default InMemoryUsersRepository