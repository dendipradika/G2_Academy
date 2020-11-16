import { combineReducers } from "redux"
import getReducer from "./reducer"
import reducerData from "./reducerData"

const AllReducers = combineReducers({
    auth: getReducer,
    data: reducerData
})

export default AllReducers