import { Request, Response  } from "../config"

export interface Controller {
  handle(request: Request, response: Response): Promise<any>;
}