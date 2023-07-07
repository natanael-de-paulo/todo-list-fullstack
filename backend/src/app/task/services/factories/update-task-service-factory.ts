import TasksRepository from "../../../../infra/database/repositories/tasks-repository";
import UpdateTaskService from "../update-task-service";

class UpdateTaskServiceFactory {
  static updateTaskService() {
    const updateTaskService = new UpdateTaskService(new TasksRepository());
    return updateTaskService;
  }
}

export default UpdateTaskServiceFactory.updateTaskService();