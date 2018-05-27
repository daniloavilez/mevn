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
var inversify_1 = require("inversify");
var client_1 = require("../utils/mongodb/client");
var types_1 = __importDefault(require("../constant/types"));
var PostService = /** @class */ (function () {
    function PostService(mongoClient) {
        this.mongoClient = mongoClient;
    }
    PostService.prototype.getPosts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.find("posts", {}, function (error, data) {
                resolve(data);
            });
        });
    };
    PostService.prototype.getPost = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.findOneById("posts", id, function (error, data) {
                resolve(data);
            });
        });
    };
    PostService.prototype.newPost = function (post) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.insert("posts", post, function (error, data) {
                resolve(data);
            });
        });
    };
    PostService.prototype.updatePost = function (id, post) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.update("posts", id, post, function (error, data) {
                resolve(data);
            });
        });
    };
    PostService.prototype.deletePost = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mongoClient.remove("posts", id, function (error, data) {
                resolve(data);
            });
        });
    };
    PostService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.default.MongoDBClient)),
        __metadata("design:paramtypes", [client_1.MongoDBClient])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
