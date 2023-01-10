import Post from "./Post.js"

class PostController {
  async create(request, response) {
    try {
      const {author, title, content, picture} = request.body
      const post = await Post.create({author, title, content, picture})
      response.json(post) 
    } catch (error) {
      response.status(500).json(error)
    }
  }

  async getAll(request, response) {
    try {
      const posts = await Post.find();
      return response.json(posts);
      
    } catch (error) {
      response.status(500).json(error)
    }
  }

  async getOne(request, response) {
    try {
      const {id} = request.params
      if (!id) {
        response.status(400).json({message: "Id is not set"})
      }
      const post = await Post.findById(id);
      return response.json(post)
      
    } catch (error) {
      response.status(500).json(error)
    }
  }

  async update(request, response) {
    try {
      const post = request.body
      if(!post._id) {
        response.status(400).json({message: "Id is not set"})
      }
      const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
      return response.json(updatePost)
    } catch (error) {
      response.status(500).json(error)
    }
  }

  async delete(request, response) {
    try {
      const {id} = request.params
      if (!id) {
        response.status(400).json({message: "Id is not set"})
      }
      const post = await Post.findByIdAndDelete(id);
      return response.json(post)
    } catch (error) {
      response.status(500).json(error)
    }
  }
}