import CreateTaskService from "../create-task-service";
import TasksRepository from "../../../../infra/database/prisma/repositories/tasks-repository";

class CreateTaskServiceFactory {
  static createTaskService() {
    const createTaskService = new CreateTaskService(new TasksRepository());
    return createTaskService;
  }
}

export default CreateTaskServiceFactory.createTaskService();