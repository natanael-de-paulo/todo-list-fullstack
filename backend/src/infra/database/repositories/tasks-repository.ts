import prisma from "../../../libs/prisma"
import { ITasksRepository } from "../../../app/task/repository/tasks-repository";
import { TaskResponseDTO } from "../../../app/task/dtos/task-dto-response";
import { CreateTaskRequestDTO } from "../../../app/task/dtos/create-task-dto-request";

class TasksRepository implements ITasksRepository {
  async create(input: {taskData: CreateTaskRequestDTO, userId: string}): Promise<TaskResponseDTO> {
    const output = await prisma.task.create({
      data: {
        name: input.taskData.name,
        user: {
          connect: { 
            userId: input.userId,
          }
        }
      }
    })

    return output as TaskResponseDTO
  }

  async get(input: {userId: string, taskId: string}): Promise<TaskResponseDTO> {
    const query = await prisma.task.findFirst({
      where: {
        taskId: input.taskId,
        userId: input.userId
      },
      select: {
        taskId: true,
        name: true,
        status: true,
        userId: true,
        user: true,
        createdAt: true,
        updatedAt: true
      },
    })

    return query as TaskResponseDTO 
  }
}

export default TasksRepository