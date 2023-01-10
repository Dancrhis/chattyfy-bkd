import { db, DBconnect, USERS_COLLECTION } from "./DBconnect.js";

export async function getLoginData({ username, password }) {
  console.log("username:", username, "password:", password);
  const user = await db
    .collection(USERS_COLLECTION)
    .findOne({ username: username, password: password });

  return user;
}
