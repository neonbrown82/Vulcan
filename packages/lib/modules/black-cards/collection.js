/**
 * The main BlackCards collection definition file.
 */

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import resolvers from './resolvers.js';
import './fragments.js';
import mutations from './mutations.js';
import './permissions.js';
import './parameters.js';

const BlackCards = createCollection({

  collectionName: 'BlackCards',

  typeName: 'BlackCard',

  schema,

  resolvers,

  mutations,

});

export default BlackCards;
