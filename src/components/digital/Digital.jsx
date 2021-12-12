import React from "react"
import "./Digital.css"
import {dateActionCreator} from "../../redux/dateReducer"

function Digital(props){

    let hour = props.hour
    let minute = props.minute
    let second = props.second
    

    if(hour < 10){
        hour = `0${hour}`
    } else if(minute < 10){
        minute = `0${minute}`
    } else if(props.second < 10){
        second = `0${second}`
    }

    setInterval(() => {props.dispatch(dateActionCreator())},1000)

    return(
        <div className="box digital">
            <div className="clock">
                <div className="hour">
                    <div className="hr" id="hr">{hour}</div>
                </div>
                <div className="divide">:</div>
                <div className="min">
                    <div className="mn" id="mn">{minute}</div>
                </div>
                <div className="divide">:</div>
                <div className="sec">
                    <div className="sc" id="sc">{second}</div>
                </div>
            </div>
        </div>
    )
}

export default Digital