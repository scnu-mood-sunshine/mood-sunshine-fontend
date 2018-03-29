import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withCookies } from 'react-cookie'
require('../styles/navigation-bar.css')

class NavigationBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin : false,
            user : '登录/注册'
        }
    }

    componentDidMount(){
        const {cookies} = this.props
        if(cookies.get('mood_sunshine_user_token')){
            this.setState({isLogin : true, user : '个人'})
        }
    }

    render(){
        let loginOrisLogin = null
        if(this.state.isLogin){
            loginOrisLogin = <li className='right-icon'><Link to={{pathname: '/userinfo'}}>{this.state.user}</Link></li>
        }else{
            loginOrisLogin = <li className='right-icon'><Link to={{pathname: '/login'}}>{this.state.user}</Link></li>
        }
        return (
            <div className='nav-bar'>
                <div className='nav-bar-container'>
                    <li><Link to={{pathname: '/'}}>心晴</Link></li>
                    {loginOrisLogin}
                    <li className='right-icon'><Link to={{pathname: '/'}}>动态</Link></li>
                    <li className='right-icon'><Link to={{pathname: '/'}}>消息</Link></li>
                </div>
            </div>
        )
    }
}

export default withCookies(NavigationBar);