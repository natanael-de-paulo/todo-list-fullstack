import GetAllTaskService from "../get-all-task-service";
import TasksRepository from "../../../../infra/database/prisma/repositories/tasks-repository";

class GetAllTaskServiceFactory {
  static getAllTaskService() {
    const getAllTaskService = new GetAllTaskService(new TasksRepository());
    return getAllTaskService;
  }
}

export default GetAllTaskServiceFactory.getAllTaskService();