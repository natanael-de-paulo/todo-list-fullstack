import { Request, Response } from '../../../infra/http/config'
import { TaskResponseDTO } from '../dtos/task-dto-response'
import { ITasksServices } from '../services/interfaces/task-service'


class GetTaskController{
  constructor(private getTaskService: ITasksServices<{userId: string, taskId: string}, TaskResponseDTO>){}
  
  async handle(req: Request, res: Response){
    const { userId, taskId } = req.params
    const respose = await this.getTaskService.execute({userId, taskId})
    return res.json(respose)
  }
}

export default GetTaskController