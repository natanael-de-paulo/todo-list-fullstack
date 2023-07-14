abstract class CustomException {
	protected message: string;
	protected status: number;

	constructor (message: string, status: number) {
		this.message = message;
		this.status = status;
	}
}

export { CustomException };