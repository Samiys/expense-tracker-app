import React, {useContext} from "react";
import {getIncome} from "../IncomeExpense/IncomeExpense";

const Balance = () => {
    return (
        <div>
            <h2>YOUR BALANCE <br/> ${ getIncome() } </h2>
        </div>
    );
}

export default Balance;
