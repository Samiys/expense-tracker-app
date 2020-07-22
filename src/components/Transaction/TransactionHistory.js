import React from "react";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const TransactionHistory = () => {

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={8}>
                    <br/>
                    <h3>History</h3>
                    <Divider />
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
