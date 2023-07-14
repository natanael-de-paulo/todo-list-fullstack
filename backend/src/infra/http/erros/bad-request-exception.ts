import { CustomException } from "./custom-exeption";

class BadRequestException extends CustomException {
	constructor (message: string, status: number = 400) {
		super(message, status);
	}

  getStatus(): number {
    return this.status
  }

  getMessage(): string {
    return this.message
  }
}

export { BadRequestException };