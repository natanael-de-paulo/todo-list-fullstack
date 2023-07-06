import { Request, Response } from '../../../infra/http/config'
import { UserResponseDTO } from '../dtos/user-dto-response'
import { IUsersServices } from '../services/interfaces/user-service'

class GetUserController{
  constructor(private getUserService: IUsersServices<string, UserResponseDTO>){}
  
  async handle(req: Request, res: Response){
    const { userId } = req.params
    const respose = await this.getUserService.execute(userId)
    return res.json(respose)
  }
}

export default GetUserController