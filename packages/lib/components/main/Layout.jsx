/*
 *  The Layout Component
 */

import React from 'react';
import { Components } from 'meteor/vulcan:core';
import Helmet from 'react-helmet';
import Header from './Header.jsx';

const links = [
    {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css'
    },
    {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
    }
];

const Layout = ({children}) =>

    <div className="wrapper" id="wrapper">

        <Helmet title="Blanks Against Humanity" link={links} />

        <link />

        <Header />

        <div className="main-window">
            {children}
        </div>

    </div>

export default Layout;