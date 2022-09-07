# Project name: Blog site

# Entities:

## User
```
{
  userId: int(PK, autoincrement),
  username: string(required, min: 5: max: 50),
  password: int(required, min: 5 max: 20),
  admin_root: boolean(optional)
}
```
## Post
```
{
  postId: int(PK, autoincrement),
  title: string(required, min: 5: max: 150),
  description: string(required, min: 100: max: 5000),
  author: string(required, min: 5: max: 50),
  image: string(required, path to file),
  userId: int(required, FK to userId)
}
```
## Tag
```
{
  tagId: int(PK, autoincrement),
  tag: string(required, min: 5: max: 50),
  postId: int(required, FK to postId)
  
}
```
## Example: https://ibb.co/kqD8Bwc

## Custom endpoints
+ Find post by name
+ Find post by tags
+ Get all posts
+ Get all users

## CRUD methods
+ Create a post
+ Get all posts
+ Update post
+ Delete post

## Custom endpoints
+ Get posts by tag
+ Get post by title

## User authentification

