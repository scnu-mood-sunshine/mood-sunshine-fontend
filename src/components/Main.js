require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import NavigationBar from './navigation-bar.js'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <NavigationBar />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
