const initialState = {
    accounts:undefined,
    paymentHistory : [],
    paymentHistoryById: undefined,
    statementHistory : undefined,
    statementHistoryById : undefined,
    transactionHistory : [],

    creditCardDetails :undefined,
    creditCards:undefined,
    personalDetails:undefined,
    creditCard : undefined,
    creditCardDelete : undefined,
    account : undefined,
    accountDelete : undefined,
    personalDetailsUpdate : undefined,
    pendingBills : undefined,
    paymentUPI : undefined,
    isPayedAccount : undefined,
    transaction : undefined,
    transactionHistoryById :undefined,
    billedStatements :undefined,
    unBilledStatements :undefined,
    billedStatementsById:undefined,
    unBilledStatementsById:undefined,
    statement:undefined,
    paymentBillUPI : undefined,
    paymentCardAccount : undefined,
    isPayedCardAccount :undefined,
    isPayedBillUPI :undefined,
    isAddedCreditCard :undefined,
    isAddedAccount : undefined,

    isDeletedAccount :undefined,
    isDeletedCreditCard :undefined,

    isUpdatedPersonalDetails :undefined,

    isFetchedAccounts : undefined,
    isFetchedBilledStatement : undefined,
    isFetchedCreditCards : undefined,
    isFetchedCreditCardDetails : undefined,
    isFetchedPersonalDetails : undefined,
    isFetchedStatement:undefined,
    isFetchedStatements :undefined,
    isFetchedStatementsById : undefined,
    isFetchedUnBilledStatements :undefined,
    isFetchedBilledStatementById :undefined,
    isFetchedUnBilledStatementsById:undefined,
    isFetchedPayments :undefined,
    isFetchedPaymentsById:undefined,
    isFetchedPendingBills :undefined,
    isFetchedTransaction :undefined,
    isFetchedTransactionsById : undefined
}

