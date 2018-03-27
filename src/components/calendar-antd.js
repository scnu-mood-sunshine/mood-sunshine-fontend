import React from 'react'
import moment from 'moment'
import MonthMood from './month-mood'
require('../styles/calendar.css')

class CalendarHeader extends React.Component{
    constructor(props) {
        super(props)
        this.handleLeftClick = this.handleLeftClick.bind(this)
        this.handleRightClick = this.handleRightClick.bind(this)
        this.handleMoodCount = this.handleMoodCount.bind(this)
        this.state = {
            year: this.props.year,
            month: this.props.month
        }
    }

    handleMoodClick() {
        this.props.changeComponent(!this.state.isCalendar)
        this.setState({
            isCalendar: !this.state.isCalendar
        })
    }

    handleLeftClick(){
        let newMonth = parseInt(this.state.month) - 1;
        let year = this.state.year;
        if(newMonth < 1){
            year --;
            newMonth = 12;
        }
        this.state.month = newMonth;
        console.log(newMonth)
        this.state.year=year;
        this.setState(this.state);
        this.props.updateFilter(year,newMonth,this.state.isCalendar);
    }
    handleRightClick(){
        let newMonth = parseInt(this.state.month) + 1;
        let year = this.state.year;
        if( newMonth > 12 ){
            year ++;
            newMonth = 1;
        }
        console.log(newMonth)
        this.state.month = newMonth;
        this.state.year=year;
        this.setState(this.state);
        this.props.updateFilter(year,newMonth,this.state.isCalendar);
    }
    handleMoodCount() {
        this.props.changeShowCalendar()
    }
    render(){
        return(
            <div>
                <div className="headerborder">
                    <div className="triangle-left" onClick={this.handleLeftClick}> </div>
                    <p>{this.state.year}年</p>
                    <p>{this.state.month}月</p>
                    <div className="triangle-right" onClick={this.handleRightClick}> </div>
                    <div className='month-mood' onClick={this.handleMoodCount}>本月心情统计</div>
                </div>
                <hr className='headerborder-hr'></hr>
            </div>
        )
    }
}
class CalendarBody extends React.Component{
    constructor(props) {
        super(props)
        this.getMonthDays = this.getMonthDays.bind(this)
        this.getFirstDayWeek = this.getFirstDayWeek.bind(this)
    }
    getMonthDays(){
        //根据月份获取当前天数
        let year = this.props.year,
            month = this.props.month;
        let temp = new Date(year,month,0);
        return temp.getDate();
    }
    getFirstDayWeek(){
                //根据年月返回当月1号是星期几
        let year = this.props.year,
            month = this.props.month;

        let dt = new Date(year+'/'+month+'/1');//new Date(year,month,1);
        let Weekdays = dt.getDay();
    
        return Weekdays;
    }
    render(){
        let node1 = [];
        let node2 = [];
        let getDays = this.getMonthDays(),
            FirstDayWeek = this.getFirstDayWeek(),
            day = this.props.day ;
        let moodPoint = <div className='mood-point-box'>
                            <div className='good-mood-point'></div>
                            <div className='normal-mood-point'></div>
                            <div className='bad-mood-point'></div>
                        </div>
            for(let i = 1 ;i <= FirstDayWeek; i++ ){
                node1.push(<li key={i}></li>)
            }
            for(let i = 1 ;i <= getDays; i++ ){

                if (day === i) {
                    node2.push(<li key={i+node1.length}><div>{i}</div>{moodPoint}</li>)
                } else {
                    node2.push(<li key={i+node1.length}><div>{i}</div>{moodPoint}</li>)
                }
            }
        return(
            <div>
                <div className="weekday">
                    <ul>
                        <li key={1}>SUN</li>
                        <li key={2}>MON</li>
                        <li key={3}>TUE</li>
                        <li key={4}>WED</li>
                        <li key={5}>THU</li>
                        <li key={6}>FRI</li>
                        <li key={7}>SAT</li>
                    </ul>
                </div>
                <div className="calendarDay">
                    <ul>{node1}{node2}</ul>
                </div>
            </div>
        )
    }
}

class CalendarControl extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            year: moment().format('YYYY'),
            month: moment().format('MM'),
            showCalendar: true
        }
        this.handleFilterUpdate = this.handleFilterUpdate.bind(this)
        this.state = {
            year: moment().format('YYYY'),
            month: moment().format('MM'),
            subComponent: null
        }
    }
    handleFilterUpdate(filterYear,filterMonth) {
        this.setState({
            year: filterYear,
            month: filterMonth
        })
    }

    handleMonthMood(){
        this.setState({

        })
    }

    changeShowCalendar() {
        return function () {
            const showCalendar = this.state.showCalendar
            this.setState({
                showCalendar: !showCalendar
            })
        }
    }

    render(){
        let subCalendar = null
        if (this.state.showCalendar) {
            subCalendar = <CalendarBody
                year = {this.state.year}
                month = {this.state.month}
                day = {this.state.day}/>
        } else {
            subCalendar = <MonthMood/>
        }
        return(
            <div>
                <CalendarHeader
                year = {this.state.year}
                month = {this.state.month}
                updateFilter={this.handleFilterUpdate}
                changeShowCalendar={this.changeShowCalendar().bind(this)}/>
                {subCalendar}
            </div>
        )
    }
}

export default CalendarControl