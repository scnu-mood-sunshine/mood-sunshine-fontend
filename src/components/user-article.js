import React from 'react';
import { withCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
require('../styles/user-article.css')

class UserArticle extends React.Component{
    render(){
        return(
            <li className='user-article-box'>
                <div className='user-article-title'>
                    {this.props.title}
                </div>
                <div className='article-time-box'>
                    {this.props.time}
                </div>
                <div className='article-text-container'>
                    <div className='article-text'>
                        {this.props.introduction}
                    </div>
                    <div className='read-full-option'>
                        <Link to={{pathname: '/article/' + this.props.postId}}>查看全文</Link>
                    </div>
                </div>
                <hr className='hr'></hr>
            </li>
        )
    }
}

export default withCookies(UserArticle);