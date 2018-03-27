import React from 'react';
import NavigationBar from './navigation-bar.js'
import MoodList from './mood-wall'
import UserDynamic from './user-dynamic.js'
import UserArticle from './user-article.js'
import CalendarControl from './calendar-antd.js'
// import ArticleIntroduction from './article-introduction'
require('../styles/user-page.css')

class UserPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName : null,
            avata : null,
            description : null,
            subComponent: <CalendarControl/>
        }
        this.handleClickDynamic = this.handleClickDynamic.bind(this)
        this.handleClickArticle = this.handleClickArticle.bind(this)
        this.handleClickCalendarControl = this.handleClickCalendarControl.bind(this)
    }

    handleClickDynamic () {
        this.setState({
            subComponent: <UserDynamic/>
        })
    }

    handleClickArticle () {
        this.setState({
            subComponent: <UserArticle/>
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
                <div className='container'>
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
                            </div>
                            <div className='user-imformation-container'>
                                <div className='user-name'>
                                    UserName
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

export default UserPage;