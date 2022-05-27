import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import SideNavigation from './SideNavigation';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#ca6692',
        color: '#fff',
    },
    navigation: {
        display: 'flex',
        color: 'white'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menu: {
        display: 'flex',
        width: '40%',
        justifyContent: 'space-around',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    media: {
        width: '3rem',
        padding: '0.5rem'
    },
    link: {
        textDecoration: 'none'
    },
    button: {
        color: '#fff',
    }
}));


export default function Header() {

    const classes = useStyles();

    return (
        <Router>
            <AppBar position='fixed' className={classes.root}>
                <Container width='100%' className={classes.container}>
                    <Box className={classes.navigation}>
                        <CardMedia
                            component="img"
                            alt="logo"
                            image="https://upload.wikimedia.org/wikipedia/vi/9/97/Missearth-logo.png"
                            className={classes.media}
                        />
                    </Box>
                    <Box className={classes.menu}>
                        
                        <Link to="/" className={classes.link}>
                            <Button className={classes.button}>
                                Thể lệ cuộc thi
                            </Button>
                        </Link>
                        <Link to="/dang-ky-tham-du" className={classes.link}>
                            <Button className={classes.button}>
                                Đăng ký tham dự
                            </Button>
                        </Link>
                        <Link to="/danh-sach-thi-sinh" className={classes.link}>
                            <Button className={classes.button}>
                                Danh sách thí sinh
                            </Button>
                        </Link>
                    </Box>
                    <SideNavigation className={classes.menuButton} />
                </Container>
            </AppBar>
        </Router>
    )
}
