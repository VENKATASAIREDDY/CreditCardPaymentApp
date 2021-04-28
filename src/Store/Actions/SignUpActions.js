import Axios from 'axios';

const apiUrl = 'http://localhost:8099';

export const signUpSuccess = (signUp) => {
    return {
        type : 'SIGN_UP_SUCCESS',
        payload : signUp
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
        return Axios.get(apiUrl+'/home/customers/'+user.userId).then(
            resp=>{
                if(resp.status===200){
                    dispatch(signUpFail("Already an User"));
                }
            }
        ).catch(error=>{
            dispatch(doSignUpThen(user));
        });
    };
};

export const doSignUpThen = (user) => {
    return (dispatch) => {
        return Axios.put(apiUrl + '/login/signUp',user)
            .then(resp => {            
                dispatch(signUpSuccess(resp.data))
            })
            .catch(error => {
                dispatch(signUpFail(error.response.data));
            });
    };
};


export const finishSignUpSuccess = (signUp) => {
    return {
        type : 'FINISH_SIGN_UP_SUCCESS',
        payload : signUp
    }
};

export const finishSignUpFail = (message) => {
    return {
        type : 'FINISH_SIGN_UP_FAIL',
        payload : message
    }
};

export const finishSignUp = (user,userId) => {
    const userDetails={
        userName:user.userName,
        email:user.email,
        contactNo:user.contactNo,
        dob:user.dob,
        address:{
            doorNo:user.doorNo,
            street:user.street,
            area:user.area,
            city:user.city,
            state:user.state,
            pincode:user.pincode
        }
    };
    return (dispatch) => {
        return Axios.post(apiUrl + '/home/customers/'+userId,userDetails)
            .then(resp => {            
                dispatch(finishSignUpSuccess(resp.data))
            })
            .catch(error => {
                // alert(error.response.data)
                dispatch(finishSignUpFail(error.response.data));
            });
    };
};