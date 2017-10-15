const resolvers = {

  list: {

    name: 'gamesList',

    resolver(root, args, context) {
      return context.Games.find().fetch();
    },

  },

  total: {

    name: 'gamesTotal',

    resolver(root, args, context) {
      return context.Games.find().count();
    },

  },

};

export default resolvers;
