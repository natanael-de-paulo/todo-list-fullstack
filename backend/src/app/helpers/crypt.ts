import { ICrypt } from "./interfaces/icrypt"
import bcrypt from "../../libs/bcrypt"

class Crypt implements ICrypt {
	async hash(data: string, rounds: number): Promise<string> {
		return bcrypt.hash(data, rounds)
	}
	
	async compare(data: string, encrypted: string): Promise<boolean> {
		return bcrypt.compare(data, encrypted)
	}
}

export { Crypt }