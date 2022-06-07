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
        padding: '4rem 4rem',
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
            fontSize: '1.4rem'
        }
    },
    gridContainer: {
        display: "flex",
        alignItem: "center"
    },
    card: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2rem',
            alignSelf: "center"
        }
    }
}));


export default function CandidateList() {
    const CandidateList = getAllCandidate();

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
            <Grid container className={classes.gridContainer} spacing={3}>
                {
                    CandidateList.map(item =>
                        <Grid item lg={3} sm={6} xs={7} className={classes.card} key={item.id}>
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
        </Paper >
    )
}
