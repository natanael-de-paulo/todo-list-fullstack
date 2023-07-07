import UpdateTaskController from "../update-task-controller";
import UpdateTaskServiceFactory from "../../services/factories/update-task-service-factory";
import { httpControllerAdapter } from "../../../../infra/http/controller/controller-adapter";

class UpdateTaskControllerFactory {
  static updateTask() {
    const updateTaskController = new UpdateTaskController(UpdateTaskServiceFactory);
    return httpControllerAdapter(updateTaskController);
  }
}

export default UpdateTaskControllerFactory.updateTask();