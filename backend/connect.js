import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const client = new MongoClient(process.env.ATLAS_URI);
let db;

export async function connectToMongo() {
  if (!db) {
    await client.connect();
    db = client.db("MovieDB"); 
    console.log(" Connected to MongoDB!");
  }
  return db;
}
