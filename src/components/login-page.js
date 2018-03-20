import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('../styles/login-page.css');
//import registerServiceWorker from './registerServiceWorker';
class Login extends Component{
    render(){
        return(
            <div>
                <div className='web-description'>
                    <div className='big-title'>心晴</div>
                    <div className='small-title'>Mood note</div>
                    <div className='login-text'>愿您每一天都有好心情</div>
                </div>
                <div className="login-relogin-box">
                    <div className='login-box'>
                        <div className='normal-title'>
                            <div className='login-relogin-title'>登录</div>
                            <div className='login-relogin-title'>注册</div>
                        </div>
                        <div className='login-form-box'>
                            <input type='text' value='手机号或邮箱'/>
                            <input type='text' value='密码'/>
                            <button className='login-button' type='button'>登录</button>
                        </div>
                        <div className='relogin-form-box'>
                            <input type='text' value='昵称'/>
                            <input type='text' value='手机号或邮箱'/>
                            <input type='text' value='密码'/>
                            <button className='login-button' type='button'>注册</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;