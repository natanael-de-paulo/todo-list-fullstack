import DeleteTaskServiceFactory from "../../__mocks__/factories/delete-task-service-factory";

describe("delete task service", () => {
  it("should be able to delete the task ", async () => {
    const userId = "861f79b2-f3a6-4ee6-9672-7746deda6904"
    const taskId = "65f01289-71e5-4faf-93d6-8e09ebdf0d46"

    const sut = await DeleteTaskServiceFactory.execute({userId, taskId})
    expect(sut).toEqual(undefined)
  });

  it("shold be able to return an error message if the task does not exist", async () => {
    try {
      const userId = "861f79b2-f3a6-4ee6-9672-7746deda6904"
      const taskId = "65f01289-71e5-4faf-93d6-8e09ebdf0d46"
      await DeleteTaskServiceFactory.execute({userId, taskId})

    } catch (error: any) {
      expect(error.getMessage()).toThrowError("task or user not found")      
    }
  })
})
