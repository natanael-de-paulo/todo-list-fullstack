import createTaskServiceFactory from "../../__mocks__/factories/create-task-service-factory";
import { GeneratorUUID } from "../../../helpers/generator-uuid";

describe("", () => {
  it("", async () => {
    const taskData = {
      name: "teste jest"
    }
    
    const generator = new GeneratorUUID()
    const userId = generator.ramdomUUID()
    const sut = await createTaskServiceFactory.execute({
      taskData,
      userId
    })

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