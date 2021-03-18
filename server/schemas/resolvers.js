const { AuthenticationError } = require('apollo-server-express');
const bookSchema = require("../models/Book");
const User = require("../models/User");


const resolvers = {
  Query: {
    me: async (parent, args) => {
      return await User.find().populate("savedBooks");
    },
    savedBooks: async (parent, { id }) => {
      return savedBooks.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      return { token, user } ;
    }
  },
};

module.exports = resolvers;