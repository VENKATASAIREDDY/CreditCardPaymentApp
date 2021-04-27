import Axios from 'axios';

const apiUrl = 'http://localhost:8099';

export const loginSuccess = (login) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload : login
    }
};
 
export const loginFailure = (message) => {
    return {
        type: 'LOGIN_FAILURE',
        payload:message
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
                Axios.get(apiUrl+"/home/customers/"+response.data.userId).then(resp=>{
                    dispatch(loginSuccess(response.data));
                }).catch(error =>{
                    dispatch(loginFailure(error.response.data));
                })
            })
            .catch(error => {
                if(error.response.status===401){
                    dispatch(loginFailure("UserId Password Didnt Match"));
                }else if(error.response.status===404){
                    dispatch(loginFailure("User Does not exists please SignUp"));
                }else {
                    dispatch(loginFailure(error.response.data));
                }
            });
    };

};

export const logout = () => {
	return {
		type: 'LOGOUT'
	}
};
