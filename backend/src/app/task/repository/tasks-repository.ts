import { CreateTaskRequestDTO } from "../dtos/create-task-dto-request";
import { DataTaskToUpdateDTO } from "../dtos/data-task-to-update-dto";
import { TaskResponseDTO } from "../dtos/task-dto-response";

export interface ITasksRepository {
  get(input: {userId: string, taskId: string}): Promise<TaskResponseDTO>
  create(input: {taskData: CreateTaskRequestDTO, userId: string}): Promise<TaskResponseDTO>
  delete(input: {userId: string, taskId: string}): Promise<void>
  update(input: DataTaskToUpdateDTO): Promise<void>
}