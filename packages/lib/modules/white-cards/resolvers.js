const resolvers = {

  list: {

    name: 'whiteDeck',

    resolver(root, args, context) {
      return context.WhiteCards.find().fetch();
    },

  },

  total: {

    name: 'whiteTotal',

    resolver(root, {terms = {}}, context) {
      const {selector, options} = context.WhiteCards.getParameters(terms, {}, context.currentUser);
      return context.WhiteCards.find(selector, options).count();
    },

  },

};

export default resolvers;
