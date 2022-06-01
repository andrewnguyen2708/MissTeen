import React from 'react';
import Candidate from '../Components/Candidate.jsx'
import { getAllCandidate } from '../services/employeeService.js';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        padding: '2rem 4rem',
    },
    headTitle: {
        textAlign: "left",
        fontWeight: "600",
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(5),
            fontSize: '1.5rem'
        }
    },
    title: {
        align: 'center',
        fontSize: '1.5rem'
    },
    gridContainer: {
        paddingTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '10%'
        }
    },
    card: {
        marginRight: '0.5rem',
        marginBottom: '2rem'
    }
}));


export default function CandidateList() {
    const CandidateList = getAllCandidate();
    console.log(CandidateList);

    const classes = useStyles();

    return (
        <Paper elevation={5} className={classes.root}>
            <Typography
                variant="h4"
                gutterBottom
                component="div"
                color="secondary"
                className={classes.headTitle}
            >
                Danh sách thí sinh tham dự
            </Typography>
            <Grid container className={classes.gridContainer}>
                {
                    CandidateList.map( item => 
                    <Grid Grid item lg={3} sm={5} xs={12} className={classes.card} key={item.id}>
                <Candidate
                    item={item}
                    image={item.file}
                    name={item.fullName}
                    age={(2022 - item.dateOfBirth.slice(0, 4)) + " tuổi"}
                    height={item.height}
                    weight={item.weight}
                />
                </Grid>
                )}
        </Grid>
        </Paper >
    )
}
