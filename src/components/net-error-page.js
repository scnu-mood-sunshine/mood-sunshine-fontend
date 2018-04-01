import React from 'react'
import { Link } from 'react-router-dom'
require('../styles/net-error-page.css')

class netErrorPage extends React.Component{
    constructor(){
        super()
        this.state = {
            imageSrc: '../images/404-image2.png',
            errorText: '虽然我们丢失了页面，但是我们绝对不会丢失你的心情',
            divHeight: {height: 0}
        }
    }

    componentDidMount(){
        let screenHeight = document.body.clientHeight
        this.setState({divHeight: {height: screenHeight}})
    }

    render(){
        return(
            <div className='net-error-container' style={this.state.divHeight}>
                <img src={this.state.imageSrc} className='error-image'></img>
                <div className='error-text-container'>
                    <div className='four-zero-four'>404</div>
                    <div className='error-text'>
                        {this.state.errorText}
                    </div>
                    <div className='return-button'><Link to={{pathname: '/'}}>返回主页</Link></div>
                </div>
            </div>
        )
    }
}

export default netErrorPage