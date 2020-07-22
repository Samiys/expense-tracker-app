import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {

    },
    weight: {
        fontWeight: 900
    },
    pos: {
        marginBottom: 12
    },
    colorGreen: {
        color: "forestgreen",

        fontSize: 20
    },
    colorRed: {
        color: "indianred",
        fontSize: 20
    },
    alignText: {
        alignContent: "center"
    }
});

function IncomeExpense() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Box boxShadow={3}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.weight} align="center" variant="h5" component="h2">
                                INCOME
                            </Typography>
                            <Typography className={classes.colorGreen + ' ' + classes.weight} align="center" variant="body2" component="p">

                                +$0.00
                            </Typography>
                        </CardContent>
                    </Card>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Box boxShadow={3}>
                <Card className={classes.root} variant="outlined">
                 <CardContent>
                     <Typography className={classes.weight} align="center" variant="h5" component="h2">
                         EXPENSE
                      </Typography>
                     <Typography className={classes.colorRed + ' ' + classes.weight} align="center" variant="body2" component="p">

                         +$0.00
                     </Typography>
                 </CardContent>
                </Card>
                    </Box>
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

export default IncomeExpense;
