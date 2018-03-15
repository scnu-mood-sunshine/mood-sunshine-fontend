import React, { Component } from 'react';
require('../styles/navigation-bar.css')

class NavigationBar extends Component{
    render(){
        return (
            <div className='nav-bar'>
                <div className='nav-bar-container'>
                    <a>心晴</a>
                    <a className='right-icon'>个人</a>
                    <a className='right-icon'>动态</a>
                    <a className='right-icon'>消息</a>
                </div>
            </div>
        )
    }
}

export default NavigationBar;