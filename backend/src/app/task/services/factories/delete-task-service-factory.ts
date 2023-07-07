import TasksRepository from "../../../../infra/database/repositories/tasks-repository";
import DeleteTaskService from "../delete-task-service";

class DeleteTaskServiceFactory {
  static deleteTaskService() {
    const deleteTaskService = new DeleteTaskService(new TasksRepository());
    return deleteTaskService;
  }
}

export default DeleteTaskServiceFactory.deleteTaskService();