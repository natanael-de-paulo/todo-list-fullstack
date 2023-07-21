import UpdateTaskService from "../update-task-service";
import TasksRepository from "../../../../infra/database/prisma/repositories/tasks-repository";

class UpdateTaskServiceFactory {
  static updateTaskService() {
    const updateTaskService = new UpdateTaskService(new TasksRepository());
    return updateTaskService;
  }
}

export default UpdateTaskServiceFactory.updateTaskService();