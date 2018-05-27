"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_express_utils_1 = require("inversify-express-utils");
var inversify_1 = require("inversify");
var post_1 = require("../services/post");
var types_1 = __importDefault(require("../constant/types"));
var PostController = /** @class */ (function () {
    function PostController(postService) {
        this.postService = postService;
    }
    PostController.prototype.getPosts = function (req) {
        return this.postService.getPosts();
    };
    PostController.prototype.getPost = function (request) {
        return this.postService.getPost(request.params.id);
    };
    PostController.prototype.newPost = function (request) {
        return this.postService.newPost(request.body);
    };
    PostController.prototype.updatePost = function (request) {
        return this.postService.updatePost(request.params.id, request.body);
    };
    PostController.prototype.deleteUser = function (request) {
        return this.postService.deletePost(request.params.id);
    };
    __decorate([
        inversify_express_utils_1.httpGet("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PostController.prototype, "getPosts", null);
    __decorate([
        inversify_express_utils_1.httpGet("/:id"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PostController.prototype, "getPost", null);
    __decorate([
        inversify_express_utils_1.httpPost("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PostController.prototype, "newPost", null);
    __decorate([
        inversify_express_utils_1.httpPut("/:id"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PostController.prototype, "updatePost", null);
    __decorate([
        inversify_express_utils_1.httpDelete("/:id"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PostController.prototype, "deleteUser", null);
    PostController = __decorate([
        inversify_express_utils_1.controller("/posts"),
        __param(0, inversify_1.inject(types_1.default.PostService)),
        __metadata("design:paramtypes", [post_1.PostService])
    ], PostController);
    return PostController;
}());
exports.PostController = PostController;
