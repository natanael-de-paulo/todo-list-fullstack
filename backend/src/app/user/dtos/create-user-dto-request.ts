import { UserModel } from "../model/user-model";

export type createUserRequestDTO = Omit<UserModel, 'userId' | 'createdAt' | 'updatedAt'>