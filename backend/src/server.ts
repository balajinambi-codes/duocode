import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes";
import pathRoutes from "./routes/path.routes";
import progressRoutes from "./routes/progress.routes";

dotenv.config();

const app = express();

/*
  MIDDLEWARE
*/
app.use(cors());

app.use(express.json());

/*
  ROOT ROUTE
*/
app.get("/", (_req, res) => {
  res.json({
    message: "DuoCode Backend Running 🚀",
  });
});

/*
  API ROUTES
*/
app.use("/api/users", userRoutes);

app.use("/api/paths", pathRoutes);

app.use("/api/progress", progressRoutes);

/*
  SERVER
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});