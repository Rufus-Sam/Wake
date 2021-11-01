import { MODE_SET_ACTIVE_USERS, MODE_SET_USERNAME } from "../constants/modeConstants"

export const setUsername = (username) => {
    return {
        type: MODE_SET_USERNAME,
        data: username
    }
}
export const setActiveUsers = (activeUsers) => {
    return {
        type: MODE_SET_ACTIVE_USERS,
        activeUsers
    }
}