import React from 'react'
import moment from 'moment'
require('../styles/calendar.css')

class CalendarHeader extends React.Component{
    constructor(props) {
        super(props)
        this.handleLeftClick = this.handleLeftClick.bind(this)
        this.handleRightClick = this.handleRightClick.bind(this)
    }
    state = {
        year: this.props.year,
        month: this.props.month
    }
    handleLeftClick(){
        console.log(this.props)
        let newMonth = parseInt(this.state.month) - 1;
        let year = this.state.year;
        if(newMonth < 1){
            year --;
            newMonth = 12;
        }
        this.state.month = newMonth;
        this.state.year=year;
        this.setState(this.state);
        this.props.updateFilter(year,newMonth);
    }
    handleRightClick(){
        let newMonth = parseInt(this.state.month) + 1;
        let year = this.state.year;
        if( newMonth > 12 ){
            year ++;
            newMonth = 1;
        }
        this.state.month = newMonth;
        this.state.year=year;
        this.setState(this.state);
        this.props.updateFilter(year,newMonth);
    }
    render(){
        return(
            <div>
                <div className="headerborder">
                    <div className="triangle-left" onClick={this.handleLeftClick}> </div>
                    <p>{this.state.year}年</p>
                    <p>{this.state.month}月</p>
                    <div className="triangle-right" onClick={this.handleRightClick}> </div>
                    <div className='month-mood'>本月心情统计</div>
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
        this.handleFilterUpdate = this.handleFilterUpdate.bind(this)
    }
    state = {
        year: moment().format('YYYY'),
        month: moment().format('MM')
    }

    handleFilterUpdate(filterYear,filterMonth) {
        this.setState({
            year: filterYear,
            month: filterMonth
        });
    }
    render(){
        return(
            <div>
                <CalendarHeader
                year = {this.state.year}
                month = {this.state.month}
                updateFilter={this.handleFilterUpdate}/>
                <CalendarBody
                year = {this.state.year}
                month = {this.state.month}
                day = {this.state.day}/>
            </div>
        )
    }
}

export default CalendarControl