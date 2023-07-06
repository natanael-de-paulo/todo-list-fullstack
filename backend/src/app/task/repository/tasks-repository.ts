import { TaskResponseDTO } from "../dtos/task-dto-response";

export interface ITasksRepository {
  // get(taskId: string): Promise<any>
  create(input: any): Promise<TaskResponseDTO>
  // delete(taskId: any): Promise<void>
  // update(input: any): Promise<any>
}