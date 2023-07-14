import { UserModel } from "../../user/model/user-model";

export type UserDataOutputDTO = Omit<UserModel, "tasks">