import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const database = process.env.DB_DATABASE;

const user = process.env.DB_USER;

const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(database, user, password, {
  host: "localhost",
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
