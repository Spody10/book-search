// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type savedBooks {
    description: String
    title: String
    link: String
  }

  type User {
    username: String
    email: String
    password: String
    savedBooks: [savedBooks]
  }
  type Query {
    me: [User]
    savedBooks(username: String): [savedBooks]
  }
  `;

// export the typeDefs
module.exports = typeDefs;