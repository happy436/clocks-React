import React from "react"
import "./Calendar.css"
import {dateActionCreator} from "../../redux/dateReducer"

const months = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function Calendar(props){

    setInterval(() => {props.dispatch(dateActionCreator())},43200000)
    
    return(
        <div className="box calendar">
            <div className="clock">
                <div className="year">{props.year}</div>
                <div className="month">{months[props.month]}</div>
                <div className="day">{props.day}</div>
            </div>
        </div>
    )
}

export default Calendar