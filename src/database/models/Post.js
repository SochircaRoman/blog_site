const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    title : {type:string , required:true},
    content: {type:string , required: true},
    picture: {type:string , required: true}
})
const Post = mongoose.model("Post", Schema);