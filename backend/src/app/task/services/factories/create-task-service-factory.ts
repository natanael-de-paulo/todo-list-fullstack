import TasksRepository from "../../../../infra/database/repositories/tasks-repository";
import CreateTaskService from "../create-task-service";

class CreateTaskServiceFactory {
  static createTaskService() {
    const createTaskService = new CreateTaskService(new TasksRepository());
    return createTaskService;
  }
}

export default CreateTaskServiceFactory.createTaskService();