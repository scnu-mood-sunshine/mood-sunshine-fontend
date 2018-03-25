import React, { Component } from 'react'
import MoodList from './mood-wall'
import NavigationBar from './navigation-bar'
import ArticleIntroduction from './article-introduction'
import axios from '../bin/axios'
require('../styles/main-page.css')

<<<<<<< HEAD
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
=======

function Article(props){
    let articleBox =
    <li className="article-box">
      <div className="user-information-box">
        <div className="user-head-picture">
        </div>
        <p className="user-name">R_FON
        </p>
        <p className="time">发表于2018-01-05
        </p>
      </div>
      <hr/>
      <p className="article-title">
      有哪些令人拍案叫绝的推理桥段？
      </p>
      <p className="main-page-article-text">某天在一篇有争议的帖子里跟帖发表了一下看法。 没想到过了一会儿一个人回复了我言辞激烈地辱骂我。 我觉得又好气又好笑，就给他怼回去，没想到他用更难听的话继续骂我这时候我点进他的头像，想查看他的发贴记录，但是被上锁了，看不到历…
      </p>
      <div className='article-imformation'>
        <div>
          <p>阅读数：</p><p>240</p>
        </div>
        <div>
          <p>获得心情：</p><p>240</p>
        </div>
        <div>
          <p>查看心情</p>
        </div>
      </div>
    </li>
    return(articleBox)
}

class ArticleList extends Component {
>>>>>>> 231d151d4d06f14d4adb6d557e5f7f0265934eff
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
          moodNum={item.mood_get}/>
      )
      i++
    }
    return (
      <div>
        <NavigationBar />
        <div className="contain-box">
          <div id="article-list" className="articleList">
            <ul className="articleList">
              {articleLists}
            </ul>
          </div>
          <div id="function-container" className="function-container">
              <input type="button" className="button"/>
              <input type="button" className="button right-button"/>
              <MoodList />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
