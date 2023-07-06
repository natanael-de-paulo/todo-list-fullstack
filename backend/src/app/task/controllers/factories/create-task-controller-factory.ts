import CreateTaskController from "../create-task-controller";
import CreateTaskServiceFactory from "../../services/factories/create-task-service-factory";
import { httpControllerAdapter } from "../../../../infra/http/controller/controller-adapter"

class CreateTaskControllerFactory {
  static createTask() {
    const createTaskController = new CreateTaskController(CreateTaskServiceFactory);
    return httpControllerAdapter(createTaskController);
  }
}

export default CreateTaskControllerFactory.createTask();