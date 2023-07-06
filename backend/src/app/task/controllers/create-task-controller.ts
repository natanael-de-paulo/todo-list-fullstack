import { ITasksServices } from "../services/interfaces/task-service"
import { Request, Response } from '../../../infra/http/config'
import { TaskResponseDTO } from "../dtos/task-dto-response"
import { CreateTaskRequestDTO } from "../dtos/create-task-dto-request"

class CreateTaskController{
  constructor(private createTaskService: ITasksServices<{taskData: CreateTaskRequestDTO, userId: string }, TaskResponseDTO>){}
  
  async handle(req: Request, res: Response){
    const taskData: CreateTaskRequestDTO = req.body
    const { userId } = req.params
    
    const respose = await this.createTaskService.execute({taskData , userId})
    return res.json(respose)
  }
}

export default CreateTaskController