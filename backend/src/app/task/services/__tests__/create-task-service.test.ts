import createTaskServiceFactory from "../../__mocks__/factories/create-task-service-factory";
import { GeneratorUUID } from "../../../helpers/generator-uuid";

describe("create task service", () => {
  it("should be able to return task created", async () => {
    const taskData = {
      name: "create task",
    }
    
    const generator = new GeneratorUUID()
    const userId = generator.ramdomUUID()
    const sut = await createTaskServiceFactory.execute({
      taskData,
      userId
    })

    expect(sut.userId).toEqual(userId)
    expect(sut).toEqual({
      taskId: sut.taskId,
      name: taskData.name,
      status: sut.status,
      userId: userId,
      createdAt: sut.createdAt,
      updatedAt: sut.updatedAt,
    })
  });
})