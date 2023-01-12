import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const URL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(URL);
const DBName = "chattify";
export const db = client.db(DBName);
export const USERS_COLLECTION = "users";

export async function DBconnect() {
  mongoose
    .connect(`${URL}/${DBName}`)
    .then(() => console.log("conectado a la base de datos"));
  await client.connect();
  
}
