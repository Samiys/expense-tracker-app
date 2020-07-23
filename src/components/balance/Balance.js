import React, { useContext } from "react";
import { getIncome } from "../IncomeExpense/IncomeExpense";
import { TransactionContext } from "../../Hooks/TransactionContext";
// let { transactions } = useContext(TransactionContext);

const Balance = () => {
    return (
        <div>
            <h2>YOUR BALANCE <br /> { getIncome() } </h2>
        </div>
    );
}

export default Balance;
