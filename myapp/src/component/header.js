import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import DraftsIcon from '@material-ui/icons/Drafts';
import { grey } from "@material-ui/core/colors";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';





const useStyles = makeStyles(theme => ({
    icon:{


        '&:hover':{
            color: grey[900],
        },
    },

    avatar: {
        marginLeft:800,
        width: 30,
        height: 30,
        background:grey[900],
    },

    root: {

        flexGrow: 1,

    },

    iconButton:{
      marginRight:-500,

    },

    input:{
        width: 500,

        color:grey[900],
    },

    grid:{
        weight: 200,
        height: 30,
        direction:'row',
        marginBottom:20,

        color: grey[900],
        '&:hover':{
            color: grey[900],
        },

    },
    menuButton: {
        color: grey[900],
        marginLeft:100,
        '&:hover':{
      color: grey[900],
},
    },

    title: {
        flexGrow: 1,
    },
}));





export const AppHeader = () =>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{background:'white'}}>

                <Toolbar>
                    <Grid  className={classes.grid} container justify="center" alignItems="center" >
                        <IconButton className={classes.icon}> <DraftsIcon /></IconButton>
                          <IconButton className={classes.icon}><NotificationsNoneIcon/></IconButton>
                          <IconButton className={classes.icon}><PersonOutlineIcon/></IconButton>
                    </Grid>

                    <InputBase

                        className={classes.input}
                        placeholder="Search Dashboard"
                        inputProps={{ 'aria-label': 'search ' }}
                    />
                    <IconButton className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>


                    <Avatar  src="vinni.jpg"  className={classes.avatar}  />

                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <ListIcon />
                    </IconButton>

                    </Toolbar>
            </AppBar>
        </div>
    );
}

