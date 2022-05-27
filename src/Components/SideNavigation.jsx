import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { IconButton } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    link: {
        color: 'Black',
        textDecoration: 'none'
    },
    responsive: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    },
    menuButton: {
        color: 'white'
    },
}));

export default function SideNavigation() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);


    return (

        <React.Fragment >
            <IconButton onClick={() => setOpen(true)} className={classes.responsive}>
                <DehazeIcon className={classes.menuButton} />
            </IconButton>
            <SwipeableDrawer
                anchor="right"
                onClose={() => setOpen(false)}
                open={open}
            >
                <List>
                    <Link to='/' className={classes.link}>
                        <ListItem button>
                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                            <ListItemText primary='Thể lệ cuộc thi' />
                        </ListItem>
                    </Link>
                    <Link to='/dang-ky-tham-du' className={classes.link}>
                        <ListItem button>
                            <ListItemIcon><CreateIcon /></ListItemIcon>
                            <ListItemText primary='Đăng ký tham dự' />
                        </ListItem>
                    </Link>
                    <Link to="/danh-sach-thi-sinh" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon><PeopleAltIcon /></ListItemIcon>
                            <ListItemText primary='Danh sách thí sinh' />
                        </ListItem>
                    </Link>
                </List>
            </SwipeableDrawer>
        </React.Fragment>
    );
}