import React from 'react';
import { withCookies } from 'react-cookie'
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
                        查看全文
                    </div>
                </div>
                <hr className='hr'></hr>
            </li>
        )
    }
}

export default withCookies(UserArticle);