const initialState = {
    loginDetails: {
        email: "Admin",
        password: 12345
    },
    alertMessage: false,
    isUserAuth: false
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_DETAILS":
            return {
                ...state
            }
        case "WRONG_DETAILS":
            return {
                ...state,
                alertMessage: action?.payload
            }
        case "USER_AUTH":
            return {
                ...state,
                isUserAuth: action?.payload
            }
        default:
            return state;
    }
};

export default loginReducer