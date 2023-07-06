import { Request, Response } from '../../../infra/http/config'
import { dataUserToUpdateDTO } from '../dtos/data-user-dto-to-update'
import { updateUserResquestDTO } from '../dtos/update-user-dto-request'
import { IUsersServices } from '../services/interfaces/user-service'

class UpdateUserController{
  constructor(private updateUserService: IUsersServices<dataUserToUpdateDTO, void>){}
  
  async handle(req: Request, res: Response){
    const { userId } = req.params
    const dataUserToUpdate: updateUserResquestDTO = req.body
    const respose = await this.updateUserService.execute({dataUserToUpdate, userId })
    return res.json(respose)
  }
}

export default UpdateUserController