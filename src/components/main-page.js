import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MoodList from './mood-wall.js'
require('../styles/main-page.css')


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
      <p className="article-text">某天在一篇有争议的帖子里跟帖发表了一下看法。 没想到过了一会儿一个人回复了我言辞激烈地辱骂我。 我觉得又好气又好笑，就给他怼回去，没想到他用更难听的话继续骂我这时候我点进他的头像，想查看他的发贴记录，但是被上锁了，看不到历…
      </p>
    </li>
    return(articleBox)
}

class ArticleList extends Component {
  render() {
    return (
      <div className='contain-box'>
        <div id="article-list" className="articleList">
          <ul className="articleList">
            <Article />
            <Article />
            <Article />
          </ul>
        </div>
        <div id="function-container" className="function-container">
            <input type="button" className="button"/>
            <input type="button" className="button right-button"/>
            <MoodList />
        </div>
      </div>
    );
  }
}
// ReactDOM.render(<ArticleList />, document.getElementById('root'));
export default ArticleList;
