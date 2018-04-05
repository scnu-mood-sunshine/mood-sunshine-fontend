import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withCookies } from 'react-cookie'
require('../styles/navigation-bar.css')

class NavigationBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin : false,
            user : '登录/注册',
            avatar : null,
            isScrollStyle : {
                opacity : 1
            }
        }
        this.handleOnScroll = this.handleOnScroll.bind(this)
    }

    componentWillMount() {
        const {cookies} = this.props
        if(cookies.get('mood_sunshine_user_token')){
            const userAvatar = cookies.get('mood_sunshine_user_imformation').avatar
            this.setState({isLogin: true, avatar: userAvatar})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleOnScroll)
    }

    handleOnScroll(){
        let scroll = document.documentElement.scrollTop
        if(scroll > 0){
            this.setState({isScrollStyle:{opacity : 0.7}})
        }
        if(scroll === 0){
            this.setState({isScrollStyle:{opacity : 1}})
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.isScrollStyle !== nextState.isScrollStyle
    }

    render(){
        let loginOrisLogin = null
        console.log(this.state.isLogin)
        if(this.state.isLogin){
            loginOrisLogin = <li className='right-icon'><Link to={{pathname: '/userinfo'}} className='user-avatar-box'><img src={this.state.avatar}></img></Link></li>
        }else{
            loginOrisLogin = <li className='right-icon'><Link to={{pathname: '/login'}}>{this.state.user}</Link></li>
        }
        return (
            <div className='nav-bar' style={this.state.isScrollStyle}>
                <div className='nav-bar-container'>
                    <li><Link to={{pathname: '/'}}>心晴</Link></li>
                    {loginOrisLogin}
                    <li className='right-icon'><Link to={{pathname: '/'}}>动态</Link></li>
                    <li className='right-icon'><Link to={{pathname: '/'}}>文章</Link></li>
                </div>
            </div>
        )
    }
}

export default withCookies(NavigationBar);