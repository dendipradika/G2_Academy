const initialState = {
  users: []
}

const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        users: action.payload
      }

    default:
      return state
  }
}

export default reducerData