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

export const deleteUserSuccess = (message) => {
    return {
        type : 'DELETE_USER_SUCCESS',
        payload : message
    }
};

export const deleteUserFail = (message) => {
    return {
        type : 'DELETE_USER_FAIL',
        payload : message
    }
};
export const deleteUser = (customerId) => {
    return (dispatch) => {
        return Axios.delete(apiUrl + '/login/user/' +customerId)
            .then(resp => {
                dispatch(deleteUserSuccess(resp.data))
            })
            .catch(error => {
                dispatch(deleteUserFail(error.response.data))
            });
    };
};

export const fetchAllCustomersSuccess = (customers) => {
    return {
        type: 'FETCH_ALL_CUSTOMERS_SUCCESS',
        payload : customers
    }
};

export const fetchAllCustomersFail = () => {
    return {
        type: 'FETCH_ALL_CUSTOMERS_FAIL',
        payload : "Failed to Fetch Customers"
    }
};
 
export const fetchAllCustomers = () => { 
    return (dispatch) => {
        return Axios.get(apiUrl + "/home/customers")
            .then(response => {
                dispatch(fetchAllCustomersSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchAllCustomersFail())
            });
    };

};

export const fetchAllCreditCardsSuccess = (cards) => {
    return {
        type: 'FETCH_ALL_CREDIT_CARDS_SUCCESS',
        payload : cards
    }
};
export const fetchAllCreditCardsFail = () => {
    return {
        type: 'FETCH_ALL_CREDIT_CARDS_FAIL',
        payload:'Failed to Fetch'
    }
};
 
export const fetchAllCreditCards = () => { 
    return (dispatch) => {
        return Axios.get(apiUrl + "/home/customers/creditcards")
            .then(response => {
                dispatch(fetchAllCreditCardsSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchAllCreditCardsFail())
            });
    };
};

export const fetchPersonalDetailsFail = (message) => {
    return {
        type : 'FETCH_PERSONAL_DETAILS_FAIL',
        payload : message
    }
};

export const fetchPersonalDetailsSuccess = (details) => {
    return {
        type : 'FETCH_PERSONAL_DETAILS_SUCCESS',
        payload : details
    }
};

export const fetchPersonalDetails = (userId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/home/customers/' + userId)
            .then(resp => {
                dispatch(fetchPersonalDetailsSuccess(resp.data))
            })
            .catch(error => {
                dispatch(fetchPersonalDetailsFail(error.response.data))
            });
    };
};

export const updatePersonalDetailsSuccess = (details) => {
    return {
        type : 'UPDATE_PERSONAL_DETAILS_SUCCESS',
        payload : details
    }
};

export const updatePersonalDetailsFail = (message) => {
    return {
        type : 'UPDATE_PERSONAL_DETAILS_FAIL',
        payload : message
    }
};
export const updatePersonalDetails = (userId,details) => {
    return (dispatch) => {
        return Axios.put(apiUrl + '/home/customers/' + userId,details)
            .then(resp => {
                dispatch(updatePersonalDetailsSuccess(resp.data))
            })
            .catch(error => {
                dispatch(updatePersonalDetailsFail(error.response.data))
            });
    };
};

// ===================================================================================================

export const fetchStatementsFail = (message) => {
    return {
        type : 'FETCH_STATEMENTS_FAIL',
        payload : message
    }
};

export const fetchStatementsSuccess = (statements) => {
    return {
        type : 'FETCH_STATEMENTS_SUCCESS',
        payload : statements
    }
};

export const fetchStatements = (cardNumber) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/home/customer/creditcard/statements/history/' + cardNumber)
            .then(resp => {
                dispatch(fetchStatementsSuccess(resp.data))
            })
            .catch(error => {
                dispatch(fetchStatementsFail(error.response.data))
            });
    };
};

export const fetchAllStatementsSuccess = (statements) => {
    return {
        type: 'FETCH_ALL_STATEMENTS_SUCCESS',
        payload : statements
    }
};
export const fetchAllStatementsFail = () => {
    return {
        type: 'FETCH_ALL_STATEMENTS_FAIL',
        payload:'Failed to Fetch'
    }
};
 
export const fetchAllStatements = () => { 
    return (dispatch) => {
        return Axios.get(apiUrl + "/home/customer/creditcard/statements")
            .then(response => {
                dispatch(fetchAllStatementsSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchAllStatementsFail())
            });
    };
};

// =======================================================================================================


export const fetchPaymentsFail = (message) => {
    return {
        type : 'FETCH_PAYMENTS_FAIL',
        payload : message
    }
};

export const fetchPaymentsSuccess = (payments) => {
    return {
        type : 'FETCH_PAYMENTS_SUCCESS',
        payload : payments
    }
};

export const fetchPayments = (cardNumber) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/home/customer/creditcard/payments/paymentHistory/' + cardNumber)
            .then(resp => {
                dispatch(fetchPaymentsSuccess(resp.data))
            })
            .catch(error => {
                dispatch(fetchPaymentsFail(error.response.data))
            });
    };
};

export const fetchAllPaymentsSuccess = (payments) => {
    return {
        type: 'FETCH_ALL_PAYMENTS_SUCCESS',
        payload : payments
    }
};
export const fetchAllPaymentsFail = () => {
    return {
        type: 'FETCH_ALL_PAYMENTS_FAIL',
        payload:'Failed to Fetch'
    }
};
 
export const fetchAllPayments = () => { 
    return (dispatch) => {
        return Axios.get(apiUrl + "/home/customer/creditcard/payments")
            .then(response => {
                dispatch(fetchAllPaymentsSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchAllPaymentsFail())
            });
    };
};

// =====================================================================================================
export const fetchTransactionsFail = (message) => {
    return {
        type : 'FETCH_TRANSACTIONS_FAIL',
        payload : message
    }
};

export const fetchTransactionsSuccess = (transactions) => {
    return {
        type : 'FETCH_TRANSACTIONS_SUCCESS',
        payload : transactions
    }
};

export const fetchTransactions = (cardNumber) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/home/customer/creditcard/transactions/history/' + cardNumber)
            .then(resp => {
                dispatch(fetchTransactionsSuccess(resp.data))
            })
            .catch(error => {
                dispatch(fetchTransactionsFail(error.response.data))
            });
    };
};

export const fetchAllTransactionsSuccess = (transactions) => {
    return {
        type: 'FETCH_ALL_TRANSACTIONS_SUCCESS',
        payload : transactions
    }
};
export const fetchAllTransactionsFail = () => {
    return {
        type: 'FETCH_ALL_TRANSACTIONS_FAIL',
        payload:'Failed to Fetch'
    }
};
 
export const fetchAllTransactions = () => { 
    return (dispatch) => {
        return Axios.get(apiUrl + "/home/customer/creditcard/transactions")
            .then(response => {
                dispatch(fetchAllTransactionsSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchAllTransactionsFail())
            });
    };
};