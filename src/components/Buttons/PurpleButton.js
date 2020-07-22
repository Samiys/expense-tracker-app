import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: '35ch',
        },
    },
}));


const ColorButton = withStyles((theme) => ({
    root: {
        backgroundColor: '#847ff9',
        '&:hover': {
            backgroundColor: '#a29bfe',
        },
    },
}))(Button);


const PurpleButton = () => {
    const classes = useStyles();
    return (
        <div>
            <ColorButton className={classes.submit + ' ' + classes.root} type="submit" value="Add Transaction" fullWidth variant="contained" color="primary" >
                Add Transaction
            </ColorButton>
        </div>
    );
}

export default PurpleButton;
