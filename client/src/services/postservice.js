import api from "./api";

export default {
    fetchPosts () {
        return api().get("posts");
    },

    addPost(params) {
        return api().post('posts', params);
    },

    updatePost(params) {
        return api().put('/posts/' + params.id, params);
    },

    getPost(params) {
        return api().get('post/' + params.id);
    },

    deletePost(post) {
        return api().delete('/posts/' + post.title + "/" + post.description);
    }
}
