import { Status } from "../../../app/task/model/task-model";
import { IInMemoryDatabase } from "./interface-in-memory-database";

const inMemoryDatabase: IInMemoryDatabase = {
  users: [
    {
      userId: "79cb7be1-013b-4e84-bbf7-8a636559b5c6",
      email: "user@example.com",
      name: "John Smith",
      password: "$2b$10$PInV5tu/FSv08AS6z.lTJOLSaMcZWgTaT4gNOi1Q7FSa1IrYX/iDm",
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
    },
     {
      userId: "861f79b2-f3a6-4ee6-9672-7746deda6904",
      email: "user2@example.com",
      name: "Carl Stiveness",
      password: "$2b$10$PInV5tu/FSv08AS6z.lTJOLSaMcZWgTaT4gNOi1Q7FSa1IrYX/iDm",
      createdAt: new Date("2023-04-10T04:14:11.715Z"),
      updatedAt: new Date("2023-04-11T13:14:49.543Z"),
      tasks: [
        {
          taskId: "acf3d30a-1244-4dd7-9335-1c6e5529879e",
          name: "Task user 2",
          userId: "861f79b2-f3a6-4ee6-9672-7746deda6904",
          status: Status.PENDING,
          createdAt: new Date("2023-04-10T04:14:11.715Z"),
          updatedAt: new Date("2023-04-11T13:14:49.543Z")
        },
        {
          taskId: "65f01289-71e5-4faf-93d6-8e09ebdf0d46",
          name: "Task 2 user 2",
          userId: "861f79b2-f3a6-4ee6-9672-7746deda6904",
          status: Status.DONE,
          createdAt: new Date("2023-04-10T04:14:11.715Z"),
          updatedAt: new Date("2023-04-11T13:14:49.543Z")
        }
      ]
    }
  ],
  tasks: [
    {
      taskId: "acf3d30a-1244-4dd7-9335-1c6e5529879e",
      name: "Task user 2",
      userId: "861f79b2-f3a6-4ee6-9672-7746deda6904",
      status: Status.DONE,
      createdAt: new Date("2023-04-10T04:14:11.715Z"),
      updatedAt: new Date("2023-04-11T13:14:49.543Z")
    },
    {
      taskId: "65f01289-71e5-4faf-93d6-8e09ebdf0d46",
      name: "Task 2 user 2",
      userId: "861f79b2-f3a6-4ee6-9672-7746deda6904",
      status: Status.DONE,
      createdAt: new Date("2023-04-10T04:14:11.715Z"),
      updatedAt: new Date("2023-04-11T13:14:49.543Z")
    }
  ]
}

export default inMemoryDatabase