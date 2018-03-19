//require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ArticleList from './main-page.js'
import Login from './login-page.js'
import MoodWall from './mood-wall.js'
import ArticleReading from './article-reading-page.js'
import Test from './test'
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
