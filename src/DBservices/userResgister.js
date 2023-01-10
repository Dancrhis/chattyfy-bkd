import {db,USERS_COLLECTION} from "./DBconnect.js"

export function userRegister(userData){
    console.log(userData)
    const user=db.collection(USERS_COLLECTION).insertOne(userData);

    return user
}