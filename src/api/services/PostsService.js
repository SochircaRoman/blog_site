const PostsRepository = require('../../database/repositories/PostsRepository')

class PostsService {
    async create(post) {
      return await PostsRepository.create(post)
  }

  async getAll() {
      return await PostsRepository.getAll()
  }

  async getOne(id) {
      return await PostsRepository.getOne(id)
  }

  async update(id, post) {
      const existingPost = await PostsRepository.getOne(id)
      if (existingPost) {
          return await existingPost.update(post);
      }
      return null;
  }

  async delete(id) {
      return await PostsRepository.delete(id)
  }
}

module.exports = new PostsService()