const typeDefs = `
type User{
    id:ID
    name:String!
    lastname:String!
    username:String!
}

input UserInput{
    id:ID
    name:String!
    lastname:String!
    username:String!
    password:String!
}

input LoginInput{
    username:String!
    password:String!
}
type Query{
    
    login(credentials:LoginInput):User
}
type Mutation{
    register(user:UserInput):User!
}

`;

export default typeDefs;
