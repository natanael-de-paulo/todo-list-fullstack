import InMemoryTasksRepository from "../../../../infra/database/in-memory/repositories/in-memory-tasks-repository";
import UpdateTaskService from "../../services/update-task-service";

class UpdateTaskServiceFactory {
  static updateTaskService() {
    const updateTaskService = new UpdateTaskService(new InMemoryTasksRepository());
    return updateTaskService;
  }
}

export default UpdateTaskServiceFactory.updateTaskService();