import './App.css';
import ToggleThemeBtn from "./components/toggleTheme/ToggleTheme";
import Analog from "./components/analog/Analog";
import Calendar from "./components/Calendar/Calendar.jsx"
import Digital from "./components/digital/Digital.jsx"
import {clockChangeActionCreator} from "./redux/clockReducer"

function App(props) {
    let state = props.store.getState()
    let activeTheme = state.themeReducer.activeTheme
    let year = state.dateReducer.time.getFullYear()
    let monthIndex = state.dateReducer.time.getMonth() 
    let day = state.dateReducer.time.getDate()

    let hour = state.dateReducer.time.getHours()
    let minute = state.dateReducer.time.getMinutes()
    let second = state.dateReducer.time.getSeconds()

    let dispatch = props.store.dispatch

    let clocks = [
                <Analog
                    hour={hour}
                    minute={minute}
                    second={second}
                    dispatch={dispatch}
                />,
                <Digital
                    hour={hour}
                    minute={minute}
                    second={second}
                    dispatch={dispatch}
                />, 
                <Calendar 
                    year={year}
                    month={monthIndex}
                    day={day}
                    dispatch={dispatch}
                />
            ]
    let ActiveTheme = state.themeReducer.themes[activeTheme]

    let changeClockFunk = () => {
        props.store.dispatch(clockChangeActionCreator())
    }

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
