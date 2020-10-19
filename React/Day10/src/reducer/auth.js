const initialState = {
    isLogin: false,
    user: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                isLogin: true,
                user: action.payload,
                userId: action.loadId
            }
        case "LOGOUT":
            return { initialState }
        default:
            return state
    }
}

export default authReducer