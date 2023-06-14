import express from "express";
import sequelize from "./config/db.js";
import { router } from "./routes/UserRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); // Set the allowed origin to the frontend URL

app.use(router);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tables created.");
  })
  .catch((err) => {
    console.log(err);
  });

const port = 3300;

app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT ${port}`);
});
