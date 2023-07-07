import { Request, Response } from '../../../infra/http/config'
import { DataTaskToUpdateDTO } from '../dtos/data-task-to-update-dto'
import { ITasksServices } from '../services/interfaces/task-service'

class DeleteTaskController{
  constructor(private deleteTaskService: ITasksServices<{userId: string, taskId: string}, void>){}
  
  async handle(req: Request, res: Response){
    const { userId, taskId } = req.params
    const respose = await this.deleteTaskService.execute({userId, taskId})
    return res.json(respose)
  }
}

export default DeleteTaskController