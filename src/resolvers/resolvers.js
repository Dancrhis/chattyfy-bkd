import { getLoginData } from "../DBservices/getLoginData.js";
import { userRegister } from "../DBservices/userResgister.js";
const resolvers = {
  Query: {
    async login(_, { credentials }) {
      try {
        const user = await getLoginData(credentials);
        user.id = user._id;
        return user;
      } catch (e) {
        console.error(e);
      }
    },
  },
  Mutation:{
    async register(_,userData){
        try{
            console.log("userdata:", userData)
            const user= await userRegister(userData.user)
            console.log("user:", user)
            console.log(user)
            userData.user.id=user.insertedId
            return userData.user
        }
        catch(e){
            console.log(e)
        }
    }
  }
};

export default resolvers;
