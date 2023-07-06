import DeleteUserController from "../delete-user-controller";
import DeleteUserServiceFactory from "../../services/factories/delete-user-service-factory";
import { httpControllerAdapter } from "../../../../infra/http/controller/controller-adapter"
import UpdateUserController from "../update-user-controller";
import UpdateUserServiceFactory from "../../services/factories/update-user-service-factory";

class UpdateUserControllerFactory {
  static deleteUser() {
    const updateUserController = new UpdateUserController(UpdateUserServiceFactory);
    return httpControllerAdapter(updateUserController);
  }
}

export default UpdateUserControllerFactory.deleteUser();