import React from 'react';
import { Components, withCurrentUser } from 'meteor/vulcan:core';

import Welcome from './Welcome';
import GamesList from './GamesList';
import License from './License';

const IndexLoggedIn = ({currentUser}) =>

    <div>

        <GamesList />

    </div>

const IndexLoggedOut = ({currentUser}) =>

    <div>

        <License />

    </div>

const Index = ({currentUser}) =>

    <div className="main">
        <Welcome />
        {currentUser ?
            <IndexLoggedIn currentUser={currentUser} /> :
            <IndexLoggedOut currentUser={currentUser} />
        }
    </div>

export default withCurrentUser(Index);