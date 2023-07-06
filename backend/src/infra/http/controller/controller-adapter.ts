import { Request, Response  } from "../config"
import { Controller } from "./controller"

export const httpControllerAdapter = (controller: Controller) => {
	return async (request: Request, response: Response) => {
		return await controller.handle(request, response)
	}
}