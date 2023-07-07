import { TaskResponseDTO } from "../dtos/task-dto-response";

export interface ITasksRepository {
  get(input: {userId: string, taskId: string}): Promise<TaskResponseDTO>
  create(input: any): Promise<TaskResponseDTO>
  // delete(taskId: any): Promise<void>
  // update(input: any): Promise<any>
}