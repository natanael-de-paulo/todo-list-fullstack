import { ITasksRepository } from "../repository/tasks-repository";

class DeleteTaskService {
  constructor(private tasksRepository: ITasksRepository){}

  async execute(input: {userId: string, taskId: string}): Promise<void>{
    await this.tasksRepository.delete(input)
  }
}

export default DeleteTaskService