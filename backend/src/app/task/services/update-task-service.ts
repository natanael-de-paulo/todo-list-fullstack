import { DataTaskToUpdateDTO } from "../dtos/data-task-to-update-dto";
import { ITasksRepository } from "../repository/tasks-repository";

class UpdateTaskService {
  constructor(private tasksRepository: ITasksRepository){}

  async execute(input: DataTaskToUpdateDTO) : Promise<void>{
    await this.tasksRepository.update(input)
  }
}

export default UpdateTaskService