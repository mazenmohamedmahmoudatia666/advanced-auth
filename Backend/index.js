import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser()); // Allows us to parse incoming cookies
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Enable CORS for development

// Authentication routes
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port: ", PORT);
});
