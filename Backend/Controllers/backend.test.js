//import { request } from "express";
import supertest from "supertest";
import app from "./BackendControllers.js";

describe("Testing the get request for Get User In Database", () => {
  test("It should get a response of 200", () => {
    return supertest(app)
      .get("/GetUserInDatabase")
      .then((result) => {
        expect(result.statusCode).toBe(200);
      });
  });
});
describe("Testing the get request for GetUserId", () => {
  test("It should get a response of 200", () => {
    return supertest(app)
      .get("/GetUserId")
      .then((result) => {
        expect(result.statusCode).toBe(200);
        expect(result.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );
      });
  });
});

describe("Testing the get request for User Account Infomation", () => {
  test("It should get a response of 200", () => {
    return supertest(app)
      .get("/GetUserAccountInformation")
      .then((result) => {
        expect(result.statusCode).toBe(200);
      });
  });
});

describe("Testing the get request for Get User Fuel History", () => {
  test("It should get a response of 200", () => {
    return supertest(app)
      .get("/GetUserFuelHistory")
      .then((result) => {
        expect(result.statusCode).toBe(200);
      });
  });
});

/*  Post Tests  */

describe("Testing the post request for the Fuel Quote Form", () => {
  test("This should get a reponse of 200", async () => {
    const result = await supertest(app).post("/PostFuelQuoteForm").send({
      userId: "Test",
      password: "Test",
    });
    expect(result.statusCode).toBe(200);
  });
});

describe("Testing the post request for the First User Reqistration Form", () => {
  test("This should get a reponse of 200", async () => {
    const result = await supertest(app)
      .post("/PostUserRegistrationFirst")
      .send({
        username: "Test",
        password: "Test",
      });
    expect(result.statusCode).toBe(200);
  });
});

describe("Testing the post request for the Second User Registration Form", () => {
  test("This should get a reponse of 200", async () => {
    const result = await supertest(app)
      .post("/PostUserRegistrationSecond")
      .send({
        userId: "Test",
        password: "Test",
      });
    expect(result.statusCode).toBe(200);
  });
});
