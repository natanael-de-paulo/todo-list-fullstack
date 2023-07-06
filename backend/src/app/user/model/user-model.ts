import { TaskModel } from "../../task/model/task-model"

export interface UserModel {
	userId: string   
	name: string
  email: string   
  password:	string
  tasks: TaskModel[]
  createdAt: Date 
  updatedAt: Date
}