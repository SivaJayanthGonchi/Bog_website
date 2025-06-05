import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import blogRoutes from './routes/blogRoutes.js';
dotenv.config();

const app = express();


app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());


import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes);
app.use('/api/blogs', blogRoutes);

app.use('/api/users', userRoutes);


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch((err) => console.error(err));

  