const Post = require('../models').Post

class PostsRepository {
    async create(post) {
      return await Post.create(post)
    }

    async getAll() {
        return await Post.findAll()
    }

    async getOne(id) {
        return await Post.findByPk(id)
    }

    async update(id, post) {
        const existingPost = await Post.findByPk(id)
        if (existingPost) {
            return await existingPost.update(post);
        }
        return null;
    }

    async delete(id) {
        return await Post.destroy({
            where: { id: id }
        })
    }
}

module.exports = new PostsRepository()