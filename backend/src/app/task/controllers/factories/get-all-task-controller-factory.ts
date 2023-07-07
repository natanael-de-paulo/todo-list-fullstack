import { httpControllerAdapter } from "../../../../infra/http/controller/controller-adapter";
import GetAllTaskServiceFactory from "../../services/factories/get-all-task-service-factory";
import GetAllTaskController from "../get-all-task-controller";

class GetAllTaskControllerFactory {
  static getAllTask() {
    const getAllTaskController = new GetAllTaskController(GetAllTaskServiceFactory);
    return httpControllerAdapter(getAllTaskController);
  }
}

export default GetAllTaskControllerFactory.getAllTask();