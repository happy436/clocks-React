import React from "react"
import {themeChangeActionCreator} from "../../redux/themeReducer"
import "./ToggleTheme.css"

function ToggleThemeBtn(props){

    let changeTheme = () => {
        props.dispatch(themeChangeActionCreator())
        localStorage.setItem('theme', props.state.activeTheme)
    }

    return(
        <div className={`toggleClass ${props.loadTheme()}`} onClick={changeTheme}>
        </div>
    )
}

export default ToggleThemeBtn