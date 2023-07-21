import { TaskModel } from '../model/task-model';

export type DataTaskToUpdateDTO = Partial<Pick<TaskModel, 'name' | 'status' >> & Pick<TaskModel, 'taskId' | 'userId'>