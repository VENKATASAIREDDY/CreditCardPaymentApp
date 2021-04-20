import Axios from 'axios';

const apiUrl = 'http://localhost:8099';

export const signUpSuccess = (changePassword) => {
    return {
        type : 'SIGN_UP_SUCCESS',
        payload : changePassword
    }
};

export const signUpFail = (message) => {
    return {
        type : 'SIGN_UP_FAIL',
        payload : message
    }
};

export const doSignUp = (user) => {
    return (dispatch) => {
        return Axios.put(apiUrl + '/login/signUp',user)
            .then(resp => {            
                dispatch(signUpSuccess(resp.data))
            })
            .catch(error => {
                alert(error+" "+error.response.data)
                dispatch(signUpFail(error.response.data));
            });
    };
};