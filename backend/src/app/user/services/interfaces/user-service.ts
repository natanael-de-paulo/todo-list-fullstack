export interface IUsersServices<I, O> {
  execute(input: I): Promise<O>
}