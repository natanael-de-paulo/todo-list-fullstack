import prisma from "../../../../libs/prisma"
import { ITasksRepository } from "../../../../app/task/repository/tasks-repository";
import { TaskResponseDTO } from "../../../../app/task/dtos/task-dto-response";
import { CreateTaskRequestDTO } from "../../../../app/task/dtos/create-task-dto-request";
import { DataTaskToUpdateDTO } from "../../../../app/task/dtos/data-task-to-update-dto";
import inMemoryDatabase from "../in-memory-database";
import { Status, TaskModel } from "../../../../app/task/model/task-model";
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
    const index = this.findIndex(task => task.taskId === input.taskId && task.userId === input.userId)
    if (index == -1) throw new Error("task or user not found")
    const output = inMemoryDatabase.tasks[index]
    return output
  }

  async getAll(userId: string): Promise<TaskResponseDTO[]> {
    const output = inMemoryDatabase.tasks.filter(task => task.userId === userId)
    return output
  }

  async update(input: DataTaskToUpdateDTO): Promise<void> {
    const index = this.findIndex(task => task.taskId === input.taskId && task.userId === input.userId)
    if (index == -1) throw new Error("task or user not found")
    
    const data = inMemoryDatabase.tasks[index]

    inMemoryDatabase.tasks[index] = {
      ...data,
      name: input.name ? input.name: data.name,
      status: input.status? input.status: data.status,
      updatedAt: new Date()
    }
  }

  async delete(input: { userId: string, taskId: string }): Promise<void> {
    const index = this.findIndex((task: TaskModel) => task.taskId === input.taskId && task.userId === input.userId)
    if(index == -1) throw new Error("task or user not found")
    inMemoryDatabase.tasks.splice(index, 1)    
  }

  private findIndex(callback: (task: TaskModel) => boolean): number {
    return inMemoryDatabase.tasks.findIndex(callback)
  }
}

export default InMemoryTasksRepository