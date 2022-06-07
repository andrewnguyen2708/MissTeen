import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary,
        color: '#fff',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    media: {
        width: '12rem',
        padding: '1rem'
    }
}));


export default function Header({ children }) {

    const classes = useStyles();

    return (
        <AppBar position='fixed' className={classes.root}>
            <Container width='100%' className={classes.container}>
                <Box className={classes.navigation}>
                    <CardMedia
                        component="img"
                        alt="logo"
                        image="https://o.remove.bg/downloads/8c9810e7-6e30-4900-bff8-eca527877098/logo-removebg-preview.png"
                        className={classes.media}
                    />
                </Box>
                {children}
            </Container>
        </AppBar>
    )
}
