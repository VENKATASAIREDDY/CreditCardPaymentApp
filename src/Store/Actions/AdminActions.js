import Axios from 'axios';

const apiUrl = 'http://localhost:8099';

export const fetchAllUsersSuccess = (users) => {
    return {
        type: 'FETCH_ALL_USERS_SUCCESS',
        payload : users
    }
};
 
export const fetchAllUsers = () => { 
    return (dispatch) => {
        return Axios.get(apiUrl + "/login/allUsers")
            .then(response => {
                dispatch(fetchAllUsersSuccess(response.data))
            })
            .catch(error => {
                console.log(error);
            });
    };

};
export const addUserSuccess = (user) => {
    return {
        type : 'ADD_USER_SUCCESS',
        payload : user
    }
};

export const addUserFail = (user) => {
    return {
        type : 'ADD_USER_FAIL',
        payload : user
    }
};

export const addUser = (user) => {
    return (dispatch) => {
        return Axios.post(apiUrl + '/login/user',user)
            .then(resp => {
                dispatch(addUserSuccess(resp.data))
            })
            .catch(error => {
                dispatch(addUserFail(error.response.data))
            });
    };
};

export const fetchAllCustomersSuccess = (customers) => {
    return {
        type: 'FETCH_ALL_CUSTOMERS_SUCCESS',
        payload : customers
    }
};
 
export const fetchAllCustomers = () => { 
    return (dispatch) => {
        return Axios.get(apiUrl + "/home/customers")
            .then(response => {
                dispatch(fetchAllCustomersSuccess(response.data))
            })
            .catch(error => {
                alert(error)
                console.log(error);
            });
    };

};

export const fetchAllCreditCardsSuccess = (customers) => {
    return {
        type: 'FETCH_ALL_CREDIT_CARDS_SUCCESS',
        payload : customers
    }
};
 
export const fetchAllCreditCards = () => { 
    return (dispatch) => {
        return Axios.get(apiUrl + "/home/customers/creditcards")
            .then(response => {
                dispatch(fetchAllCreditCardsSuccess(response.data))
            })
            .catch(error => {
                alert(error)
                console.log(error);
            });
    };

};