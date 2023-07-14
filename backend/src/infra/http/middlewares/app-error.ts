import { Request, Response, NextFunction} from '../config'
import { BadRequestException } from '../erros/bad-request-exception';

export async function AppError (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
  
	if (err instanceof BadRequestException) {
		return res.status(err.getStatus()).json({
			message: err.message
		});
	}

	return res.status(500).json({
		status: 'error',
		message: `Internal Server Error - ${err.message}`
	});
  
	return next();
}