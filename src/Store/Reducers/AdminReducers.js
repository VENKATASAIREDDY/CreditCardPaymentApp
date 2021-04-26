const initialState = {
    users : [],
    user : undefined,
    isAdded:undefined,

    deleteUser : undefined,
    isDeleted : undefined,
    
    customers : undefined,
    isFetchedCustomers :undefined,

    creditcards : undefined,
    isFetchedCreditCards : undefined,

    personalDetails: undefined,
    isFetchedPersonalDetails : undefined,

    personalDetailsUpdate: undefined,
    isUpdatedPersonalDetails : undefined,

    statementHistory: undefined,
    isFetchedStatements : undefined,

    allStatements : undefined,
    isFetchedAllStatements : undefined,

    paymentHistory : undefined,
    isFetchedPayments : undefined,

    allPayments :undefined,
    isFetchedAllPayments : undefined,

    transactionHistory : undefined,
    isFetchedTransaction : undefined,

    allTransactions : undefined,
    isFetchedAllTransactions : undefined
}

export default function AdminReducers(state = initialState, action) {

    switch (action.type) {
        case 'FETCH_ALL_USERS_SUCCESS':
            return {
                ...state,
                users: action.payload
            };
        case 'ADD_USER_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isAdded:true
            };
        case 'ADD_USER_FAIL':
            return {
                ...state,
                user: action.payload,
                isAdded:false
            };
            case 'DELETE_USER_SUCCESS' :
                return {
                    ...state,
                    deleteUser : action.payload,
                    isDeleted : true
                };
            case 'DELETE_USER_FAIL':
                return {
                    ...state,
                    deleteUser : action.payload,
                    isDeleted : false
                };
        case 'FETCH_ALL_CUSTOMERS_SUCCESS' :
            return {
                ...state,
                customers: action.payload,
                isFetchedCustomers : true
            };
        case 'FETCH_ALL_CUSTOMERS_FAIL' :
            return {
                ...state,
                customers: action.payload,
                isFetchedCustomers:false
            };
        case 'FETCH_ALL_CREDIT_CARDS_SUCCESS' :
            return {
                ...state,
                creditcards: action.payload,
                isFetchedCreditCards :true
            };
        case 'FETCH_ALL_CREDIT_CARDS_FAIL' :
            return {
                ...state,
                creditcards: action.payload,
                isFetchedCreditCards : false
            };
        case 'FETCH_PERSONAL_DETAILS_SUCCESS' :
            return {
                ...state,
                personalDetails: action.payload,
                isFetchedPersonalDetails : true
            };
        case 'FETCH_PERSONAL_DETAILS_FAIL':
            return {
                ...state,
                personalDetails: action.payload,
                isFetchedPersonalDetails : false
            };
        case 'UPDATE_PERSONAL_DETAILS_SUCCESS' :
            return {
                ...state,
                personalDetailsUpdate: action.payload,
                isUpdatedPersonalDetails : true
            };
        case 'UPDATE_PERSONAL_DETAILS_FAIL':
            return {
                ...state,
                personalDetailsUpdate: action.payload,
                isUpdatedPersonalDetails : false
            };
        case 'FETCH_STATEMENTS_SUCCESS' :
            return {
                ...state,
                statementHistory: action.payload,
                isFetchedStatements : true
            };
        case 'FETCH_STATEMENTS_FAIL':
            return {
                ...state,
                statementHistory : action.payload,
                isFetchedStatements : false
            };
        case 'FETCH_ALL_STATEMENTS_SUCCESS' :
            return {
                ...state,
                allStatements: action.payload,
                isFetchedAllStatements : true
            };
        case 'FETCH_ALL_STATEMENTS_FAIL' :
            return {
                ...state,
                allStatements: action.payload,
                isFetchedAllStatements:false
            };
        case 'FETCH_PAYMENTS_SUCCESS' :
            return {
                ...state,
                paymentHistory : action.payload,
                isFetchedPayments : true
            };
        case 'FETCH_PAYMENTS_FAIL':
            return {
                ...state,
                paymentHistory : action.payload,
                isFetchedPayments : false
            };
        case 'FETCH_ALL_PAYMENTS_SUCCESS' :
            return {
                ...state,
                allPayments: action.payload,
                isFetchedAllPayments : true
            };
        case 'FETCH_ALL_PAYMENTS_FAIL' :
            return {
                ...state,
                allPayments: action.payload,
                isFetchedAllPayments:false
            };
        case 'FETCH_TRANSACTIONS_SUCCESS' :
            return {
                ...state,
                transactionHistory : action.payload,
                isFetchedTransaction : true
            };
        case 'FETCH_TRANSACTIONS_FAIL':
            return {
                ...state,
                transactionHistory : action.payload,
                isFetchedTransaction : false
            };
        case 'FETCH_ALL_TRANSACTIONS_SUCCESS' :
            return {
                ...state,
                allTransactions: action.payload,
                isFetchedAllTransactions : true
            };
        case 'FETCH_ALL_TRANSACTIONS_FAIL' :
            return {
                ...state,
                allTransactions: action.payload,
                isFetchedAllTransactions:false
            };
        default:
            return state;
    }
}