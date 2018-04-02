import React from 'react'
require('../styles/month-mood.css')

class RecordMood extends React.Component{
    constructor(){
        super()
        this.state = {
            goodDivWidth : 250,
            normalDivWidth : 450,
            badDivWidth : 350
        }
    }
    componentDidMount(){
        this.setState({
            goodDivWidth : 500,
            normalDivWidth : 100,
            badDivWidth : 50
        })
    }
    render(){
        return(
            <div>
                <div className={'progress-container'}>
                    <div className='mood-record-progress good' style={{width:this.state.goodDivWidth}}></div>
                    <p style={{color: '#ff6969'}}>{this.state.goodDivWidth}</p>
                </div>
                <div className='progress-container'>
                    <div className='mood-record-progress normal' style={{width:this.state.normalDivWidth}}></div>
                    <p style={{color: '#bfb2e2'}}>{this.state.normalDivWidth}</p>
                </div>
                <div className='progress-container'>
                    <div className='mood-record-progress bad' style={{width:this.state.badDivWidth}}></div>
                    <p style={{color: '#90919a'}}>{this.state.badDivWidth}</p>
                </div>
            </div>
        )
    }
}

class MonthMood extends React.Component{
    render(){
        return(
            <div className='month-mood-container'>
                <div className='mood-record-container'>
                    记录的心情
                    <RecordMood />
                </div>
                <div className='mood-record-container' style={{marginTop:30}}>
                    获得的心情
                    <RecordMood />
                </div>
            </div>
        )
    }
}

export default MonthMood