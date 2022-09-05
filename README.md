# Project name: Blog site

# Entities:

## User
```
{
  id: int(PK, autoincrement),
  name: string(required, min: 5: max: 50),
  admin_root: boolean(optional)
}
```
## Post
```
{
  id: int(PK, autoincrement),
  image: string(required, path to file),
  author: string(required, min: 5: max: 50),
  tags: string(required, min: 5: max: 50),
  title: string(required, min: 5: max: 150),
  description: string(required, min: 100: max: 5000),
  user_id: int(required, FK to user.id)
}
```
## Example: https://ibb.co/tB91gTf

## Custom endpoints
+ Find post by name
+ Find post by tags
+ Get all posts
