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
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var inversify_1 = require("inversify");
var connection_1 = require("./connection");
var MongoDBClient = /** @class */ (function () {
    function MongoDBClient() {
        var _this = this;
        connection_1.MongoDBConnection.getConnection(function (connection) {
            _this.db = connection;
        });
    }
    MongoDBClient.prototype.find = function (collection, filter, result) {
        this.db.collection(collection).find(filter).toArray(function (error, find) {
            return result(error, find);
        });
    };
    MongoDBClient.prototype.findOneById = function (collection, objectId, result) {
        this.db.collection(collection).find({ _id: new mongodb_1.ObjectID(objectId) }).limit(1).toArray(function (error, find) {
            return result(error, find[0]);
        });
    };
    MongoDBClient.prototype.insert = function (collection, model, result) {
        this.db.collection(collection).insertOne(model, function (error, insert) {
            return result(error, insert.ops[0]);
        });
    };
    MongoDBClient.prototype.update = function (collection, objectId, model, result) {
        this.db.collection(collection).updateOne({ _id: new mongodb_1.ObjectID(objectId) }, { $set: model }, function (error, update) { return result(error, model); });
    };
    MongoDBClient.prototype.remove = function (collection, objectId, result) {
        this.db.collection(collection).deleteOne({ _id: new mongodb_1.ObjectID(objectId) }, function (error, remove) {
            return result(error, remove);
        });
    };
    MongoDBClient = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MongoDBClient);
    return MongoDBClient;
}());
exports.MongoDBClient = MongoDBClient;
