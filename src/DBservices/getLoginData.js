import { db, DBconnect, USERS_COLLECTION } from "./DBconnect.js";
import { userModel } from "../schema/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// export async function getLoginData({ username, password }) {
//   console.log("username:", username, "password:", password);
//   const user = await db
//     .collection(USERS_COLLECTION)
//     .findOne({ username: username, password: password });

//   return user;
// }
export async function getLoginData({ username }) {
  
  const user = await userModel
    .findOne({
      username,
    })
    .exec();
  console.log(user);
  return user;
}
