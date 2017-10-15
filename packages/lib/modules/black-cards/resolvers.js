const resolvers = {

  list: {

    name: 'blackDeck',

    resolver(root, args, context) {
      return context.BlackCards.find().fetch();
    },

  },

  total: {

    name: 'blackTotal',

    resolver(root, {terms = {}}, context) {
      const {selector, options} = context.BlackCards.getParameters(terms, {}, context.currentUser);
      return context.BlackCards.find(selector, options).count();
    },

  },

};

export default resolvers;
