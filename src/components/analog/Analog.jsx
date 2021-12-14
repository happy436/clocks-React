import React from "react"
import "./Analog.css"
import {dateActionCreator} from "../../redux/dateReducer"

function Analog(props){

    setInterval(() => {props.dispatch(dateActionCreator())},1000)
    /* props.dispatch(dateActionCreator()) */
    
    const deg = 6
    let hh = props.hour * 30
    let mm = props.minute * deg
    let ss = props.second * deg

    return(
        <div className="box">
            <div className="clock analog">
                <div className="hour">
                    <div className="hr" style={{transform:`rotate(${hh}deg)`}}></div>
                </div>
                <div className="min">
                    <div className="mn" style={{transform:`rotate(${mm}deg)`}}></div>
                </div>
                <div className="sec">
                    <div className="sc" style={{transform:`rotate(${ss}deg)`}}></div>
                </div>
            </div>
        </div>
    )
}

export default Analog