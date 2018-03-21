//require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ArticleList from './main-page.js'
import Login from './login-page.js'
import MoodWall from './mood-wall.js'
import ArticleReading from './article-reading-page.js'
import Test from './test'
import NavigationBar from './navigation-bar.js'
import UserPage from './user-page.js'
// 引入编辑器以及编辑器样式
import Editor from './editor'
import CalendarControl from './calendar-antd.js'


class AppComponent extends React.Component {

  render() {
  
    return (
      <CalendarControl />
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
