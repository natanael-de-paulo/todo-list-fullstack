import GetTaskService from "../../services/get-task-service";
import InMemoryTasksRepository from "../../../../infra/database/in-memory/repositories/in-memory-tasks-repository";

class GetTaskServiceFactory {
  static getTaskService() {
    const getTaskService = new GetTaskService(new InMemoryTasksRepository());
    return getTaskService;
  }
}

export default GetTaskServiceFactory.getTaskService();