"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_express_utils_1 = require("inversify-express-utils");
var inversify_1 = require("inversify");
var inversify_logger_middleware_1 = require("inversify-logger-middleware");
var bodyParser = __importStar(require("body-parser"));
// import * as helmet from "helmet";
var types_1 = __importDefault(require("./constant/types"));
var post_1 = require("./services/post");
var client_1 = require("./utils/mongodb/client");
require("./controllers/home");
require("./controllers/post");
// load everything needed to the Container
var container = new inversify_1.Container();
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
    var logger = inversify_logger_middleware_1.makeLoggerMiddleware();
    container.applyMiddleware(logger);
}
container.bind(types_1.default.MongoDBClient).to(client_1.MongoDBClient);
container.bind(types_1.default.PostService).to(post_1.PostService);
// start the server
var server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig(function (app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    //   app.use(helmet());
});
var app = server.build();
app.listen(3000);
console.log("Server started on port 3000 :)");
exports = module.exports = app;
