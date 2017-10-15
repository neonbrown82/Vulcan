/*
 *  Schema for Games.turns.cardPool.$ object
 */

const playerTurnSchema = {
  cardId: {
    label: 'cardId',
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },
  playerId: {
    label: 'playerId',
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },
};

export default playerTurnSchema;
