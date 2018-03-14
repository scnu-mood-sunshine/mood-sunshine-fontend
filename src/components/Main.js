//require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ArticleList from './main-page.js'
// import MoodWall from './mood-wall.js'
import Test from './test'

class AppComponent extends React.Component {
  render() {
    return (
      <ArticleList />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
