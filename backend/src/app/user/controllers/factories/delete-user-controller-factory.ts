import DeleteUserController from "../delete-user-controller";
import DeleteUserServiceFactory from "../../services/factories/delete-user-service-factory";
import { httpControllerAdapter } from "../../../../infra/http/controller/controller-adapter"

class DeleteUserControllerFactory {
  static deleteUser() {
    const deleteUserController = new DeleteUserController(DeleteUserServiceFactory);
    return httpControllerAdapter(deleteUserController);
  }
}

export default DeleteUserControllerFactory.deleteUser();