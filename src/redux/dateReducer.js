const NEW_DATE = "NEW_DATE"

let initialState = {
    time: new Date()
}

const dateReducer = (state = initialState, action) => {
    switch(action.type){
        case NEW_DATE:
            state.time = new Date()
            return state
        default:
            return state
    }
}

export const dateActionCreator = () => {
    return{
        type: NEW_DATE
    }
}

export default dateReducer