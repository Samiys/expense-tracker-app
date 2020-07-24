import React, { useContext, Component } from "react";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import "../app/App.css"
import {TransactionContext} from "../../Hooks/TransactionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TransactionHistory = () => {

    let {transactions} = useContext(TransactionContext);
    let {deleteTransaction} = useContext(TransactionContext);

    const deleteID = (index) => {
        return (
            deleteTransaction({
                index: index
            })
        );
    };

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={8}>
                    <br/>
                    <h3>History</h3>
                    <Divider />

                    <ul className="transaction-list">
                    {transactions.map((transObj, index) => {
                        return (
                            <li key={index}>
                                <span>{transObj.desc}</span>
                                <span>${transObj.amount}</span>
                                <button className="btn btn-primary">
                                    <span>
                                       <FontAwesomeIcon onClick={
                                           () => deleteID(index)
                                       } icon="trash">
                                       </FontAwesomeIcon>
                                    </span>
                                </button>
                                {/*<button className="btn btn-primary">*/}
                                {/*    <span>*/}
                                {/*       <FontAwesomeIcon icon="edit"></FontAwesomeIcon>*/}
                                {/*    </span>*/}
                                {/*</button>*/}
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
