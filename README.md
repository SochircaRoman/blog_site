# Project name: Blog site

# Project description:
This is the back-end part of a blog site written in Express.js a framework of Node.js

In this project are used:
- Node/Express
- MySQL

Dependences:
- sequelize - ORM for MySQL
- nodemon - for start project
- bcryptjs - for created hashed passwords
- dotenv - for storing configuration variables
- jsonwebtoken - for tokens generation
- uuid - for generation unique identifier
- nodemailer - for email sending

# Entities:

## User
```
{
  id: int(PK, autoincrement),
  username: string(required, unique, min: 5: max: 50),
  password: string(required, min: 5 max: 60),
  email: string(required, unique, min: 5 max: 50),
  admin_root: boolean(default: false),
  activationLink: string(default: null, min: 5 max: 60),
  isActivated: boolean(default: false)
}
```
## Post
```
{
  id: int(PK, autoincrement),
  title: string(required, min: 5: max: 150),
  description: string(required, min: 100: max: 5000),
  author: string(required, min: 5: max: 50),
  image: string(required, path to file),
  date: date(default: now_date),
  userId: int(required, FK to User)
}
```
## Tag
```
{
  id: int(PK, autoincrement),
  name: string(required, min: 5: max: 50),
  postId: int(required, FK to Post)
}
```
## Token
```
{
  id: int(PK, autoincrement),
  name: string(required, min: 5: max: 50),
  refreshToken: string(required, min: 5: max: 60),
  userId: int(required, FK to User)
}
```
## Example: https://ibb.co/Svxpf5B

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
+ The users can be authenticated using username and password.
+ The users will have 2 groups: admin and simple users

## Working with files
Example: Every post entity will contain one image.

Must be implemented the following functionalities>
+ Upload cover image
+ Delete cover image
