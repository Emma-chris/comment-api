// src/app.ts
import express from "express";
import commentRoutes from "./routes/commentRoutes";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/comments", commentRoutes);

export default app;
