/*
 * Schema for Games collection


import optionsSchema from './optionsSchema.js';
import playerSchema from './playerSchema.js';
import turnSchema from './turnSchema.js';

const schema = {
  _id: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    viewableBy: ['guests'],
    onInsert: () => {
      return new Date();
    },
  },
  userId: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    resolveAs: {
      fieldName: 'creator',
      type: 'User',
      resolver: (game, args, context) => {
        return context.Users.findOne({ _id: game.userId }, {fields: context.Users.getViewableFields(context.currentUser, context.Users) });
      },
      addOriginalField: true
    }
  },
  name: {
    // name or brief description of game
    label: 'name',
    type: 'String',
    optional: true,
    viewableBy: ['guests'],
  },
  isOpen: {
    // is (numPlayers <= maxPlayers) && !isActive
    // ...OR, is the game open and accepting new players?
    label: 'isOpen',
    type: Boolean,
    optional: true,
    viewableBy: ['guests'],
  },
  isActive: {
    // has the game started?
    label: 'isActive',
    type: Boolean,
    optional: true,
    viewableBy: ['guests'],
  },
  options: {
    label: 'options',
    type: optionsSchema,
    optional: true,
    viewableBy: ['guests'],
  },
  players: {
    label: 'players',
    type: Array,
    optional: true,
    viewableBy: ['guests'],
  },
  'players.$': playerSchema,
  turns: {
    label: 'turns',
    type: Array,
    optional: true,
    viewableBy: ['guests'],
  },
  'turns.$': turnSchema,
};

export default schema;

*/
