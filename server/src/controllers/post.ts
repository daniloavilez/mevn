import { controller, httpGet, httpPut, httpDelete, httpPost } from "inversify-express-utils";
import { Request, Response } from "express";
import { inject } from "inversify";
import { Post } from "../models/post";
import { PostService } from "../services/post";
import TYPES from "../constant/types";

@controller("/posts")
export class PostController {
    
    constructor( @inject(TYPES.PostService) private postService: PostService) { }

    @httpGet("/")
    public getPosts(req: Request): Promise<Post[]> {
        return this.postService.getPosts();
    }

    @httpGet("/:id")
    public getPost(request: Request): Promise<Post> {
      return this.postService.getPost(request.params.id);
    }
  
    @httpPost("/")
    public newPost(request: Request): Promise<Post> {
      return this.postService.newPost(request.body);
    }

    @httpPut("/:id")
    public updatePost(request: Request): Promise<Post> {
      return this.postService.updatePost(request.params.id, request.body);
    }
  
    @httpDelete("/:id")
    public deleteUser(request: Request): Promise<any> {
      return this.postService.deletePost(request.params.id);
    }
}
