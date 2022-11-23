import { DataTypes } from "sequelize";

import sequelize from "../db/dbConnection.js";

const Comment = sequelize.define(
  "Comment",
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "comments",
  }
);

export default Comment;
