import express from "express";
import authRoutes from "./Routes/auth.routes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.use("/api/v1/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
