import CreateUserServiceFactory from "../../__mocks__/factories/create-user-service-factory";

describe("create user service", () => {
  it("should be able return user  id created", async () => {
    const data = {
      name: "Steve Caelis",
      email: "SteveCaelis@gmail.com",
      password: "Caelis",
    }

    const sut = await CreateUserServiceFactory.execute(data)
    expect(sut).toHaveProperty("userId", sut.userId)
    expect(sut).toHaveProperty("name", data.name)
    expect(sut).toHaveProperty("email", data.email)
  });
})