import React, {useContext, useState} from "react";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PurpleButton from "../Buttons/PurpleButton";
import {TransactionContext} from "../../Hooks/TransactionContext";

const useStyles = makeStyles((theme) =>({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: '35ch',
        },
    },
}));

const AddTransaction = () => {
    const classes = useStyles();
    let { addTransaction, editTransaction } = useContext(TransactionContext);


    function FormRow() {

        let [newDesc, setDesc] = useState("");
        let [newAmount, setAmount, ] = useState(0);

        const handleAddition = (event) => {
            event.preventDefault();
            if (Number(newAmount) === 0)
            {
                alert("Please enter correct value");
                return false;
            }
            addTransaction({
                amount: Number(newAmount),
            desc: newDesc
            });
        };

        return (
            <React.Fragment>
                <Grid item xs={8}>
                    <br/>
                    <h3>Add Transaction</h3>
                    <Divider />
                    <br/>
                    <form onSubmit={handleAddition}>
                        <div className={classes.root}>
                        <p>Text:</p>
                        <br/>
                        <TextField
                            onChange={(e)=> {setDesc(e.target.value)}}
                            id="outlined-basic" type="text" label="Text" variant="outlined" required/>
                        <br/>
                        <br/>
                        <p>Amount:</p>
                        <span>(use +/- with value for Income/Expense)</span>
                        <br/>
                        <br/>
                        <TextField
                              onChange={(e)=> {setAmount(e.target.value)}}
                              id="outlined-basic" type="number" label="Amount" variant="outlined" required/>
                        <br/>
                        <br/>
                        </div>
                        <PurpleButton/>
                    </form>
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

export default AddTransaction;
