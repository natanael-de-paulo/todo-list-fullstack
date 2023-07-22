import UpdateTaskServiceFactory from "../../__mocks__/factories/update-task-service-factory";
import { DataTaskToUpdateDTO } from "../../dtos/data-task-to-update-dto";
import { Status } from "../../model/task-model";

describe("update task service", () => {
  it("should be able to update the task", async () => {
    const taskDataToUpdate: DataTaskToUpdateDTO = {
      name: "teste jest",
      status: Status.DONE,
      taskId: "65f01289-71e5-4faf-93d6-8e09ebdf0d46",
      userId: "861f79b2-f3a6-4ee6-9672-7746deda6904"
    }

    expect(await UpdateTaskServiceFactory.execute(taskDataToUpdate)).toBeUndefined()
  });

  it("should be able to update task with status only", async () => {
    const taskDataToUpdate: DataTaskToUpdateDTO = {
      status: Status.DONE,
      taskId: "65f01289-71e5-4faf-93d6-8e09ebdf0d46",
      userId: "861f79b2-f3a6-4ee6-9672-7746deda6904"
    }

    expect(await UpdateTaskServiceFactory.execute(taskDataToUpdate)).toBeUndefined()
  });

  it("should be able to update task with name only", async () => {
    const taskDataToUpdate: DataTaskToUpdateDTO = {
      name: "teste jest",
      taskId: "65f01289-71e5-4faf-93d6-8e09ebdf0d46",
      userId: "861f79b2-f3a6-4ee6-9672-7746deda6904"
    }

    expect(await UpdateTaskServiceFactory.execute(taskDataToUpdate)).toBeUndefined()
  });


  it("shold be able to return an error message if the task does not exist", async () => {
      const taskDataToUpdate: DataTaskToUpdateDTO = {
        name: "teste jest",
        status: Status.DONE,
        taskId: "fdf9a70f-427a-466c-8878-d0490e224f44",
        userId: "861f79b2-f3a6-4ee6-9672-7746deda6904"
      }

      const sut = UpdateTaskServiceFactory.execute(taskDataToUpdate)
      await expect(sut).rejects.toThrow("task or user not found")
  })

  it("shold be able to return an error message if the user does not exist", async () => {
      const taskDataToUpdate: DataTaskToUpdateDTO = {
        name: "teste jest",
        status: Status.DONE,
        taskId: "fdf9a70f-427a-466c-8878-d0490e224f44",
        userId: "319d5dbb-dc27-47cf-8b1c-c69b952f00fd"
      }
    
      const sut = UpdateTaskServiceFactory.execute(taskDataToUpdate)
      await expect(sut).rejects.toThrow("task or user not found")
  })
})
