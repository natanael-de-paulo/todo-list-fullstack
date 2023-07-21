import { TaskModel } from "../../../app/task/model/task-model";
import { UserModel } from "../../../app/user/model/user-model";

export interface IInMemoryDatabase {
  users: UserModel[]
  tasks: TaskModel[]
}