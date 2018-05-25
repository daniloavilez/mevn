"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var connStr = "mongodb://localhost:27017";
var dbName = "posts";
var MongoDBConnection = /** @class */ (function () {
    function MongoDBConnection() {
    }
    MongoDBConnection.getConnection = function (result) {
        var _this = this;
        if (this.isConnected) {
            return result(this.db);
        }
        else {
            this.connect(function (error, db) {
                return result(_this.db);
            });
        }
    };
    MongoDBConnection.connect = function (result) {
        var _this = this;
        mongodb_1.MongoClient.connect(connStr, function (err, client) {
            _this.db = client.db(dbName);
            _this.isConnected = true;
            return result(err, _this.db);
        });
    };
    MongoDBConnection.isConnected = false;
    return MongoDBConnection;
}());
exports.MongoDBConnection = MongoDBConnection;
