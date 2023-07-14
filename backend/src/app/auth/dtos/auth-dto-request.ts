import { UserModel } from "../../user/model/user-model";

export type authRequestDTO = Pick<UserModel, 'email' | 'password'>