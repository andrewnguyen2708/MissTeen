import React from 'react';
import Candidate from '../Components/Candidate.jsx'
import { getAllCandidate } from '../services/employeeService.js';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        padding: '2rem 4rem',
        [theme.breakpoints.down('sm')]: {
            padding: "20px 15px",
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
        padding: theme.spacing(3),
        fontWeight: "600",
        [theme.breakpoints.down('sm')]: {
            marginLeft: -theme.spacing(4),
            fontSize: '2rem'
        }
    },
    gridContainer: {
        paddingTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(3)
        }
    },
    card: {
        marginRight: '0.5rem',
        marginBottom: '2rem',
        [theme.breakpoints.down('sm')]: {
            margin: "auto",
            marginBottom: '2rem',
        }
    }
}));


export default function CandidateList() {
    const CandidateList = getAllCandidate();
    console.log(CandidateList);

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
            <Grid container className={classes.gridContainer}>
                {
                    CandidateList.map(item =>
                        <Grid Grid item lg={3} sm={5} xs={12} className={classes.card} key={item.id}>
                            <Candidate
                                item={item}
                                image={item.file}
                                name={item.fullName}
                                age={(2022 - item.dateOfBirth.slice(0, 4)) + " tuổi"}
                                height={item.height}
                                weight={item.weight}
                                national={item.national}
                            />
                        </Grid>
                    )}
            </Grid>
        </Paper >
    )
}
