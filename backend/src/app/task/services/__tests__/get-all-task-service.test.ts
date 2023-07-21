import getAllTaskServiceFactory from "../../__mocks__/factories/get-all-task-service-factory";
import { Status } from "../../model/task-model";

describe("", () => {
  it("", async () => {

    const userId = "861f79b2-f3a6-4ee6-9672-7746deda6904"
    const sut = await getAllTaskServiceFactory.execute(userId)

    expect(sut).toEqual(
      [
        {
          taskId: "acf3d30a-1244-4dd7-9335-1c6e5529879e",
          name: "Task user 2",
          userId: userId,
          status:  sut[0]?.status,
          createdAt: sut[0]?.createdAt,
          updatedAt: sut[0]?.updatedAt
        },
        {
          taskId: "65f01289-71e5-4faf-93d6-8e09ebdf0d46",
          name: "Task 2 user 2",
          userId: userId,
          status: sut[1]?.status,
          createdAt: sut[1]?.createdAt,
          updatedAt: sut[1]?.updatedAt
        }
      ]
    )
  });

  it("", async () => {
    const userId = "661f79b2-f3a6-4ee6-9672-7746deda6904"
    const sut = await getAllTaskServiceFactory.execute(userId)

    expect(sut).toEqual([])
  })
})

// [
//       {
//         taskId: "acf3d30a-1244-4dd7-9335-1c6e5529879e",
//         name: "Task user 2",
//         userId: "861f79b2-f3a6-4ee6-9672-7746deda6904",
//         status: Status.PENDING,
//         createdAt: new Date("2023-04-10T04:14:11.715Z"),
//         updatedAt: new Date("2023-04-11T13:14:49.543Z")
//       },
//       {
//         taskId: "65f01289-71e5-4faf-93d6-8e09ebdf0d46",
//         name: "Task 2 user 2",
//         userId: "861f79b2-f3a6-4ee6-9672-7746deda6904",
//         status: Status.DONE,
//         createdAt: new Date("2023-04-10T04:14:11.715Z"),
//         updatedAt: new Date("2023-04-11T13:14:49.543Z")
//       }
//     ]