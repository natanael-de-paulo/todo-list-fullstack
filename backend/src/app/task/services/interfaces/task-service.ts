export interface ITasksServices<I, O> {
  execute(input: I): Promise<O>
}