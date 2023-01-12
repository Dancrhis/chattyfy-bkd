import {db,USERS_COLLECTION} from "./DBconnect.js"
import { userModel } from "../schema/user.js";

export function userRegister(userData){
    const user=new userModel(userData);
    return user.save()
}