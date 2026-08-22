import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Niebo Interiors Backend Running 🚀",
  });
});

app.use("/api/leads", leadRoutes);

export default app;