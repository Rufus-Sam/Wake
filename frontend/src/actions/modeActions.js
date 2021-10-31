import { MODE_SET_USERNAME } from "../constants/modeConstants"

export const setUsername = (username) => {
    return {
        type: MODE_SET_USERNAME,
        data: username
    }
}

