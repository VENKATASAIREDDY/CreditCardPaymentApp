const initialState = {
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
        default:
            return state;
    }
}