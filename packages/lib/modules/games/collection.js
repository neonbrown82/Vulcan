/*
 * The main Games collection definition file.
 *
 * Game: {
 *    _id       : String,
 *    createdAt : Date,
 *    userId    : String,
 *    name      : String,
 *    isOpen    : Boolean,
 *    isActive  : Boolean,
 *    options   : {
 *                  isPrivate     : Boolean,
 *                  maxScore      : Int,
 *                  maxPlayers    : Int,
 *                  timeLimit     : Int,
 *                  blackDeck     : [Object],
 *                  whiteDeck     : [Object],
 *                },
 *    players   : {
 *                  _id           : String,
 *                  lastPooped    : Date,
 *                  awesomePoints : Int,
 *                  hand          : [Object],
 *                }
 * }
 */

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import resolvers from './resolvers.js';
import './fragments.js';
import mutations from './mutations.js';
import './permissions.js';
import './parameters.js';

const Games = createCollection({

  collectionName: 'Games',

  typeName: 'Game',

  schema,

  resolvers,

  mutations,

});

export default Games;
