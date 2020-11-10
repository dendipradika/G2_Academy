import { combineReducers } from "redux"
import getReducer from "./reducer"

const AllReducers = combineReducers({
    auth: getReducer
    // data: DataReducer
})

export default AllReducers