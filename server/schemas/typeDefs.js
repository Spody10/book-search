// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Auth {
    token: String
    user: [User]
  }

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

  type Book {
    bookId: Int
    authors: [String]
    description: String
    title: String
    link: String
  }

  type Query {
    me: [User]
    savedBooks(username: String): [savedBooks]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
  `;

// export the typeDefs
module.exports = typeDefs;