import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";




const useStyles = makeStyles({
    root: {
        width: 1300,
        height: 30,
        marginLeft:165,
        marginTop: -844,

    },

    typography: {
        fontSize: 14,
        fontWeight:"bold",
        marginLeft: -1100,



    },
});

export const Dashboard = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>

                    <Typography className={classes.typography} variant="inherit">DASHBOARD</Typography>
        </Paper>
    );
}