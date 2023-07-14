import { Request, Response, NextFunction } from "../config"
import { Middleware } from "../middlewares/interfaces/middleware"

export const httpMiddlewareAdapter = (middleware: Middleware) => {
	return async (request: Request, response: Response, next: NextFunction) => {
		return await middleware.handle(request, response, next)
	}
}