export default function AdminReducers(state = initialState, action) {

    switch (action.type) {
        case 'ADD_CREDIT_CARD_SUCCESS':
            return {
                ...state,
                creditCard: action.payload,
                isAddedCreditCard :true
            };
        case 'ADD_CREDIT_CARD_FAIL':
            return {
                ...state,
                creditCard: action.payload,
                isAddedCreditCard :false
            };
        case 'FETCH_CREDIT_CARD_SUCCESS' :
            return {
                ...state,
                creditCards: action.creditCards,
                isFetchedCreditCards : true
            };
        case 'FETCH_CREDIT_CARD_FAIL':
            return {
                ...state,
                creditCards: action.payload,
                isFetchedCreditCards : false
            };
        case 'FETCH_CREDIT_CARD_ID_SUCCESS' :
            return {
                ...state,
                creditCardDetails: action.payload,
                isFetchedCreditCardDetails : true
            };
        case 'FETCH_CREDIT_CARD_ID_FAIL':
            return {
                ...state,
                creditCardDetails: action.payload,
                isFetchedCreditCardDetails : false
            };
            
        case 'DELETE_CREDIT_CARD_SUCCESS' :
            return {
                ...state,
                creditCardDelete : action.payload,
                isDeletedCreditCard : true
            };
        case 'DELETE_CREDIT_CARD_FAIL':
            return {
                ...state,
                creditCardDelete : action.payload,
                isDeletedCreditCard : false
            };
        case 'ADD_ACCOUNT_SUCCESS':
            return {
                ...state,
                account : action.payload,
                isAddedAccount :true
            };
        case 'ADD_ACCOUNT_FAIL':
            return {
                ...state,
                account : action.payload,
                isAddedAccount :false
            };
        case 'FETCH_ACCOUNT_SUCCESS' :
            return {
                ...state,
                accounts: action.payload,
                isFetchedAccounts : true
            };
        case 'FETCH_ACCOUNT_FAIL':
            return {
                ...state,
                accounts: action.payload,
                isFetchedAccounts : false
            };
        case 'DELETE_ACCOUNT_SUCCESS' :
            return {
                ...state,
                accountDelete : action.payload,
                isDeletedAccount : true
            };
        case 'DELETE_ACCOUNT_FAIL':
            return {
                ...state,
                accountDelete : action.payload,
                isDeletedAccount : false
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
        case 'FETCH_BILLED_STATEMENTS_SUCCESS' :
            return {
                ...state,
                billedStatements: action.payload,
                isFetchedBilledStatement : true
            };
        case 'FETCH_BILLED_STATEMENTS_FAIL':
            return {
                ...state,
                billedStatements: action.payload,
                isFetchedBilledStatement : false
            };
        case 'FETCH_BILLED_STATEMENTS_BY_ID_SUCCESS' :
            return {
                ...state,
                billedStatementsById: action.payload,
                isFetchedBilledStatementById : true
            };
        case 'FETCH_BILLED_STATEMENTS_BY_ID_FAIL':
            return {
                ...state,
                billedStatementsById: action.payload,
                isFetchedBilledStatementById : false
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
            case 'FETCH_STATEMENT_SUCCESS' :
            return {
                ...state,
                statement: action.payload,
                isFetchedStatement : true
            };
        case 'FETCH_STATEMENT_FAIL':
            return {
                ...state,
                statement : action.payload,
                isFetchedStatement : false
            };
            case 'FETCH_STATEMENTS_BY_ID_SUCCESS' :
            return {
                ...state,
                statementHistoryById : action.payload,
                isFetchedStatementsById : true
            };
        case 'FETCH_STATEMENTS_BY_ID_FAIL':
            return {
                ...state,
                statementHistoryById : action.payload,
                isFetchedStatementsById : false
            }; 
        case 'FETCH_UN_BILLED_STATEMENT_SUCCESS' :
            return {
                ...state,
                unBilledStatements : action.payload,
                isFetchedUnBilledStatements : true
            };
        case 'FETCH_UN_BILLED_STATEMENT_FAIL':
            return {
                ...state,
                unBilledStatements : action.payload,
                isFetchedUnBilledStatements : false
            };
        case 'FETCH_UN_BILLED_STATEMENT_BY_ID_SUCCESS' :
            return {
                ...state,
                unBilledStatementsById : action.payload,
                isFetchedUnBilledStatementsById : true
            };
        case 'FETCH_UN_BILLED_STATEMENT_BY_ID_FAIL':
            return {
                ...state,
                unBilledStatementsById : action.payload,
                isFetchedUnBilledStatementsById : false
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
        case 'FETCH_PAYMENTS_BY_ID_SUCCESS' :
            return {
                ...state,
                paymentHistoryById : action.payload,
                isFetchedPaymentsById : true
            };
        case 'FETCH_PAYMENTS_BY_ID_FAIL':
            return {
                ...state,
                paymentHistoryById : action.payload,
                isFetchedPaymentsById : false
            };
        case 'FETCH_PENDING_BILLS_SUCCESS' :
            return {
                ...state,
                pendingBills : action.payload,
                isFetchedPendingBills : true
            };
        case 'FETCH_PENDING_BILLS_FAIL':
            return {
                ...state,
                pendingBills : action.payload,
                isFetchedPendingBills : false
            };
        case 'DO_PAYMENT_UPI_SUCCESS' :
            return {
                ...state,
                paymentUPI : action.payload,
                isPayedUPI : true
            };
        case 'DO_PAYMENT_UPI_FAIL':
            return {
                ...state,
                paymentUPI : action.payload,
                isPayedUPI : false
            };
        case 'DO_PAYMENT_CARD_ACCOUNT_SUCCESS' :
            return {
                ...state,
                paymentCardAccount : action.payload,
                isPayedCardAccount : true
            };
        case 'DO_PAYMENT_CARD_ACCOUNT_FAIL':
            return {
                ...state,
                paymentCardAccount : action.payload,
                isPayedCardAccount : false
            };
            
        case 'DO_PAYMENT_OF_BILL_UPI_SUCCESS' :
            return {
                ...state,
                paymentBillUPI : action.payload,
                isPayedBillUPI : true
            };
        case 'DO_PAYMENT_OF_BILL_UPI_FAIL':
            return {
                ...state,
                paymentBillUPI : action.payload,
                isPayedBillUPI : false
            };
            
        case 'DO_PAYMENT_ACCOUNT_SUCCESS' :
            return {
                ...state,
                paymentAccount : action.payload,
                isPayedAccount : true
            };
        case 'DO_PAYMENT_ACCOUNT_FAIL':
            return {
                ...state,
                paymentAccount : action.payload,
                isPayedAccount : false
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
            case 'FETCH_TRANSACTIONS_BY_ID_SUCCESS' :
                return {
                    ...state,
                    transactionHistoryById : action.payload,
                    isFetchedTransactionsById : true
                };
            case 'FETCH_TRANSACTIONS_BY_ID_FAIL':
                return {
                    ...state,
                    transactionHistoryById : action.payload,
                    isFetchedTransactionsById : false
                };
        case 'DO_TRANSACTION_SUCCESS':
            return {
                ...state,
                transaction : action.payload,
                isTransaction : true
            };
        case 'DO_TRANSACTION_FAIL' :
            return {
                ...state,
                transaction : action.payload,
                isTransaction : false
            };
        default:
            return state;
    }
}