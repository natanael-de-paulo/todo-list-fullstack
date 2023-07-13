export interface ICrypt {
  hash(data: string, rounds: number): Promise<string>
  compare(data: string, encrypted: string): Promise<boolean>
}