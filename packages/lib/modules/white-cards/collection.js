/**
 * The main WhiteCards collection definition file.
 */

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import resolvers from './resolvers.js';
import './fragments.js';
import mutations from './mutations.js';
import './permissions.js';
import './parameters.js';

const WhiteCards = createCollection({

  collectionName: 'WhiteCards',

  typeName: 'WhiteCard',

  schema,

  resolvers,

  mutations,

});

export default WhiteCards;
