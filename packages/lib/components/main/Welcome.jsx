import React from 'react';
import { Components, withCurrentUser } from 'meteor/vulcan:core';

// Welcome component when the user is logged in
const WelcomeLoggedIn = ({currentUser}) =>

    <div>

        Welcome, {currentUser.username}

    </div>

// Welcome component when the user is logged out
const WelcomeLoggedOut = ({currentUser}) =>

    <div>

        Welcome, Rando

    </div>

// Welcome component
const Welcome = ({currentUser}) =>

    <div className="main">



        {currentUser ?
            <WelcomeLoggedIn currentUser={currentUser} /> :
            <WelcomeLoggedOut currentUser={currentUser} />
        }

    </div>

export default withCurrentUser(Welcome);