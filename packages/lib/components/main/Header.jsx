import React from 'react';
import { Components, withCurrentUser } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

// navigation bar component when the user is logged in
const NavLoggedIn = ({currentUser}) =>

    <div className="header-nav header-logged-in">

        <div className="header-accounts">

            <Components.ModalTrigger label={Users.getDisplayName(currentUser)} size="small">
                <div>
                    {Users.isAdmin(currentUser) ? <p>Administrator</p> : null}
                    {/* TODO: Customize modal with user stats */}
                    <Components.AccountsLoginForm />
                </div>
            </Components.ModalTrigger>

        </div>

    </div>

// navigation bar component when the user is logged out
const NavLoggedOut = ({currentUser}) =>

    <div className="header-nav header-logged-out">

        <Components.ModalTrigger label="Sign Up/Log In" size="small">
            <Components.AccountsLoginForm />
        </Components.ModalTrigger>

    </div>

// Header component
const Header = ({currentUser}) =>

    <div className="header-wrapper">

        <div className="header">

            <h1 className="logo">
                <img src="/packages/cards/lib/static/BlanksAgainstHumanity.png" alt="Blanks Against Humanity" />
            </h1>

            {currentUser ?
                <NavLoggedIn currentUser={currentUser} /> :
                <NavLoggedOut currentUser={currentUser} />
            }

        </div>

    </div>

export default withCurrentUser(Header);