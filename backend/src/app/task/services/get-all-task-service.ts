import { TaskResponseDTO } from "../dtos/task-dto-response";
import { ITasksRepository } from "../repository/tasks-repository";

class GetAllTaskService {
  constructor(private tasksRepository: ITasksRepository){}

  async execute(userId: string) : Promise<TaskResponseDTO[]>{
    const output = await this.tasksRepository.getAll(userId)
    return output
  }
}

export default GetAllTaskService