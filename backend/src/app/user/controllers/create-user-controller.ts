import { Request, Response } from '../../../infra/http/config'
import { createUserRequestDTO } from '../dtos/create-user-dto-request'
import { createUserResponseDTO } from '../dtos/create-user-dto-response'
import { IUsersServices } from '../services/interfaces/user-service'

class CreateUserController{
  constructor(private createUserService: IUsersServices<createUserRequestDTO, createUserResponseDTO>){}
  
  async handle(req: Request, res: Response){
    const respose = await this.createUserService.execute(req.body)
    return res.json(respose)
  }
}

export default CreateUserController