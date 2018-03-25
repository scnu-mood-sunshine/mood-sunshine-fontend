import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
// import Axios from 'axios';
require('../styles/login-page.css');
//import registerServiceWorker from './registerServiceWorker';
class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
            isRegist: false,
            loginFormStyle: {
                display: 'block'
            },
            regisFormStyle: {
                display: 'none'
            }
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRegist = this.handleRegist.bind(this)
        this.showLoginForm = this.showLoginForm.bind(this)
        this.showRegistForm = this.showRegistForm.bind(this)
    }

    showLoginForm() {
        this.setState({
            loginFormStyle: {
                display: 'block'
            },
            regisFormStyle: {
                display: 'none'
            }
        })
    }

    showRegistForm() {
        this.setState({
            loginFormStyle: {
                display: 'none'
            },
            regisFormStyle: {
                display: 'block'
            }
        })
    }

    handleLogin() {
        this.setState({
            isLogin: true
        })
    }

    handleRegist() {
        this.setState({
            isRegist: true
        })
    }

    render() {
        if (this.state.isLogin) {
            return <Redirect to='/'/>
        } else {
            return(
                <div className='login-container'>
                    <div className='web-description'>
                        <div className='big-title'>心晴</div>
                        <div className='small-title'>Mood note</div>
                        <div className='login-text'>愿您每一天都有好心情</div>
                    </div>
                    <div className="login-relogin-box">
                        <div className='login-box'>
                            <div className='normal-title'>
                                <div className='login-relogin-title' onClick={this.showLoginForm}>登录</div>
                                <div className='login-relogin-title' onClick={this.showRegistForm}>注册</div>
                            </div>
                            <div className='login-form-box' style={this.state.loginFormStyle}>
                                <input type='text' placeholder='手机号或邮箱'/>
                                <input type='text' placeholder='密码'/>
                                <button className='login-button' type='button' onClick={this.handleLogin}>登录</button>
                            </div>
                            <div className='relogin-form-box' style={this.state.regisFormStyle}>
                                <input type='text' placeholder='昵称'/>
                                <input type='text' placeholder='手机号或邮箱'/>
                                <input type='text' placeholder='密码'/>
                                <button className='login-button' type='button' onClick={this.handleRegist}>注册</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default Login;