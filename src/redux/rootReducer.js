import { adviceReducer, ADVICE_KEY } from "./adviceRedux/advice.reducer";
import { combineReducers } from "redux";


let rootReducer = combineReducers({
    [ADVICE_KEY]: adviceReducer
})

export {rootReducer}