import { controller, httpGet } from "inversify-express-utils";

@controller("/")
export class HomeController {
  @httpGet("/")
  public get(): any {
    return { title: "Home" };
  }
}
