import { Request, Response, NextFunction } from "../../config"

export interface Middleware {
  handle(request: Request, response: Response, next: NextFunction): Promise<any>;
}