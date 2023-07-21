import DeleteTaskService from "../delete-task-service";
import TasksRepository from "../../../../infra/database/prisma/repositories/tasks-repository";

class DeleteTaskServiceFactory {
  static deleteTaskService() {
    const deleteTaskService = new DeleteTaskService(new TasksRepository());
    return deleteTaskService;
  }
}

export default DeleteTaskServiceFactory.deleteTaskService();