import { Request, Response } from '../../../infra/http/config'
import { IUsersServices } from '../services/interfaces/user-service'

class CreateUserController{
  constructor(private createUserService: IUsersServices){}
  
  async handle(req: Request, res: Response){
    const respose = await this.createUserService.execute(req.body)
    return res.json(respose)
  }
}

export default CreateUserController