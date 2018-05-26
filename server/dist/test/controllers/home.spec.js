"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var chai_1 = require("chai");
var home_1 = require("../../src/controllers/home");
describe("HomeController", function () {
    it("should return object with title property", function () {
        var service = new home_1.HomeController();
        chai_1.expect(service.get())
            .to.deep.equal({ title: "Home" });
    });
});
