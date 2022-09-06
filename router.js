import Router from "express";
import Post from "./Post.js";

const router = new Router()

router.post("/posts", async (request, response) => {
  try {
    const {author, title, content, picture} = request.body
    const post = await Post.create({author, title, content, picture})
    response.json(post) 
  } catch (error) {
    response.status(500).json(error)
  }
})

router.get("/posts", )
router.get("/posts/:id", )
router.put("/posts", )
router.delete("/posts/:id", )

export default router;