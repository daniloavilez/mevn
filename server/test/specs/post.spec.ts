import request from "supertest";
import app from "../../src/app";

describe("GET /Posts", () => {
    it("should return 200 OK", (done) => {
        request(app)
            .get("/posts")
            .expect(200, done);
    });
});
