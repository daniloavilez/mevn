import "reflect-metadata";
import { expect } from "chai";
import { HomeController } from "../../src/controllers/home";

describe("HomeController", () => {
    it("should return object with title property", () => {
        let service = new HomeController();

        expect(service.get())
            .to.deep.equal({ title: "Home" });
    });
});