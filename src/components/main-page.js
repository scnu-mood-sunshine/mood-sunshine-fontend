import React, { Component } from 'react'
import MoodList from './mood-wall'
import NavigationBar from './navigation-bar'
import ArticleIntroduction from './article-introduction'
import { Link } from 'react-router-dom'
import axios from '../bin/axios'
require('../styles/main-page.css')

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      postData: []
    }
  }
  componentDidMount() {
    const queryString = `?page=${this.state.page}`
    axios.get('/api/v1/posts' + queryString)
      .then(res => {
        this.setState({
          postData: res.data.data
        })
      })
  }
  render() {
    const articleLists = []
    let i = 0
    for (let item of this.state.postData) {
      articleLists.push(
        <ArticleIntroduction key={i}
          author={item.author}
          postTime={item.create_at}
          title={item.title}
          introduction={item.introduction}
          views={item.views}
          moodNum={item.mood_get}
          articleID={item.id}/>
      )
      i++
    }
    return (
      <div>
        <NavigationBar />
        <div className="main-contain-box">
          <div id="article-list" className="articleList">
            <ul>
              {articleLists}
            </ul>
          </div>
          <div id="function-container" className="function-container">
              <div type="button" className="button"><Link to={{pathname: '/editor'}}>写文章</Link></div>
              <div type="button" className="button right-button"></div>
              <MoodList />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
