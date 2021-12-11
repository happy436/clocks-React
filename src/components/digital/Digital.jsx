import React from "react"
import "./Digital.css"

function Digital(props){

    return(
        <div className="box digital">
            <div className="clock">
                <div className="hour">
                    <div className="hr" id="hr">{props.hour}</div>
                </div>
                <div className="divide">:</div>
                <div className="min">
                    <div className="mn" id="mn">{props.minute}</div>
                </div>
                <div className="divide">:</div>
                <div className="sec">
                    <div className="sc" id="sc">{props.second}</div>
                </div>
            </div>
        </div>
    )
}

export default Digital