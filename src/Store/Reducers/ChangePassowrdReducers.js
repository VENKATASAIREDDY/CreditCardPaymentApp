const initialState = {
    status : undefined,
    isChanged : undefined
}

export default function ChangePasswordReducers(state = initialState, action) {

    switch (action.type) {
        case 'CHANGE_PASSWORD_SUCCESS':
            return {
                ...state,
                status : action.payload,
                isChanged : true
            };
        case 'CHANGE_PASSWORD_FAIL':
            return {
                ...state,
                status : action.payload,
                isChanged : false
            };
        default:
            return state;
    }
}