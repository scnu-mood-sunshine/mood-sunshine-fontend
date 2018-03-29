//require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MainPage from './main-page'
import LoginPage from './login-page'
import MoodWall from './mood-wall'
import ArticleReading from './article-reading-page'
import UserPage from './user-page'
import CalendarAntd from './calendar-antd'
import ArticleIntroduction from './article-introduction'
// 引入编辑器以及编辑器样式
import Editor from './editor'
import { withCookies } from 'react-cookie'

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    return (
      <div>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/userinfo' children={props => {
            switch(props.match) {
              case '': <CalendarAntd/>
              case 'articles': <ArticleIntroduction/>
            }
          }} component={UserPage}/>
          <Route path='/editor' component={Editor}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/article/:id' component={ArticleReading}/>
        </Switch>
      </div>
    )
  }
}

export default withCookies(AppComponent);
