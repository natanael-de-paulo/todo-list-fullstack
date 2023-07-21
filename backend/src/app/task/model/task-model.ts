export interface TaskModel {
	taskId: string   
  name: string
  status: Status
  userId: string
  createdAt: Date 
  updatedAt: Date
}

export enum Status {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}