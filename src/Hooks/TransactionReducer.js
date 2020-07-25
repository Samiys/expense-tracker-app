import React from "react";

const TransactionReducer = ((state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TRANSACTION":
            return [action.payload, ...state];

        // case "EDIT_TRANSACTION":
        //     (state || []).splice(action.payload.index, 1);
        //     return [...state];

        case "DELETE_TRANSACTION":
            (state || []).splice(action.payload.index, 1);
            return [...state];
        default:
            return state;
    }
});

export default TransactionReducer;
