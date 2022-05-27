import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 2rem',
        '& .MuiFormControl-root': {
            width: '80%',
            margin: '20px',
            [theme.breakpoints.down('sm')]: {
                width: '90%',
                margin: '10px'
            }
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    upload: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        margin: '20px'
    },
    label: {
        marginBottom: theme.spacing(2),
    },
    buttonGroup: {
        display: 'flex',
        width: '80%',
        margin: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '0px'
        }
    },
    button: {
        width: '40%',
        margin: '1rem'
    }
}));


export default function Form() {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography
                variant="h5"
                gutterBottom
                component="div"
                align='center'
            >
                BẢN ĐĂNG KÝ DỰ THI HOA HẬU VIỆT NAM 2020
            </Typography>
            <form>
                <Grid container p='3rem' className={classes.root}>
                    <Grid item md={6} sm={12} className={classes.item}>
                        <TextField
                            variant='outlined'
                            label='Họ và Tên'
                        />
                        <TextField
                            variant='outlined'
                            label='Số điện thoại'
                        />
                        <TextField
                            variant='outlined'
                            label='Địa chỉ email'
                        />
                        <TextField
                            variant='outlined'
                            label='Địa chỉ liên hệ'
                        />
                        <TextField
                            variant='outlined'
                            label='Nghề nghiệp'
                        />
                        <TextField
                            variant='outlined'
                            label='Quốc tịch'
                        />
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <TextField
                            id="date"
                            label="Ngày sinh"
                            type="date"
                            defaultValue="2022-05-25"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            variant='outlined'
                            label='Chiều cao'
                        />
                        <TextField
                            variant='outlined'
                            label='Cân nặng'
                        />
                        <TextField
                            variant='outlined'
                            label='Trình độ học vấn'
                        />


                        <FormControlLabel
                            className={classes.upload}
                            control={
                                <Button
                                    variant="contained"
                                    color="default"
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Tải ảnh lên
                                </Button>
                            }
                            label="Ảnh chân dung"
                            labelPlacement="top"
                        />
                        <Box className={classes.buttonGroup}>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Đăng ký
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Nhập lại
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}
