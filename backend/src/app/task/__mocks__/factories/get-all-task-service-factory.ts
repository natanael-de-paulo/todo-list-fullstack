import GetAllTaskService from "../../services/get-all-task-service";
import InMemoryTasksRepository from "../../../../infra/database/in-memory/repositories/in-memory-tasks-repository";

class GetAllTaskServiceFactory {
  static getAllTaskService() {
    const getAllTaskService = new GetAllTaskService(new InMemoryTasksRepository());
    return getAllTaskService;
  }
}

export default GetAllTaskServiceFactory.getAllTaskService();