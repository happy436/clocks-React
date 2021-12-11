const CHANGE_CLOCK = "CHANGE_CLOCK"

let initialState = {
    clocks:['analog', 'digital', 'calendar'],
    activeClock:0
}

const clockReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_CLOCK:
            if(state.activeClock < state.clocks.length - 1){
                state.activeClock++
                return state
            } else {
                state.activeClock = 0
                return state
            }
        default:
            return state
    }
}

export const clockChangeActionCreator = () => {
    return{
        type: CHANGE_CLOCK
    }
}

export default clockReducer