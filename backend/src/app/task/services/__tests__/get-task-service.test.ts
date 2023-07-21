import GetTaskServiceFactory from "../../__mocks__/factories/get-task-service-factory";
import { Status } from "../../model/task-model";

describe("get task service", () => {
  it("should be able to return task by id", async () => {
    const userId = "861f79b2-f3a6-4ee6-9672-7746deda6904"
    const taskId = "65f01289-71e5-4faf-93d6-8e09ebdf0d46"

    const sut = await GetTaskServiceFactory.execute({ userId, taskId })
    expect(sut.taskId).toBe(taskId)
    expect(sut.userId).toBe(userId)
    expect(sut).toEqual({
          taskId: "65f01289-71e5-4faf-93d6-8e09ebdf0d46",
          name: "Task 2 user 2",
          userId: "861f79b2-f3a6-4ee6-9672-7746deda6904",
          status: Status.DONE,
          createdAt: new Date("2023-04-10T04:14:11.715Z"),
          updatedAt: new Date("2023-04-11T13:14:49.543Z")
        })
  });

  it("shold be able to return an error message if the task does not exist", async () => {
    const userId = "861f79b2-f3a6-4ee6-9672-7746deda6904"
    const taskId = "fdf9a70f-427a-466c-8878-d0490e224f44"

    try {
      await GetTaskServiceFactory.execute({ userId, taskId })
    } catch (error: any) {
      expect(error.message).toEqual("task or user not found") 
    }
  })

  it("shold be able to return an error message if the user does not exist", async () => {
    const userId = "319d5dbb-dc27-47cf-8b1c-c69b952f00fd"
    const taskId = "fdf9a70f-427a-466c-8878-d0490e224f44"

    try {
      await GetTaskServiceFactory.execute({ userId, taskId })
    } catch (error: any) {
      expect(error.message).toEqual("task or user not found") 
    }
  })
})
