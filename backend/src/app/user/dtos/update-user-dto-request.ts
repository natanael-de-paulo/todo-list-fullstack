import { UserModel } from "../model/user-model";

export type updateUserResquestDTO = Pick<UserModel, "name" | "email" | "password">