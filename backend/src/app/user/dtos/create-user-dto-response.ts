import { UserModel } from "../model/user-model";

export type createUserResponseDTO = Pick<UserModel, "userId">