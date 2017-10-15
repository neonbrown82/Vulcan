/*
 *  Register the GraphQL fragment used to query for Game data
 */

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment GamesItemFragment on Game {
    _id
    createdAt
    userId
    name
    isOpen
    isActive
    options
    players
    turns
  }
`);
