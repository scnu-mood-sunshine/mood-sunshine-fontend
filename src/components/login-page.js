import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from '../bin/axios'
import { withCookies } from 'react-cookie'
require('../styles/login-page.css');
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
        this.showLoginForm = this.showLoginForm.bind(this)
        this.showRegistForm = this.showRegistForm.bind(this)
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
        this.handleRegistSubmit = this.handleRegistSubmit.bind(this)
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

    handleLoginSubmit(event) {
        event.preventDefault()
        axios.post('/api/v1/user/login', {
            userName: this.loginUserName.value,
            password: this.loginPassword.value
        })
            .then(res => {
                const data = res.data
                console.log(data)
                // const code = data.code
                // const message = data.message
                // const userToken = data.token
                // if(userToken){
                //     cookies.set('mood_sunshine_user_token',userToken,'24h')
                //     this.setState({isLogin : true})
                // }
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleRegistSubmit(event) {
        event.preventDefault()
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
                            <form className='login-form-box' style={this.state.loginFormStyle} onSubmit={this.handleLoginSubmit}>
                                <input className='input-text-box' type='text' placeholder='手机号或邮箱' ref={(input) => this.loginUserName = input}/>
                                <input className='input-text-box' type='password' placeholder='密码' ref={(input) => this.loginPassword = input}/>
                                <input className='login-button' type='submit' value='登录'/>
                            </form>
                            <form className='relogin-form-box' style={this.state.regisFormStyle} onSubmit={this.handleRegistSubmit}>
                                <input className='input-text-box' type='text' placeholder='昵称' ref={(input) => this.registUserNickName = input}/>
                                <input className='input-text-box' type='text' placeholder='手机号或邮箱' ref={(input) => this.registUserName = input}/>
                                <input className='input-text-box' type='text' placeholder='密码' ref={(input) => this.registPassword = input}/>
                                <input className='login-button' type='submit' value='注册'/>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default Login;