import mongoose from "mongoose";

const schema = mongoose.Schema;

const postSchema = new schema({
    description: String,
    title: String,
});

const post = mongoose.model("Post", postSchema);

export default post;
