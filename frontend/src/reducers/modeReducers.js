import { MODE_SET_ACTIVE_USERS, MODE_SET_USERNAME } from "../constants/modeConstants"

const initialState = {
    username: '',
    activeUsers: []
}

const modeReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODE_SET_USERNAME:
            return {
                ...state,
                username: action.data
            }
        case MODE_SET_ACTIVE_USERS:
            return {
                ...state,
                activeUsers: action.activeUsers
            }
        default:
            return state
    }
}

export default modeReducer