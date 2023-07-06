import { CreateTaskRequestDTO } from "../dtos/create-task-dto-request"
import { TaskResponseDTO } from "../dtos/task-dto-response"
import { ITasksRepository } from "../repository/tasks-repository"

class CreateTaskService {
  constructor(private tasksRepository: ITasksRepository){}

  async execute(input: {taskData: CreateTaskRequestDTO, userId: string}) : Promise<TaskResponseDTO>{
    const output = await this.tasksRepository.create(input)
    return output
  }
}

export default CreateTaskService