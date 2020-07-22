import React, {useState} from "react";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PurpleButton from "../Buttons/PurpleButton";

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
    const [GlobalText, setGlobalText] = useState('');
    console.log(GlobalText)

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={8}>
                    <br/>
                    <h3>Add Transaction</h3>
                    <Divider />
                    <br/>
                    <form >
                        <div className={classes.root}>
                        <p>Text:</p>
                        <br/>
                        <TextField id="outlined-basic" type="text" label="Text" variant="outlined" />
                        <br/>
                        <br/>
                        <p>Amount:</p>
                        <span>(use +/- with value for Income/Expense)</span>
                        <br/>
                        <br/>
                        <TextField
                             value={GlobalText} onChange={(e)=> {setGlobalText(e.target.value)}
                             } id="outlined-basic" type="number" label="Amount" variant="outlined" />
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
