import React, { Component } from 'react'
require('../styles/article-introduction.css')

class ArticleIntroduction extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li className="article-box">
        <div className="user-information-box">
          <div className="user-head-picture"></div>
          <p className="user-name">{this.props.author}</p>
          <p className="time">{this.props.postTime}</p>
        </div>
        <hr/>
        <p className="article-title">{this.props.title}</p>
        <p className="main-page-article-text">{this.props.introduction}</p>
        <div className='article-imformation'>
          <div>
            <p>阅读数：</p><p>{this.props.views}</p>
          </div>
          <div>
            <p>获得心情：</p><p>{this.props.moodNum}</p>
          </div>
        </div>
      </li>
    )
  }
}

ArticleIntroduction.defaultProps = {
  author: 'Rfon',
  postTime: Date.now().toLocaleString(),
  title: '我是标题',
  introduction: '我是简介，我是简介，我是简介，我是简介，我是简介，我是简介，我是简介，我是简介，我是简介，我是简介，我是简介，我是简介，我是简介，我是简介.',
  views: Math.ceil(10 * Math.random() * 100 * Math.random()),
  moodNum: Math.ceil(10 * Math.random() * 100 * Math.random())
}


ArticleIntroduction.propTypes = {
  author: React.PropTypes.string,
  postTime: React.PropTypes.string,
  title: React.PropTypes.string,
  introduction: React.PropTypes.string,
  views: React.PropTypes.number,
  moodNum: React.PropTypes.number
}


// ArticleIntroduction.propTypes = {
//   author: React.PropTypes.string.isRequired,
//   postTime: React.PropTypes.string.isRequired,
//   title: React.PropTypes.string.isRequired,
//   introduction: React.PropTypes.string.isRequired,
//   views: React.PropTypes.number.isRequired,
//   moodNum: React.PropTypes.number.isRequired
// }

export default ArticleIntroduction