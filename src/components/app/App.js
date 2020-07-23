import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from "../header/Header";
import Balance from "../balance/Balance";
import IncomeExpense from "../IncomeExpense/IncomeExpense";
import TransactionHistory from "../Transaction/TransactionHistory";
import AddTransaction from "../Transaction/AddTransaction";
import {TransactionProvider} from "../../Hooks/TransactionContext";
import {lightBlue} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    lightBlue: {
        background: "lightBlue",
    }
}));

function App() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={5}>
                </Grid>

                <Grid item xs={5}>
                    <TransactionProvider>
                        <Header/>
                        <Balance/>
                        <IncomeExpense/>
                        <TransactionHistory/>
                        <AddTransaction/>
                    </TransactionProvider>
                </Grid>

            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={11} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
