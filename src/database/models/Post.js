'use strict';

const { Model } = require('mongoose');
module.exports = (mongoose, DataTypes) => {
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.String,
        required: true
      },
      content: {
        type: DataTypes.String,
        required: true
      },
      picture: {
        type: DataTypes.String,
        required: true
      }
    },
    {
      mongoose,
      modelName: 'Post'
  });
  return Post;
};