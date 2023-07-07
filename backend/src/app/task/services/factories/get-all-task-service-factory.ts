import TasksRepository from "../../../../infra/database/repositories/tasks-repository";
import GetAllTaskService from "../get-all-task-service";

class GetAllTaskServiceFactory {
  static getAllTaskService() {
    const getAllTaskService = new GetAllTaskService(new TasksRepository());
    return getAllTaskService;
  }
}

export default GetAllTaskServiceFactory.getAllTaskService();