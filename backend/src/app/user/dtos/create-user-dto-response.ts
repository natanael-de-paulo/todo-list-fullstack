import { UserModel } from "../model/user-model";

export type createUserResponseDTO = Omit<UserModel, "password">