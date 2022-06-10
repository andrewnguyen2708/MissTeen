import React, { useState } from 'react';
import Candidate from '../Components/Candidate.jsx'
import { getAllCandidate } from '../services/employeeService.js';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Box, Typography, Button, Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        padding: '3rem',
        [theme.breakpoints.down('sm')]: {
            padding: "1.5rem",
            paddingTop: "3rem",
        }
    },
    head: {
        width: "100%",
        backgroundColor: theme.palette.primary.light,
        marginBottom: theme.spacing(5)
    },
    headTitle: {
        textAlign: "center",
        color: theme.palette.primary.main,
        padding: theme.spacing(1),
        fontWeight: "600",
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.4rem'
        }
    },
    card: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2rem',
            marginLeft: theme.spacing(3)
        }
    },
    container: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    },
    mobileList: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
        }
    },
    collapse: {
        marginLeft: "10px"
    }
}));


export default function CandidateList() {
    const CandidateList = getAllCandidate();
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const classes = useStyles();

    return (
        <Paper elevation={5} className={classes.root}>
            <Box className={classes.head}>
                <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                    className={classes.headTitle}
                >
                    Danh sách thí sinh tham dự
                </Typography>
            </Box>
            <Grid container spacing={3} className={classes.container}>
                {
                    CandidateList.map(item =>
                        <Grid item lg={3} sm={6} xs={12} className={classes.card} key={item.id}>
                            <Candidate
                                item={item}
                                image={item.file}
                                name={item.fullName}
                                dateOfBirth={(item.dateOfBirth.slice(0, 4))}
                                height={item.height}
                                weight={item.weight}
                                national={item.national}
                            />
                        </Grid>
                    )}
            </Grid>
            <Grid container spacing={3} className={classes.mobileList}>
                {
                    CandidateList.map((item, index) => {
                        if (index < 2) {
                            return (
                                <Grid item lg={3} sm={6} xs={12} className={classes.card} key={item.id}>
                                    <Candidate
                                        item={item}
                                        image={item.file}
                                        name={item.fullName}
                                        dateOfBirth={(item.dateOfBirth.slice(0, 4))}
                                        height={item.height}
                                        weight={item.weight}
                                        national={item.national}
                                    />
                                </Grid>
                            )
                        }
                        return (
                            <Collapse in={toggle} timeout="auto" unmountOnExit className={classes.collapse}>
                                <Grid item lg={3} sm={6} xs={12} className={classes.card} key={item.id}>
                                    <Candidate
                                        item={item}
                                        image={item.file}
                                        name={item.fullName}
                                        dateOfBirth={(item.dateOfBirth.slice(0, 4))}
                                        height={item.height}
                                        weight={item.weight}
                                        national={item.national}
                                    />
                                </Grid>
                            </Collapse>
                        )
                    })
                }
                    <Button onClick={handleToggle} style={{ marginTop: "-50px", marginLeft: "10rem", padding: "0px" }}>{!toggle ? "Xem thêm" : "ẩn bớt"}</Button>
            </Grid>
        </Paper >
    )
}
