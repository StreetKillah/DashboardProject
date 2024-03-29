import React from 'react';
import {lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {deepPurple, purple} from "@material-ui/core/colors";
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop:-5,
        marginLeft:19,
    },
    paper: {
        height: 180,
        width: 310,
        marginTop: -5,

    },
    control: {
        padding: theme.spacing(9),
    },
    progress:{
        backgroundColor:deepPurple[500],
        marginLeft:-15,
    },
    block:{

    },
}));





export default function TopBlock() {
    const [spacing, setSpacing] = React.useState(4);
    const classes = useStyles();
    const [completed, setCompleted] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
    const gridMassive=[0,1,2,3];


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

    const BorderLinearProgress = withStyles({
        root: {
            height: 7,
            backgroundColor: lighten('#e8eaf6', 0.5),
        },
        bar: {
            borderRadius: 20,
            backgroundColor: deepPurple[400],



        },
    })(LinearProgress);




    return (
        <Grid container className={classes.root} spacing={10}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {gridMassive.map(
                        function (index) {
                       return(
                           index===0 && <Grid item>
                                  <Paper className={classes.paper}>
                                      <div className={classes.block}>
                                          <BorderLinearProgress className={classes.progress}  variant="determinate" value={completed} valueBuffer={buffer}/>
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
                                            <BorderLinearProgress className={classes.progress}  variant="determinate" value={completed} valueBuffer={buffer}/>
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
                                            <BorderLinearProgress className={classes.progress}  variant="determinate" value={completed} valueBuffer={buffer}/>

                                        </div>
                                    </Paper>
                                </Grid>);

                        })}

                    {gridMassive.map(
                        function (index) {
                            return(
                                index===3 && <Grid item>
                                    <Paper className={classes.paper}>
                                        <div className={classes.root}>
                                            <BorderLinearProgress className={classes.progress}  variant="determinate" value={completed} valueBuffer={buffer}/>

                                        </div>
                                    </Paper>
                                </Grid>);

                        })}

                </Grid>
            </Grid>

            </Grid>

    );
}

