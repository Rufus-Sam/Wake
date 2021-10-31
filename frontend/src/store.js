import { createStore, combineReducers } from 'redux'
import modeReducer from './reducers/modeReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    mode: modeReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
)

export default store