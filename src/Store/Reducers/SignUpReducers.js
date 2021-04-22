const initialState = {
    status : undefined,
    isSignedUp : undefined,
    signUp : undefined,
    isSignUpFinished : undefined,
}

export default function SignUpReducers(state = initialState, action) {

    switch (action.type) {
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                status : action.payload,
                isSignedUp : true
            };
        case 'SIGN_UP_FAIL':
            return {
                ...state,
                status : action.payload,
                isSignedUp : false
            };
        case 'FINISH_SIGN_UP_SUCCESS':
            return {
                ...state,
                signUp : action.payload,
                isSignUpFinished : true
            };
        case 'FINISH_SIGN_UP_FAIL':
            return {
                ...state,
                signUp : action.payload,
                isSignUpFinished : false
            };
        default:
            return state;
    }
}