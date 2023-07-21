import prisma from "../../../../libs/prisma"
import { ITasksRepository } from "../../../../app/task/repository/tasks-repository";
import { TaskResponseDTO } from "../../../../app/task/dtos/task-dto-response";
import { CreateTaskRequestDTO } from "../../../../app/task/dtos/create-task-dto-request";
import { DataTaskToUpdateDTO } from "../../../../app/task/dtos/data-task-to-update-dto";
import inMemoryDatabase from "../in-memory-database";
import { Status } from "../../../../app/task/model/task-model";
import { IGeneratorUUID } from "../../../../app/helpers/interfaces/igenerator-uuid";
import { GeneratorUUID } from "../../../../app/helpers/generator-uuid";

class InMemoryTasksRepository implements ITasksRepository {
  private generatorUUID: IGeneratorUUID
  
  constructor() {
    this.generatorUUID = new GeneratorUUID()
  }

  async create(input: {taskData: CreateTaskRequestDTO, userId: string}): Promise<TaskResponseDTO> {
    inMemoryDatabase.tasks.push({
      taskId: this.generatorUUID.ramdomUUID(),
      name: input.taskData.name,
      userId: input.userId,
      status: Status.PENDING,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    const indexPerson = inMemoryDatabase.tasks.length - 1
    const output = inMemoryDatabase.tasks[indexPerson]
		return output
  }

  async get(input: {userId: string, taskId: string}): Promise<TaskResponseDTO> {
    const index = inMemoryDatabase.tasks.findIndex(task => task.taskId === input.taskId)
    const output = inMemoryDatabase.tasks[index]
    return output
  }

  async getAll(userId: string): Promise<TaskResponseDTO[]> {
    const output = inMemoryDatabase.tasks.filter(task => task.userId === userId)
    return output
  }

  async update(input: DataTaskToUpdateDTO): Promise<void> {
    const index = inMemoryDatabase.tasks.findIndex(task => task.taskId === input.taskId && task.userId === input.userId)
    
    const data = inMemoryDatabase.tasks[index]

    inMemoryDatabase.tasks[index] = {
      ...data,
      name: input.name,
      status: input.status,
      updatedAt: new Date()
    }

    await prisma.task.update({
      data: {
        name: input.name,
        status: {
          set: input.status
        }
      },
      where: {
        taskId: input.taskId      
      }
    })
  }

  async delete(input: { userId: string, taskId: string}): Promise<void> {
    await prisma.task.delete({
      where: {
        taskId: input.taskId   
      }
    })
  }
}

export default InMemoryTasksRepository