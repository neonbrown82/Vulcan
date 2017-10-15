/*
 *  Schema from Games.options object
 */

const optionsSchema = {
  isPrivate: {
    label: 'isPrivate',
    type: Boolean,
    optional: true,
    viewableBy: ['guests'],
  },
  maxScore: {
    label: 'maxScore',
    type: Number,
    optional: true,
    viewableBy: ['guests'],
  },
  maxPlayers: {
    label: 'maxPlayers',
    type: Number,
    optional: true,
    viewableBy: ['guests'],
  },
  timeLimit: {
    label: 'timeLimit',
    type: Number,
    optional: true,
    viewableBy: ['guests'],
  },
  blackDeck: {
    label: 'blackDeck',
    type: Array,
    optional: true,
    viewableBy: ['guests'],
  },
  'blackDeck.$': Object, // TODO: Replace with cardSchema, import at top. card{ _id: String }
  whiteDeck: {
    label: 'whiteDeck',
    type: Array,
    optional: true,
    viewableBy: ['guests'],
  },
  'whiteDeck.$': Object, // TODO: Replace with cardSchema, import at top. card{ _id: String }
};

export default optionsSchema;
