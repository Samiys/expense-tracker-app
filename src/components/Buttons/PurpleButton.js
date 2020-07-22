import React from "react";
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: '35ch',
        },
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: purple,
    },
});


const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
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
            <ColorButton className={classes.submit + ' ' + classes.root} type="submit" fullWidth variant="contained" color="primary" >
                Add Transaction
            </ColorButton>
        </div>
    );
}

export default PurpleButton;
