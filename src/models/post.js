import { DataTypes } from "sequelize";

import sequelize from "../db/dbConnection.js";
import Comment from "./Comment.js";

const Post = sequelize.define(
  "Post",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "posts",
  }
);

Post.hasMany(Comment, {
  foreignKey: "PostId",
});

Comment.belongsTo(Post);

export default Post;
