import TasksRepository from "../../../../infra/database/repositories/tasks-repository";
import GetTaskService from "../get-task-service";

class GetTaskServiceFactory {
  static getTaskService() {
    const getTaskService = new GetTaskService(new TasksRepository());
    return getTaskService;
  }
}

export default GetTaskServiceFactory.getTaskService();