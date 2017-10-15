import { replaceComponent } from 'meteor/vulcan:core';

// Load Card collections
import './black-cards/collection.js';
import './white-cards/collection.js';

import Layout from '../components/main/Layout.jsx';
replaceComponent('Layout', Layout);

// Routes
import './routes.js';
