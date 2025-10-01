import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    const { title } = req.query; // ex: /api/movies/search?title=batman
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: process.env.API_KEY,
        s: title,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error fetching movies" });
  }
});

export default router;
