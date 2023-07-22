import { Status } from "../../../task/model/task-model";
import GetUserServiceFactory from "../../__mocks__/factories/get-user-service-factory";
import { UserResponseDTO } from "../../dtos/user-dto-response";

describe("get user service", () => { 
  it("should be able to return user by id", async () => {
    const userId = "79cb7be1-013b-4e84-bbf7-8a636559b5c6"
    const sut: UserResponseDTO = await GetUserServiceFactory.execute(userId)
    expect(sut.userId).toEqual(userId)
    expect(sut).toEqual({
      userId: "79cb7be1-013b-4e84-bbf7-8a636559b5c6",
      email: "user@example.com",
      name: "John Smith",
      createdAt: new Date("2023-04-10T04:14:11.715Z"),
      updatedAt: new Date("2023-04-11T13:14:49.543Z"),
      tasks: [
        {
          taskId: "68bc6be1-025c-6e64-ccf7-7a526359b4c5",
          name: "Task 1",
          userId: "79cb7be1-013b-4e84-bbf7-8a636559b5c6",
          status: Status.PENDING,
          createdAt: new Date("2023-04-10T04:14:11.715Z"),
          updatedAt: new Date("2023-04-11T13:14:49.543Z")
        }
      ]
    });
  });

  it("shold be able to return an error message if the user does not exist", async () => {
    const userId = "319d5dbb-dc27-47cf-8b1c-c69b952f00fd"
    await expect(GetUserServiceFactory.execute(userId)).rejects.toThrow() 
  });
})