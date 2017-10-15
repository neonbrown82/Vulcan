import { addRoute } from 'meteor/vulcan:core';

import Index from '../components/main/Index.jsx';
/*
 *  import NewGame from '../components/main/NewGame.jsx';
 *  import BrowseGames from '../components/main/BrowseGames.jsx';
 */

addRoute({ name: 'index', path: '/', component: Index });

/*  TODO: define components and add routes.
       -- Add dynamic route for /games/:{game.name}
       -- Resolve game is open, or user is in players[], or isAdmin
 *  addRoute({ name: 'new-game', path: '/games/new', component: NewGame });
 *  addRoute({ name: 'browse-games', path: '/games/browse', component: BrowseGames });
 */
