import React from 'react';
import NavigationBar from './navigation-bar.js'
import MoodList from './mood-wall'
require('../styles/user-page.css')

class UserPage extends React.Component{
    render() {
        return (
            <div>
                <NavigationBar />
                <div className='container'>
                    <div className='function-box'>
                        <div className='function-option-container'>
                            <div>动态</div>
                            <div>文章</div>
                            <div>心情</div>
                            <div>收藏夹</div>
                            <div>关注的人</div>
                        </div>
                        <hr className='long-hr'></hr>
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