const initialState = {
  isLogin: false,
  isLoading: false,
  user: "",
  userId: "",
  levelUser: ""
}

const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        userId: action.loadId,
        levelUser: action.userLevel
      }

    case "LOGOUT":
      return {
        isLogin: false,
        user: "",
        userId: "",
        levelUser: ""
      }

    case "CHANGE_LOADING":
      return {
        ...state,
        isLoading: action.value
      }

    case "CHANGE_USER":
      return {
        ...state,
        user: action.value
      }

    case "REGISTER":
      return {
        ...state,
        user: action.value
      }

    default:
      return state
  }
}

export default getReducer