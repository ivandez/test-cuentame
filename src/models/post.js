import { DataTypes } from "sequelize";

import sequelize from "../db/dbConnection.js";

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

export default Post;
