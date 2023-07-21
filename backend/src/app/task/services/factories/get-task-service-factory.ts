import GetTaskService from "../get-task-service";
import TasksRepository from "../../../../infra/database/prisma/repositories/tasks-repository";

class GetTaskServiceFactory {
  static getTaskService() {
    const getTaskService = new GetTaskService(new TasksRepository());
    return getTaskService;
  }
}

export default GetTaskServiceFactory.getTaskService();