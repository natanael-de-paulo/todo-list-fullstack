import { Request, Response } from '../../../infra/http/config'
import { DataTaskToUpdateDTO } from '../dtos/data-task-to-update-dto'
import { ITasksServices } from '../services/interfaces/task-service'

class UpdateTaskController{
  constructor(private getTaskService: ITasksServices<DataTaskToUpdateDTO, void>){}
  
  async handle(req: Request, res: Response){
    const { userId, taskId } = req.params
    const { name, status } = req.body
    const respose = await this.getTaskService.execute({userId, taskId, name, status})
    return res.json(respose)
  }
}

export default UpdateTaskController