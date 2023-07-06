import { UserModel } from "../model/user-model";

export type dataUserToUpdateDTO = {
  dataUserToUpdate:  Partial<Pick<UserModel, "name" | "email" | "password">>
  userId: string
}