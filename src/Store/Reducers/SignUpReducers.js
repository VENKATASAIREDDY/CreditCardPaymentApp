const initialState = {
    status : undefined,
    isSignedUp : undefined
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
        default:
            return state;
    }
}