import React, {useContext} from "react";
import {getExpense, getIncome} from "../../Hooks/actions";
import {TransactionContext} from "../../Hooks/TransactionContext";

const Balance = () => {
    let {transactions} = useContext(TransactionContext);
    return (
        <div>
            <h2>YOUR BALANCE <br/> ${ getIncome(transactions) - getExpense(transactions) } </h2>
        </div>
    );
}

export default Balance;
