import { Sequelize } from "sequelize";

// const db = new Sequelize("countries", "postgres", "1234", {
//   host: "127.0.0.1",
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: false // yoki true qiling
//   }
// });
const db = new Sequelize(
  "PGPASSWORD=XXMFZMcu6A2ypkSQg1SnANypkwAsWTSF psql -h dpg-cil56ldph6eg6kf8kdh0-a.singapore-postgres.render.com -U countries_8mjn_user countries_8mjn"
);
try {
  await db.authenticate();
  console.log("db connected");
} catch (error) {
  console.error("db con error:", error);
}

export default db;
