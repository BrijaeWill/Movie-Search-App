import express from "express";
import cors from "cors";
import moviesRouter from "./routes/movies.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple test middleware route
app.get("/", (_req, res) => {
  res.send(" Server is running!");
});
//Movie routes
app.use("/api/movies", moviesRouter);
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
