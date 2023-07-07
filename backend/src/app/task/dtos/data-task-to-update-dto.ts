import { TaskModel } from '../model/task-model';

export type DataTaskToUpdateDTO = Omit<TaskModel, 'createdAt' | 'updatedAt' >