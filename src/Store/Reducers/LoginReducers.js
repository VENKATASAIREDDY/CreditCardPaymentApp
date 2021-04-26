const initialState = {
    currentUser: undefined,
    login: {
        role:undefined,
        userId:undefined
    },
    failMessage:undefined,
    isAuthUser: undefined
}

export default function LoginReducer(state = initialState, action) {

    switch (action.type) {
        case 'LOGIN_SUCCESS':
            let loggedInUser = { userId: action.payload.userId, role: action.payload.role };
            localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
            return {
                ...state,
                login: action.payload,
                isAuthUser:true
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isAuthUser:false,
                failMessage:action.payload
            };
        case 'LOGOUT':
            localStorage.removeItem("currentUser");
            return {
                ...state,
                isLoggedOut: true,
                currentUser: undefined,
                isAuthUser: undefined
            };
        default:
            return state;
    }
}