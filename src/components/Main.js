require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import NavigationBar from './navigation-bar.js'
import UserPage from './user-page.js'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <UserPage />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
