import DeleteTaskService from "../../services/delete-task-service";
import InMemoryTasksRepository from "../../../../infra/database/in-memory/repositories/in-memory-tasks-repository";

class DeleteTaskServiceFactory {
  static deleteTaskService() {
    const deleteTaskService = new DeleteTaskService(new InMemoryTasksRepository());
    return deleteTaskService;
  }
}

export default DeleteTaskServiceFactory.deleteTaskService();