import { Sequelize } from "sequelize";

const db = new Sequelize("countries", "postgres", "1234", {
  host: "127.0.0.1",
  dialect: "postgres",
});

try {
  await db.authenticate();
  console.log("db connected");
} catch (error) {
  console.error("db con error:", error);
}

export default db;
