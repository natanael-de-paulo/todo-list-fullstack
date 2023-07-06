import { UserModel } from "../model/user-model";

export type UserResponseDTO = Omit<UserModel, "password">