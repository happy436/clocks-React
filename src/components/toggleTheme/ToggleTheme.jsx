import React from "react"
import {themeChangeActionCreator} from "../../redux/themeReducer"
import "./ToggleTheme.css"

function ToggleThemeBtn(props){

    let changeTheme = () => {
        props.store.dispatch(themeChangeActionCreator())
    }

    return(
        <div className={`toggleClass ${props.ActiveTheme}`} onClick={changeTheme}>
        </div>
    )
}

export default ToggleThemeBtn