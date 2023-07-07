import { Request, Response } from '../../../infra/http/config'
import { TaskResponseDTO } from '../dtos/task-dto-response'
import { ITasksServices } from '../services/interfaces/task-service'

class GetAllTaskController{
  constructor(private getAllTaskService: ITasksServices<string, TaskResponseDTO[]>){}
  
  async handle(req: Request, res: Response){
    const { userId } = req.params
    const respose = await this.getAllTaskService.execute(userId)
    return res.json(respose)
  }
}

export default GetAllTaskController