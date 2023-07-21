
import CreateTaskService from "../../services/create-task-service";
import InMemoryTasksRepository from "../../../../infra/database/in-memory/repositories/in-memory-tasks-repository";

class CreateTaskServiceFactory {
  static createTaskService() {
    const createTaskService = new CreateTaskService(new InMemoryTasksRepository());
    return createTaskService;
  }
}

export default CreateTaskServiceFactory.createTaskService();