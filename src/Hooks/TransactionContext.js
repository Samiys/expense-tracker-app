import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";

let initialTransactions = [
    // {amount: 500,  desc: "Cash"},
    // {amount: -40,  desc: "Book"},
    // {amount: -200,  desc: "Camera"},

];

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }

    // function testsID(transObj) {
    //     dispatch({
    //         type: "EDIT_TRANSACTION",
    //         payload: {
    //             index: transObj.index
    //         }
    //     })
    // }

    // function editTransaction(testsID) {
    //     dispatch({
    //         type: "EDIT_TRANSACTION",
    //         payload: {
    //             index: testsID.index
    //         }
    //     })
    // }

    function deleteTransaction(transObj) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: {
                index: transObj.index
            }
        })
    }

    return (
            <TransactionContext.Provider value={{
                transactions: state,
                addTransaction, //addTransaction: addTransaction
                deleteTransaction,
                // testsID,
                // editTransaction
            }}>
                { children }
            </TransactionContext.Provider>
    );
};
