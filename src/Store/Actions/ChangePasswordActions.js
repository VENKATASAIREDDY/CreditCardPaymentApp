import Axios from 'axios';

const apiUrl = 'http://localhost:8099';

export const changePasswordSuccess = (changePassword) => {
    return {
        type : 'CHANGE_PASSWORD_SUCCESS',
        payload : changePassword
    }
};

export const changePasswordFail = (message) => {
    return {
        type : 'CHANGE_PASSWORD_FAIL',
        payload : message
    }
};

export const changePassword = (user) => {
    return (dispatch) => {
        return Axios.put(apiUrl + '/login/changePassword',user)
            .then(resp => {            
                dispatch(changePasswordSuccess(resp.data))
            })
            .catch(error => {
                dispatch(changePasswordFail(error.response.data));
            });
    };
};