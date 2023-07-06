import { Request, Response } from '../../../infra/http/config'
import { IUsersServices } from '../services/interfaces/user-service'

class DeleteUserController{
  constructor(private deleteUserService: IUsersServices<string, void>){}
  
  async handle(req: Request, res: Response){
    const { userId } = req.params
    const respose = await this.deleteUserService.execute(userId)
    return res.json(respose)
  }
}

export default DeleteUserController