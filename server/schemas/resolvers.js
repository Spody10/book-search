const bookSchema = require("../models/Book");
const User = require("../models/User");

const resolvers = {
  Query: {
    me: async () => {
      return await User.find().populate("savedBooks");
    },
    savedBooks: async (parent, { id }) => {
      return savedBooks.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    login: async () => {},
  },
};

module.exports = resolvers;