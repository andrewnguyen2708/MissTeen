import React, { useState } from 'react';
import FormSuccessMessage from '../Components/FormSuccessMessage';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Box from '@material-ui/core/Box';
import { TextField } from '@material-ui/core';
import { insertCandidate } from '../services/employeeService';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '3rem',
        [theme.breakpoints.down('sm')]: {
            padding: "1.5rem",
            paddingTop: "3rem"
        },
        '& .MuiFormControl-root': {
            width: '100%',
            marginBottom: theme.spacing(4),
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                margin: '10px',
                marginLeft: "auto",
                marginRight: "auto",
            }
        },
        [theme.breakpoints.up('xl')]: {
            padding: "2% 10%"
        }
    },
    head: {
        width: "100%",
        marginBottom: theme.spacing(5),
        backgroundColor: theme.palette.primary.light,

    },
    headTitle: {
        textAlign: "center",
        color: theme.palette.primary.main,
        padding: theme.spacing(2),
        fontWeight: "600",
        paddingLeft: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            marginLeft: -theme.spacing(4),
            fontSize: '1.5rem'
        }
    },
    content: {
        width: "100%"
    },
    gridContainer: {
        gridGap: theme.spacing(2)
    },
    item: {
        display: "flex",
        width: "100%",
        gap: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            gap: theme.spacing(0),
        }
    },
    upload: {
        display: 'flex',
        width: '80%',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0px",
        }
    },
    label: {
        marginBottom: theme.spacing(2),
    },
    buttonGroup: {
        display: 'flex',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '0px',
        }
    },
    button: {
        width: '40%',
        marginRight: theme.spacing(4),
        color: "white",
    },
}));


export default function CandidateForm() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    }
        = useForm({
            defaultValues: {
                id: "0",
                fullName: "",
                phone: "",
                email: "",
                address: "",
                profession: "",
                national: "",
                height: "",
                weight: "",
                dateOfBirth: "",
                education: "",
                file: null
            }
        });

    const onSubmit = (data) => {
        insertCandidate(data);
        handleReset();
        setOpen(true);
    }

    const handleReset = () => {
        setValue("fullName", "")
        setValue("dateOfBirth", "")
        setValue("phone", "")
        setValue("email", "")
        setValue("address", "")
        setValue("profession", "")
        setValue("national", "")
        setValue("height", "")
        setValue("weight", "")
        setValue("education", "")
        setValue("file", null)
    };

    const handleClose = (value) => {
        setOpen(false);
    };


    return (
        <Paper elevation={3} className={classes.root}>
            <Box className={classes.head}>
                <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                    align='center'
                    className={classes.headTitle}
                >
                    Đăng ký tham dự
                </Typography>
            </Box>
            <form className={classes.content}>
                <Grid container>
                    <Grid item className={classes.item}>
                        <TextField
                            {...register("fullName", { required: "vui lòng nhập trường này" })}
                            required
                            color="secondary"
                            variant='outlined'
                            error={errors.fullName}
                            helperText={errors.fullName?.message}
                            label='Họ và Tên'
                        />
                        <TextField
                            {...register("dateOfBirth", { required: "vui lòng nhập trường này" })}
                            required
                            color="secondary"
                            variant='outlined'
                            error={errors.dateOfBirth}
                            helperText={errors.dateOfBirth?.message}
                            id="date"
                            label="Ngày sinh"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name='dateOfBirth'
                        />
                    </Grid>
                    <Grid item className={classes.item}>
                        <TextField
                            {...register("phone", {
                                required: "vui lòng nhập trường này",
                                minLength: {
                                    value: 10, message: "Vui lòng nhập số điện thoại"
                                }
                            })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='Số điện thoại'
                            error={errors.phone}
                            helperText={errors.phone?.message}
                        />
                        <TextField
                            {...register("email", {
                                required: "vui lòng nhập trường này",
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: "vui lòng nhập email"
                                }
                            })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='Địa chỉ email'
                            error={errors.email}
                            helperText={errors.email?.message}
                        />
                    </Grid>
                    <Grid item className={classes.item}>
                        <TextField
                            {...register("address", { required: "vui lòng nhập trường này" })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='Địa chỉ liên hệ'
                            error={errors.address}
                            helperText={errors.address?.message}
                        />
                        <TextField
                            {...register("profession", { required: "vui lòng nhập trường này" })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='Nghề nghiệp'
                            error={errors.profession}
                            helperText={errors.profession?.message}
                        />
                    </Grid>
                    <Grid item className={classes.item}>
                        <TextField
                            {...register("height", { required: "vui lòng nhập trường này" })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='Chiều cao'
                            error={errors.height}
                            helperText={errors.height?.message}
                        />
                        <TextField
                            {...register("weight", { required: "vui lòng nhập trường này" })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='Cân nặng'
                            error={errors.weight}
                            helperText={errors.weight?.message}
                        />
                    </Grid>
                    <Grid item className={classes.item}>
                        <TextField
                            {...register("national", { required: "vui lòng nhập trường này" })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='Quốc tịch'
                            error={errors.national}
                            helperText={errors.national?.message}
                        />
                        <TextField
                            {...register("education", { required: "vui lòng nhập trường này" })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='Trình độ học vấn'
                            error={errors.education}
                            helperText={errors.education?.message}
                        />
                    </Grid>
                    <Box align="center" className={classes.upload}>
                        <div>
                            <Typography style={{ marginBottom: '10px' }}>Ảnh chân dung 3x4:</Typography>
                            <label htmlFor="portrait-image">
                                <Button
                                    variant="contained"
                                    component="span"
                                    className={classes.upLoadButton}
                                >
                                    <CloudUploadIcon />
                                    <span> Tải ảnh lên</span>
                                    <input
                                        {...register("file", { required: "vui lòng tải ảnh lên" })}
                                        file
                                        accept="image/*"
                                        id="portrait-image"
                                        hidden
                                        type="file"
                                    />
                                </Button>
                                <p style={{
                                    color: "#f44336",
                                    fontSize: "12px",
                                    fontFamily: "roboto",
                                    marginLeft: "15px",
                                    marginTop: "10px"
                                }}
                                >
                                    {errors.file?.message}
                                </p>
                            </label>
                        </div>
                        <div>
                            <img
                                style={{ height: "100px", marginLeft: "20px", marginTop: "-20px" }}
                                alt="portrait"
                            />
                        </div>
                    </Box>
                    <Box className={classes.buttonGroup}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={handleSubmit(onSubmit)}
                        >
                            Gửi thông tin
                        </Button>
                        <FormSuccessMessage open={open} onClose={handleClose} />
                        <Button
                            onClick={handleReset}
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                        >
                            Nhập lại
                        </Button>
                    </Box>
                </Grid>
            </form>
        </Paper>
    )
}
