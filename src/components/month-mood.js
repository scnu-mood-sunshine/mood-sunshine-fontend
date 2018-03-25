import React from 'react'
require('../styles/month-mood.css')

class RecordMood extends React.Component{
    constructor(){
        super()
        this.state = {
            goodDivWidth : 250,
            normalDivWidth : 450,
            badDivWidth : 350,
            goodTextColor : '#ff6969',
            normalTextColor : '#bfb2e2',
            badTextColor : '#90919a'
        }
    }
    render(){
        return(
            <div>
                <div className='progress-container'>
                    <div className='mood-record-progress good' style={{width:this.state.goodDivWidth}}></div>
                    <p style={{color:this.state.goodTextColor}}>250</p>
                </div>
                <div className='progress-container'>
                    <div className='mood-record-progress normal' style={{width:this.state.normalDivWidth}}></div>
                    <p style={{color:this.state.normalTextColor}}>450</p>
                </div>
                <div className='progress-container'>
                    <div className='mood-record-progress bad' style={{width:this.state.badDivWidth}}></div>
                    <p style={{color:this.state.badTextColor}}>350</p>
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