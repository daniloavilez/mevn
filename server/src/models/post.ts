import { injectable } from "inversify";

interface IPost {
  description: string;
  title: string;
  _id?: string;
}

@injectable()
export class Post implements IPost {
  constructor(
    public description: string,
    public title: string,
    public _id?: string,
  ) { }
}
