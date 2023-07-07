import DeleteTaskController from "../delete-task-controller";
import DeleteTaskServiceFactory from "../../services/factories/delete-task-service-factory";
import { httpControllerAdapter } from "../../../../infra/http/controller/controller-adapter";

class DeleteTaskControllerFactory {
  static deleteTask() {
    const deleteTaskController = new DeleteTaskController(DeleteTaskServiceFactory);
    return httpControllerAdapter(deleteTaskController);
  }
}

export default DeleteTaskControllerFactory.deleteTask();