"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var chai_1 = require("chai");
var post_1 = require("../../src/controllers/post");
var post_2 = require("../../src/services/post");
var MongoDBClientMock = /** @class */ (function () {
    function MongoDBClientMock() {
    }
    /**
     * find
     */
    MongoDBClientMock.prototype.find = function (collection, filter, result) {
        return result(null, [{
                title: "New Title",
                description: "New Desc"
            }, {
                title: "Title2",
                description: "Desc2"
            }]);
    };
    /**
     * findOneById
     */
    MongoDBClientMock.prototype.findOneById = function (collection, objectId, result) {
        return result(null, {
            title: "New Title",
            description: "Desc1"
        });
    };
    return MongoDBClientMock;
}());
describe("PostController", function () {
    var controller;
    beforeEach(function () {
        controller = new post_1.PostController(new post_2.PostService(new MongoDBClientMock()));
    });
    it("should return all posts", function (done) {
        controller.getPosts().then(function (data) {
            chai_1.expect(data).to.deep.equal([{
                    title: "New Title",
                    description: "New Desc"
                }, {
                    title: "Title2",
                    description: "Desc2"
                }]);
            done();
        });
    });
    it("should return one post", function (done) {
        controller.getPost({
            params: {
                id: "t"
            }
        }).then(function (data) {
            chai_1.expect(data).to.deep.equal({
                title: "New Title",
                description: "Desc1"
            });
            done();
        });
    });
});
