import Axios from 'axios';

const apiUrl = 'http://localhost:8099';

export const loginSuccess = (login) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload : login
    }
};
 
export const loginFailure = () => {
    return {
        type: 'LOGIN_FAILURE'
    }
};
 
export const doLogin = (payload) => {
    let data = {
        userId: payload.userId,
        password: payload.password
    }   
    return (dispatch) => {
        return Axios.post(apiUrl + "/login/signIn", data)
            .then(response => {
                dispatch(loginSuccess(response.data))
            })
            .catch(error => {
                dispatch(loginFailure());
            });
    };

};