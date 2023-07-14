import { Request, Response } from '../../../infra/http/config'
import { IAuthService } from '../services/interfaces/auth-service';

class AuthController {
  constructor(private authService: IAuthService){}

	async handle(req: Request, res: Response) {
		const output = await this.authService.execute(req.body);
		return res.json(output);
	}
}

export default AuthController;