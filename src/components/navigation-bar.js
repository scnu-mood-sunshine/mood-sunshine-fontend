import React, { Component } from 'react';
import { Link } from 'react-router-dom'
require('../styles/navigation-bar.css')

class NavigationBar extends Component{
    render(){
        return (
            <div className='nav-bar'>
                <div className='nav-bar-container'>
                    <li><Link to={{pathname: '/'}}>心晴</Link></li>
                    <li className='right-icon'><Link to={{pathname: '/userinfo'}}>个人</Link></li>
                    <li className='right-icon'><Link to={{pathname: '/'}}>动态</Link></li>
                    <li className='right-icon'><Link to={{pathname: '/'}}>消息</Link></li>
                </div>
            </div>
        )
    }
}

export default NavigationBar;