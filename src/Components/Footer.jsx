import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#FA8072",
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
        [theme.breakpoints.down("sm")]: {
            justifyContent: "space-between"
        }
    },
    footerLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
    },
    title: {
        fontFamily: 'Oswald',
        fontWeight: 400,
        fontSize: "1.5rem",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    },
    footerRight: {
        padding: '1rem',
    },
    mediaLogo: {
        width: "10rem",
        padding: '0.5rem'
    },
    sponsor: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        }
    },
    mediaSponsor: {
        width: "8rem",
        padding: '0.5rem'
    },
    text: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8rem"
        }
    }

}));


export default function Footer() {

    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Container maxWidth="xl" className={classes.container}>
                <Box className={classes.footerLeft}>
                    <Typography className={classes.title}>HOA HẬU VIỆT NAM</Typography>
                    <Box className={classes.sponsor}>
                        <Typography>Nhà Tài trợ:    </Typography>
                        <CardMedia
                            component="img"
                            alt="logo"
                            image="https://assets.topdev.vn/images/2022/03/08/TopDev-hahalolo-logo-1646710802.png"
                            className={classes.mediaSponsor}
                        />
                    </Box>
                </Box>
                <Box className={classes.footerRight}>
                    <Typography className={classes.text}>Bản quyền thuộc về HOA HẬU VIỆT NAM 2020</Typography>
                    <Typography className={classes.text}>Điện thoại: 028 - 3899 2222 * Fax: 028 - 3899 1111</Typography>
                    <Typography className={classes.text}>Địa chỉ: 6D Trường Sa, P.17, Bình Thạnh, TP.HCM</Typography>
                </Box>
            </Container>
        </footer>
    )
}
