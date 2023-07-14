import { CustomException } from "./custom-exeption";

class AuthException extends CustomException {
	constructor (message: string, status: number = 401) {
		super(message, status);
	}

  getStatus(): number {
    return this.status
  }

  getMessage(): string {
    return this.message
  }
}

export { AuthException };