/*
 *  Schema for Games.players.$ object
 */

const playerSchema = {
  _id: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },
  lastPooped: {
    label: 'lastPooped',
    type: Date,
    optional: true,
    viewableBy: ['guests'],
  },
  awesomePoints: {
    label: 'awesomePoints',
    type: Number,
    optional: true,
    viewableBy: ['guests'],
  },
  hand: {
    label: 'hand',
    type: Array,
    optional: true,
    viewableBy: ['guests'],
  },
  'hand.$': Object, // TODO: Create and import handSchema
};

export default playerSchema;
