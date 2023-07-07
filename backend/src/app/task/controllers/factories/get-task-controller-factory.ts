import { httpControllerAdapter } from "../../../../infra/http/controller/controller-adapter";
import GetTaskServiceFactory from "../../services/factories/get-task-service-factory";
import GetTaskController from "../get-task-controller";

class GetTaskControllerFactory {
  static getTask() {
    const getTaskController = new GetTaskController(GetTaskServiceFactory);
    return httpControllerAdapter(getTaskController);
  }
}

export default GetTaskControllerFactory.getTask();