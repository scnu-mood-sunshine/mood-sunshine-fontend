import React from 'react'
import moment from 'moment'
require('../styles/calendar.css')

var CalendarHeader = React.createClass({
    handleLeftClick:function(){
        var newMonth = parseInt(this.state.month) - 1;
        var year = this.state.year;
        if(newMonth < 1){
            year --;
            newMonth = 12;
        }
        alert('year')
        this.state.month = newMonth;
        this.state.year=year;
        this.setState(this.state);
        this.props.updateFilter(year,newMonth);
    },
    handleRightClick:function(){
        var newMonth = parseInt(this.state.month) + 1;
        var year = this.state.year;
        if( newMonth > 12 ){
            year ++;
            newMonth = 1;
        }
        this.state.month = newMonth;
        this.state.year=year;
        this.setState(this.state);
        this.props.updateFilter(year,newMonth);
    },
    render:function(){
        return(
            <div className="headerborder">
                <p>年</p>
                <p>月</p>
                <div className="triangle-left" onClick={this.handleLeftClick}> </div>
                <div className="triangle-right" onClick={this.handleRightClick}> </div>
            </div>
        )
    }
});
var CalendarBody = React.createClass({
    getMonthDays:function(){
        //根据月份获取当前天数
        var year = this.props.year,
            month = this.props.month;
        var temp = new Date(year,month,0);
        return temp.getDate();
    },
    getFirstDayWeek:function(){
                //根据年月返回当月1号是星期几
        var year = this.props.year,
            month = this.props.month;

        var dt = new Date(year+'/'+month+'/1');//new Date(year,month,1);
        var Weekdays = dt.getDay();
    
        return Weekdays;
    },
    render:function(){
        var arry1 =[],arry2 = [];
        var getDays = this.getMonthDays(),
            FirstDayWeek = this.getFirstDayWeek(),
            day = this.props.day ;
            for(var i = 0 ;i < FirstDayWeek; i++ ){
                arry1[i] = i;
            }
            for(var i = 0 ;i < getDays; i++ ){
                arry2[i] = (i+1);
            }
            var node1 = arry1.map(function(item){return <li></li>})
			var node2 = arry2.map(function(item){return (day == item)?<li >{item}</li>: <li>{item}</li>})
        return(
            <div>
                <div className="weekday">
                    <ul>
                        <li>SUN</li>
                        <li>MON</li>
                        <li>TUE</li>
                        <li>WED</li>
                        <li>THU</li>
                        <li>FRI</li>
                        <li>SAT</li>
                    </ul>
                </div>
                <div className="CalendarDay">
                    <ul>{node1}{node2}</ul>
                </div>
            </div>
        )
    }
});

var CalendarControl = React.createClass({
    getInitialState(){
        return{
            year:moment().format('YYYY'),
            month:moment().format('MM')
        }
    },
    handleFilterUpdate(filterYear,filterMonth) {
        this.setState({
        year: filterYear,
        month: filterMonth
        });
    },
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
})

export default CalendarControl