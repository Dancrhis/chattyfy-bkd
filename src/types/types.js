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
type token{
    tokenData: String!
}

input LoginInput{
    username:String!
    password:String!
}
type Query{
    aQuery:String
}
type Mutation{
    register(user:UserInput):User!
    login(credentials:LoginInput):token!
}

`;

export default typeDefs;
