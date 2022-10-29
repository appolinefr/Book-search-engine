const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async(parent, {}),
  },
};

module.exports = resolvers;

// addUser(username: String!, email: String!, password: String!): Auth
// saveBook(authors: [String!], description: String!, title: String!,
// image: String!, link: String!, bookId: String!): User
// removeBook(bookId: String!): User
