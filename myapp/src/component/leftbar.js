import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SendIcon from '@material-ui/icons/Send';
import ListIcon from '@material-ui/icons/List';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MapIcon from '@material-ui/icons/Map';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import image from './dash.jpg';



const useStyles = makeStyles({
    root: {
        width: 120,

    },

    typography: {
        fontSize: 10,
        marginTop:40,
        marginLeft: -120,



    },
    item:{
        height: 65,
        width: 120,
    },
    menu:{
        height: 80,
        width: 120,
    },

    icon:{
     marginLeft: 25,
        marginTop: 7,
        fontSize: 30,

    },
    image:{
        marginTop:-8,
    },
});

export const TypographyMenu = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <MenuList className={classes.item}>
             <img className={classes.image} src={image}/>
            </MenuList>
            <MenuList className={classes.item}>
                <MenuItem className={classes.menu}>
                    <ListItemIcon className={classes.item}>
                        <ListIcon className={classes.icon} />
                    </ListItemIcon>
                    <Typography className={classes.typography}  variant="inherit">COMPONENTS</Typography>
                </MenuItem>
            </MenuList >
            <MenuList className={classes.item}>
                <MenuItem className={classes.menu}>
                    <ListItemIcon className={classes.item}>
                        <CalendarTodayIcon className={classes.icon} />
                    </ListItemIcon>
                    <Typography className={classes.typography} variant="inherit">CALANDER</Typography>
                </MenuItem>
            </MenuList>
            <MenuList className={classes.item}>
                <MenuItem className={classes.menu}>
                    <ListItemIcon className={classes.item}>
                        <MailOutlineIcon className={classes.icon} />
                    </ListItemIcon>
                    <Typography className={classes.typography} variant="inherit">EMAILS</Typography>
                </MenuItem>
            </MenuList>
            <MenuList className={classes.item}>
                <MenuItem className={classes.menu}>
                    <ListItemIcon className={classes.item}>
                        <InsertDriveFileIcon className={classes.icon} />
                    </ListItemIcon>
                    <Typography className={classes.typography} variant="inherit">FORMS</Typography>
                </MenuItem>
            </MenuList>
            <MenuList className={classes.item}>
                <MenuItem className={classes.menu}>
                    <ListItemIcon className={classes.item}>
                        <CreditCardIcon className={classes.icon} />
                    </ListItemIcon>
                    <Typography className={classes.typography} variant="inherit">TABLES</Typography>
                </MenuItem>
            </MenuList>
            <MenuList className={classes.item}>
                <MenuItem className={classes.menu}>
                    <ListItemIcon className={classes.item}>
                        <EqualizerIcon className={classes.icon} />
                    </ListItemIcon>
                    <Typography className={classes.typography} variant="inherit">CHARTS</Typography>
                </MenuItem>
            </MenuList >
            <MenuList className={classes.item}>
                <MenuItem className={classes.menu}>
                    <ListItemIcon className={classes.item}>
                        <MapIcon className={classes.icon} />
                    </ListItemIcon>
                    <Typography className={classes.typography} variant="inherit">MAPS</Typography>
                </MenuItem>
            </MenuList>
            <MenuList className={classes.item}>
                <MenuItem className={classes.menu}>
                    <ListItemIcon className={classes.item}>
                        <PersonOutlineIcon className={classes.icon} />
                    </ListItemIcon>
                    <Typography className={classes.typography} variant="inherit">MY PROFILE</Typography>
                </MenuItem>
            </MenuList>
            <MenuList className={classes.item}>
                <MenuItem className={classes.menu}>
                    <ListItemIcon className={classes.item}>
                        <FileCopyIcon className={classes.icon} />
                    </ListItemIcon>
                    <Typography className={classes.typography} variant="inherit">PAGES</Typography>
                </MenuItem>
            </MenuList>
            <MenuList className={classes.item}>
                <MenuItem className={classes.menu}>
                    <ListItemIcon className={classes.item}>
                        <PowerSettingsNewIcon className={classes.icon} />
                    </ListItemIcon>
                    <Typography className={classes.typography} variant="inherit">LOGOUT</Typography>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}