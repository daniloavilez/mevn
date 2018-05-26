import "reflect-metadata";
import { expect } from "chai";
import { PostController } from "../../src/controllers/post";
import { PostService } from "../../src/services/post";

class MongoDBClientMock {
    public db;

    constructor() {}

    /**
     * find
     */
    public find(collection, filter, result: (error, data) => void) {
        return result(null, [{
            title: "New Title",
            description: "New Desc"
        }, {
            title: "Title2",
            description: "Desc2"
        }]);
    }

    /**
     * findOneById
     */
    public findOneById(collection, objectId, result: (error, data) => void) {
        return result(null, {
            title: "New Title",
            description: "Desc1"
        });
    }
}

describe("PostController", () => {
    let controller;

    beforeEach(() => {
        controller = new PostController(new PostService(new MongoDBClientMock()));
    });

    it("should return all posts", (done) => {
        controller.getPosts().then((data) => {
            expect(data).to.deep.equal(
                [{
                    title: "New Title",
                    description: "New Desc"
                }, {
                    title: "Title2",
                    description: "Desc2"
                }]
            );

            done();
        });
    });

    it("should return one post", (done) => {
        controller.getPost({
            params: {
                id: "t"
            }
        }).then((data) => {
            expect(data).to.deep.equal(
                {
                    title: "New Title",
                    description: "Desc1"
                }
            );

            done();
        });
    });
});