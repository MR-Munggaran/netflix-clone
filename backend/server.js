import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./Routes/auth.routes.js";
import movieRoutes from "./Routes/movie.routes.js";
import tvSeriesRoutes from "./Routes/tvSeries.routes.js";
import searchRoutes from "./Routes/search.routes.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/database.js";
import { protectRoute } from "./middlewares/protectRoute.js";

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvSeriesRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});
