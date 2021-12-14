import './App.css';
import ToggleThemeBtn from "./components/toggleTheme/ToggleTheme";
import Analog from "./components/analog/Analog";
import Calendar from "./components/Calendar/Calendar.jsx"
import Digital from "./components/digital/Digital.jsx"
import {clockChangeActionCreator} from "./redux/clockReducer"

function App(props) {
    let state = props.store.getState()
    let activeThemeIndex = state.themeReducer.activeTheme
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
    let ActiveTheme = state.themeReducer.themes[activeThemeIndex]

    let changeClockFunk = () => {
        props.store.dispatch(clockChangeActionCreator())
        localStorage.setItem('clock', state.clockReducer.activeClock)
    }

    let loadClock = () => {
        if(localStorage.getItem('clock')){
            return clocks[localStorage.getItem('clock')]
        } else {
            return clocks[state.clockReducer.activeClock]
        }
    }

    let loadTheme = () => {
        if(localStorage.getItem('theme')){
            return state.themeReducer.themes[localStorage.getItem('theme')]
        } else {
            return state.themeReducer.themes[state.themeReducer.activeTheme]
        }
    }

    return (
        <div className="AppWrapper">
            <div className={`App ${loadTheme()}`} onClick={changeClockFunk}>
                <div className="container">
                    {loadClock()}
                </div>
            </div>
            <ToggleThemeBtn 
                state={state.themeReducer}
                dispatch={props.store.dispatch} 
                ActiveTheme={ActiveTheme} 
                loadTheme={loadTheme}
            />
        </div>
    );
}

export default App;
