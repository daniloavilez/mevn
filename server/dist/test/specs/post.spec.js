"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../../src/app"));
describe("GET /Posts", function () {
    it("should return 200 OK", function (done) {
        supertest_1.default(app_1.default)
            .get("/posts")
            .expect(200, done);
    });
    it("");
});
