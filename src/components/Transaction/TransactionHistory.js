import React, { useContext } from "react";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import "../app/App.css"
import {TransactionContext} from "../../Hooks/TransactionContext";

const TransactionHistory = () => {

    let {transactions} = useContext(TransactionContext);


    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={8}>
                    <br/>
                    <h3>History</h3>
                    <Divider />

                    <ul className="transaction-list">
                    {transactions.map((transObj, ind) => {
                        return (
                            <li key={ind}>
                                <span>{transObj.desc}</span>
                                <span>{transObj.amount}</span>
                            </li>
                        );
                    })}
                    </ul>

                </Grid>

            </React.Fragment>
        );
    }

    return (
        <div>
            <Grid container spacing={1}>
                <Grid container item xs={11} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}

export default TransactionHistory;
