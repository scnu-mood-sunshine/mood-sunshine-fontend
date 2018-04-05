import React from 'react';
import NavigationBar from './navigation-bar.js'
import MoodList from './mood-wall'
import UserDynamic from './user-dynamic.js'
import UserArticle from './user-article.js'
import CalendarControl from './calendar-antd.js'
import axios from '../bin/axios'
import { withCookies } from 'react-cookie'
// import ArticleIntroduction from './article-introduction'
require('../styles/user-page.css')

class UserPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName : null,
            avatar : null,
            description : null,
            userPosts: [],
            subComponent: <CalendarControl/>
        }
        this.handleClickDynamic = this.handleClickDynamic.bind(this)
        this.handleClickArticle = this.handleClickArticle.bind(this)
        this.handleClickCalendarControl = this.handleClickCalendarControl.bind(this)
    }

    componentDidMount(){
        const { cookies } = this.props
        let userData = cookies.get('mood_sunshine_user_imformation')
        const userNickname = userData.nickname
        const userAvatar = userData.avatar
        axios.get('/api/auth/userposts', {
            headers: {
                'Authorization': 'Bearer ' + cookies.get('mood_sunshine_user_token')
            }
        })
            .then(res => {
                const userPosts = res.data.data
                this.setState({
                    userName: userNickname,
                    avatar: userAvatar,
                    userPosts: userPosts
                })
            })
    }

    handleClickDynamic () {
        this.setState({
            subComponent: <UserDynamic/>
        })
    }

    handleClickArticle () {
        const UserArticles = []
        for (let item of this.state.userPosts) {
            UserArticles.push(<UserArticle title={item.title}
                introduction={item.introduction} time={item.update_at}
                postId={item.id}
                key={Math.ceil(Math.random() * 1000)}/>)
        }
        this.setState({
            subComponent: UserArticles
        })
    }

    handleClickCalendarControl () {
        this.setState({
            subComponent: <CalendarControl/>
        })
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div className='container-box'>
                    <div className='function-box'>
                        <div className='function-option-container'>
                            <div onClick={this.handleClickDynamic}>动态</div>
                            <div onClick={this.handleClickArticle}>文章</div>
                            <div onClick={this.handleClickCalendarControl}>心情</div>
                            <div>收藏夹</div>
                            <div>关注的人</div>
                        </div>
                        <hr className='long-hr'></hr>
                        {this.state.subComponent}
                    </div>
                    <div className='user'>
                        <div className='head-container'>
                            <div className='head-picture-box'>
                                <img src={this.state.avatar}/>
                            </div>
                            <div className='user-imformation-container'>
                                <div className='user-page-user-name'>
                                    {this.state.userName}
                                </div>
                                <div className='user-sign'>
                                    物质永远无法得到满足，精神却可以被轻易慰籍
                                </div>
                            </div>
                        </div>
                        <MoodList />
                    </div>
                </div>
            </div>
        )
    }
}

export default withCookies(UserPage);