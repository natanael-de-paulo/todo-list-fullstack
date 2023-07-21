import { IGeneratorUUID } from "./interfaces/igenerator-uuid"
import crypto from "crypto"

class GeneratorUUID implements IGeneratorUUID{
  ramdomUUID(): string {
    const output = crypto.randomUUID()
    return output
  }
}

export { GeneratorUUID }