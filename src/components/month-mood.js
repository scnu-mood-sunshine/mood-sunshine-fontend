import React from 'react'
import moment from 'moment'
require('../styles/month-mood.css')

class MonthMood extends React.Component{
    render(){
        return(
            <div className='month-mood-container'>
                <div className='mood-record-container'>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default MonthMood