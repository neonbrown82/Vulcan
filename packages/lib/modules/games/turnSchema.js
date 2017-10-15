/*
 *  Schema for Games.turns.$ object
 */

import playerTurnSchema from './playerTurnSchema.js';

const turnSchema = {
  blackCardId: {
    label: 'blackCardId',
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },
  cardPool: {
    label: 'cardPool',
    type: Array,
    optional: true,
    viewableBy: ['guests'],
  },
  'cardPool.$': playerTurnSchema,
  winner: {
    label: 'winner',
    type: playerTurnSchema,
    optional: true,
    viewableBy: ['guests'],
  },
};

export default turnSchema;
