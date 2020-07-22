import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from "../header/Header";
import Balance from "../balance/Balance";
import IncomeExpense from "../IncomeExpense/IncomeExpense";
import TransactionHistory from "../Transaction/TransactionHistory";
import AddTransaction from "../Transaction/AddTransaction";
import GlobalContext from "../../Hooks/GlobalContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();
    let GlobalValue = useState(1);

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={5}>
                </Grid>

                <Grid item xs={5}>
                    <GlobalContext.Provider value={GlobalValue}>
                    <Header/>
                    <Balance/>
                    <IncomeExpense/>
                    <TransactionHistory/>
                    <AddTransaction/>
                    </GlobalContext.Provider>
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
