import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { Container } from "inversify";
import { makeLoggerMiddleware } from "inversify-logger-middleware";
import * as bodyParser from "body-parser";
// import * as helmet from "helmet";
import TYPES from "./constant/types";
import { PostService } from "./services/post";
import { MongoDBClient } from "./utils/mongodb/client";
import "./controllers/home";
import "./controllers/post";

// load everything needed to the Container
let container = new Container();

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
    let logger = makeLoggerMiddleware();
    container.applyMiddleware(logger);
}

container.bind<MongoDBClient>(TYPES.MongoDBClient).to(MongoDBClient);
container.bind<PostService>(TYPES.PostService).to(PostService);

// start the server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.configure("development", () => {

  });
  app.configure("production", () => {
    
  });
//   app.use(helmet());
});

let app = server.build();
app.listen(3000);
console.log("Server started on port 3000 :)");

exports = module.exports = app;