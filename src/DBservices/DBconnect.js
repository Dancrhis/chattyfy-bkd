import { MongoClient } from "mongodb";
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const DBName = "chattify";
export const db = client.db(DBName);
export const USERS_COLLECTION="users";

export async function DBconnect() {
  await client.connect();
  console.log("conectado a la base de datos");
}
