const PostsService = require('../services/PostService');

class PostsController {
  async create(request, response) {
    try {
      return await response.status(200).json(await PostsService.create(request.body));
    } catch (error) {
      return response.status(400).json(JSON.stringify(error))
    }
  }

  async getAll(request, response) {
    try {
      return await response.status(200).json(await PostsService.getAll())
    } catch (error) {
      return await response.status(500).json(JSON.stringify(error))
    }
  }

  async getOne(request, response) {
    try {
      const post = await PostsService.getOne(request.params.id)
      if(post) {
        return response.status(200).json(post)
      }
      return response.status(404).json()

    } catch (error) {
      return response.status(500).json(JSON.stringify(error))
    }
  }

  async update(request, response) {
    try {
      const existingPost = await PostsService.getOne(request.params.id)
      if(existingPost) {
        return response.status(200).json(await existingPost.update(request.body));
      }
      return response.status(404).json();

    } catch (error) {
      return response.status(400).json(JSON.stringify(error))
    }
  }

  async delete(request, response) {
    try {
      return response.status(200).json(await PostsService.delete(request.params.id))
    } catch (error) {
      return response.status(400).json(JSON.stringify(error))
    }
  }
}