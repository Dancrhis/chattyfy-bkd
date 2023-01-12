import { getLoginData } from "../DBservices/getLoginData.js";
import { userRegister } from "../DBservices/userResgister.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

const PUBLIC_KEY = `MIICWwIBAAKBgQCMMPeZQkY2H27j177099K9ZPdvsEKahU4SHnC5h/4FbiQrVoOniq/+/pGVdhXBvaP7hqYJQBbGBgsxQ0J+Ao4oCBHvrTNqu6ckxSrf3SDuyI8O1A/wGekg/7cU43XmH5jgdmef+YVJSU9lx5IBmrMnfgLQ5vSzpW9EXJNh7ji/nQIDAQABAoGAFRo12wr/2JvIrGFIbEV1om61VEma7PmN8+pDG5pd4WFf7moabTjSHzcgoPfidIRgT7dH/PJ5uxsjyimOs7scvK7ZzONeV8nBKsYxlnTLJ/ViM1vG0JAAGxTMIjh/jOcWJhoPn+WA3JedM8Ad9NcuJeKxUetYdB2QpU9Z6t/kAWECQQC9i8SV4+HmQNoba5Qa7TnVYeTmCGWX7o74ftbxb07a+t5hweBQtPmDE50lXUeS2aXkdbiWpiiRh90El0TYrwTlAkEAvVd9jovkEooq0AphGxeH/Ww0LkcplopBWeRRcZPapP7S7GfVEKxXjA7n+SxR43EN8X3R/zpyHPDaVGXUUwscWQJAKa9sW36Tdrz6ep9NIiLb3ja6TXC5TxGS9cmHYe+VywjzEVK/D2DNousUW1xJWl1tY3IUV2VRdLgJfnH6HSFYlQJAS4j4xQJX5XGLbN2HKci0bsxY8NFg7PaQ5aypNRdYFZS3TqqJnJI0huJ3drdQn9y9REb+nMSTO6p2X08UamC3WQJAVgMNd1tGJ2s42BJUZ+1YG6JzYfeBOHqoXkCJDSdWvNh2PpkeDfXnKq2s/YTXO/LTSKD45/S93LC44DF4A1O2UQ==`;
const PRIVATE_KEY =
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMMPeZQkY2H27j177099K9ZPdvsEKahU4SHnC5h/4FbiQrVoOniq/+/pGVdhXBvaP7hqYJQBbGBgsxQ0J+Ao4oCBHvrTNqu6ckxSrf3SDuyI8O1A/wGekg/7cU43XmH5jgdmef+YVJSU9lx5IBmrMnfgLQ5vSzpW9EXJNh7ji/nQIDAQAB";

const resolvers = {
   Query: {
     aQuery(_){
      return "toma query"
     }
  },
  Mutation: {
    async register(_, userData) {
      const { user: userD } = userData;
      try {
        const { password } = userD;
        const hashedPass = await hash(password, 12);
        const userDataWithHashedPassword = { ...userD, password: hashedPass };
        const user = await userRegister(userDataWithHashedPassword);
        userDataWithHashedPassword.id = user._id;
        return userDataWithHashedPassword;
      } catch (e) {
        console.log(e);
      }
    },
    
    async login(_, { credentials }) {
      try {
        const user = await getLoginData(credentials);
        const { username, name, lastname, id, password } = user;
        const isValidPasword = await compare(credentials.password, password);
        const userdata = { username, name, lastname, id };
        const tokenData = jwt.sign(userdata, PRIVATE_KEY);
        if (isValidPasword) return { tokenData };
        throw new Error("datos no validos");
      } catch (e) {
        console.error(e);
      }
    },
  },
};

export default resolvers;
