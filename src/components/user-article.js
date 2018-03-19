import React from 'react';
require('../styles/user-article.css')

function Article(){
    let articleBox =
    <li className='user-article-box'>
        <div className='user-article-title'>
            物质永远无法得到满足，精神却可以被轻易慰籍。
        </div>
        <div className='article-time-box'>
            20:30 3月19日
        </div>
        <div className='article-text-container'>
            <div className='article-text'>
                物质永远无法得到满足，精神却可以被轻易慰籍。
                物质永远无法得到满足，精神却可以被轻易慰籍。
                物质永远无法得到满足，精神却可以被轻易慰籍。
            </div>
            <div className='read-full-option'>
                查看全文
            </div>
        </div>
        <hr className='hr'></hr>
    </li>
    return(articleBox)
}

class UserArticle extends React.Component{
    render(){
        return(
            <ul>
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </ul>
        )
    }
}

export default UserArticle;