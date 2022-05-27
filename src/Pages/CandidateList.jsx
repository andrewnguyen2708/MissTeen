import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Candidate from '../Components/Candidate.jsx'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        padding: '0 2rem',
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

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography
                variant="h5"
                gutterBottom
                component="div"
                align='center'
            >
                Danh sách thí sinh tham dự
            </Typography>
            <Grid container className={classes.gridContainer}>
                <Grid item lg={3} sm={5} xs={12} className={classes.card}>
                    <Candidate
                        image="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/29/413a2380-1-16100379955741747908252-1619635444366894335059.jpg"
                        name="Mai Phương Thúy"
                        age="20 tuổi"
                        height="168cm"
                        weight="58kg" 
                    />
                </Grid>
                <Grid item lg={3} sm={5} xs={12} className={classes.card}>
                    <Candidate
                        image="https://sohanews.sohacdn.com/160588918557773824/2020/10/10/u3-1602336759357906460178.jpg"
                        name="Nguyễn Thùy Linh"
                        age="18 tuổi"
                        height="170cm"
                        weight="54kg"
                    />
                </Grid>
                <Grid item lg={3} sm={5} xs={12} className={classes.card}>
                    <Candidate
                        image="https://static2.yan.vn/YanNews/2167221/202104/1-aafae6b1.jpg"
                        name="Lê Xuân Quỳnh"
                        age="17 tuổi"
                        height="172cm"
                        weight="60kg"
                    />
                </Grid>
                <Grid item lg={3} sm={5} xs={12} className={classes.card}>
                    <Candidate
                        image="https://static2.yan.vn/YanNews/2167221/202104/1-aafae6b1.jpg"
                        name="Lê Xuân Quỳnh"
                        age="17 tuổi"
                        height="172cm"
                        weight="60kg"
                    />
                </Grid>
                <Grid item lg={3} sm={5} xs={12} className={classes.card}>
                    <Candidate
                        image="https://static2.yan.vn/YanNews/2167221/202104/1-aafae6b1.jpg"
                        name="Lê Xuân Quỳnh"
                        age="17 tuổi"
                        height="172cm"
                        weight="60kg"
                    />
                </Grid>
                <Grid item lg={3} sm={5} xs={12} className={classes.card}>
                    <Candidate
                        image="https://static2.yan.vn/YanNews/2167221/202104/1-aafae6b1.jpg"
                        name="Lê Xuân Quỳnh"
                        age="17 tuổi"
                        height="172cm"
                        weight="60kg"
                    />
                </Grid>
                <Grid item lg={3} sm={5} xs={12} className={classes.card}>
                    <Candidate
                        image="https://static2.yan.vn/YanNews/2167221/202104/1-aafae6b1.jpg"
                        name="Lê Xuân Quỳnh"
                        age="17 tuổi"
                        height="172cm"
                        weight="60kg"
                    />
                </Grid>
                <Grid item lg={3} sm={5} xs={12} className={classes.card}>
                    <Candidate
                        image="https://static2.yan.vn/YanNews/2167221/202104/1-aafae6b1.jpg"
                        name="Lê Xuân Quỳnh"
                        age="17 tuổi"
                        height="172cm"
                        weight="60kg"
                    />
                </Grid>
                <Grid item lg={3} sm={5} xs={12} className={classes.card}>
                    <Candidate
                        image="https://static2.yan.vn/YanNews/2167221/202104/1-aafae6b1.jpg"
                        name="Lê Xuân Quỳnh"
                        age="17 tuổi"
                        height="172cm"
                        weight="60kg"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
