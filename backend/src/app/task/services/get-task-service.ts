;
import { TaskResponseDTO } from "../dtos/task-dto-response";
import { ITasksRepository } from "../repository/tasks-repository";

class GetTaskService {
  constructor(private tasksRepository: ITasksRepository){}

  async execute({userId, taskId}: {userId: string, taskId: string}) : Promise<TaskResponseDTO>{
    const output = await this.tasksRepository.get({userId, taskId})
    return output
  }
}

export default GetTaskService