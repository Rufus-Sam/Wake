import { MODE_SET_USERNAME } from "../constants/modeConstants"

const initialState = {
    username: ''
}

const modeReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODE_SET_USERNAME:
            return {
                ...state,
                username: action.data.username
            }
        default:
            return state
    }
}

export default modeReducer