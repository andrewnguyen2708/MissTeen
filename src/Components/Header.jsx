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
        width: '3rem',
        padding: '0.5rem'
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
                        image="https://upload.wikimedia.org/wikipedia/vi/9/97/Missearth-logo.png"
                        className={classes.media}
                    />
                </Box>
                {children}
            </Container>
        </AppBar>
    )
}
