import { inject, injectable } from "inversify";
import { MongoDBClient } from "../utils/mongodb/client";
import { Post } from "../models/post";
import TYPES from "../constant/types";

@injectable()
export class PostService {
  private mongoClient: MongoDBClient;

  constructor(
    @inject(TYPES.MongoDBClient) mongoClient: MongoDBClient,
  ) {
    this.mongoClient = mongoClient;
  }

  public getPosts(): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      this.mongoClient.find("posts", {}, (error, data: Post[]) => {
        resolve(data);
      });
    });
  }

  public getPost(id: string): Promise<Post> {
    return new Promise<Post>((resolve, reject) => {
      this.mongoClient.findOneById("posts", id, (error, data: Post) => {
        resolve(data);
      });
    });
  }

  public newPost(post: Post): Promise<Post> {
    return new Promise<Post>((resolve, reject) => {
      this.mongoClient.insert("posts", post, (error, data: Post) => {
        resolve(data);
      });
    });
  }

  public updatePost(id: string, post: Post): Promise<Post> {
    return new Promise<Post>((resolve, reject) => {
      this.mongoClient.update("posts", id, post, (error, data: Post) => {
        resolve(data);
      });
    });
  }

  public deletePost(id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.mongoClient.remove("posts", id, (error, data: any) => {
        resolve(data);
      });
    });
  }
}
