import './App.css';
import ToggleThemeBtn from "./components/toggleTheme/ToggleTheme";
import Analog from "./components/analog/Analog";
import Calendar from "./components/Calendar/Calendar.jsx"
import Digital from "./components/digital/Digital.jsx"
import {clockChangeActionCreator} from "./redux/clockReducer"
import {dateActionCreator} from "./redux/dateReducer"

function App(props) {
    let state = props.store.getState()
    let activeTheme = state.themeReducer.activeTheme
    let year = state.dateReducer.time.getFullYear()
    let monthIndex = state.dateReducer.time.getMonth() 
    let day = state.dateReducer.time.getDate()

    let hour = state.dateReducer.time.getHours()
    let minute = state.dateReducer.time.getMinutes()
    let second = state.dateReducer.time.getSeconds()

    if(hour < 10){
        hour = `0${hour}`
    } else if(minute < 10){
        minute = `0${minute}`
    } else if(second < 10){
        second = `0${second}`
    }

    let clocks = [
                <Analog
                    hour={hour}
                    minute={minute}
                    second={second}
                />,
                <Digital
                    hour={hour}
                    minute={minute}
                    second={second}
                />, 
                <Calendar 
                    year={year}
                    month={monthIndex}
                    day={day}
                />
            ]
    let ActiveTheme = state.themeReducer.themes[activeTheme]

    window.state = state

    let changeClockFunk = () => {
        props.store.dispatch(clockChangeActionCreator())
    }

    setInterval(() => {props.store.dispatch(dateActionCreator())},1000)

    return (
        <div className="AppWrapper">
            <div className={`App ${ActiveTheme}`} onClick={changeClockFunk}>
                <div className="container">
                    {clocks[state.clockReducer.activeClock]}
                </div>
            </div>
            <ToggleThemeBtn store={props.store} ActiveTheme={ActiveTheme}/>
        </div>
    );
}

export default App;
