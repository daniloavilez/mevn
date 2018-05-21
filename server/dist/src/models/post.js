"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var schema = mongoose_1.default.Schema;
var postSchema = new schema({
    description: String,
    title: String,
});
var post = mongoose_1.default.model("Post", postSchema);
exports.default = post;
