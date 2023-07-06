import { UserModel } from "../model/user-model";

export type createUserRequestDTO = Pick<UserModel, 'name' | 'email' | 'password'>