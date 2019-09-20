import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {deepPurple} from "@material-ui/core/colors";
import Paper from '@material-ui/core/Paper';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop:-5,
        marginLeft:19,
    },
    paper: {
        height: 750,
        width: 420,
    },
    control: {
        padding: theme.spacing(9),
    },
    ingrid:{
        height: 350,
        width: 420,
    },

}));





export default function SixthBlock() {
    const [spacing, setSpacing] = React.useState(4);
    const classes = useStyles();
    const [completed, setCompleted] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
    const gridMassive=[0,1,2];


    function handleChange(event) {
        setSpacing(Number(event.target.value));
    }

    const progress = React.useRef(() => {});
    React.useEffect(() => {
        progress.current = () => {
            if (completed > 100) {
                setCompleted(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setCompleted(completed + diff);
                setBuffer(completed + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        function tick() {
            progress.current();
        }
        const timer = setInterval(tick, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);





    return (
        <Grid container className={classes.root} spacing={10}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {gridMassive.map(
                        function (index) {
                            return(
                                index===0 && <Grid item>
                                    <Paper className={classes.paper}>

                                        <div className={classes.root}>

                                        </div>
                                    </Paper>
                                </Grid>);

                        })}

                    {gridMassive.map(
                        function (index) {
                            return(
                                index===1 && <Grid item>
                                    <Paper className={classes.paper}>
                                        <div className={classes.root}>


                                        </div>
                                    </Paper>
                                </Grid>);

                        })}

                    {gridMassive.map(
                        function (index) {
                            return(
                                index===2 && <Grid item>
                                    <Paper className={classes.paper}>
                                        <div className={classes.root}>


                                        </div>
                                    </Paper>
                                </Grid>);

                        })}


                </Grid>
            </Grid>

        </Grid>

    );
}

