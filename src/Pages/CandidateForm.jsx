import React, { useState } from 'react';
import FormSuccessMessage from '../Components/FormSuccessMessage';
import { useForm, Form } from '../Components/UseForm';
import Controls from '../Components/Controls/Controls';
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
        padding: '2rem 4rem',
        [theme.breakpoints.down('sm')]: {
            padding: "1.5rem"
        },
        '& .MuiFormControl-root': {
            width: '90%',
            margin: '20px',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                margin: '10px',
                marginLeft: "auto",
                marginRight: "auto",
            }
        },
    },
    head: {
        width: "100%",
        marginBottom: theme.spacing(5),
        backgroundColor: theme.palette.primary.light,

    },
    headTitle: {
        textAlign: "center",
        color: theme.palette.primary.main,
        padding: theme.spacing(3),
        fontWeight: "600",
        paddingLeft: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            marginLeft: -theme.spacing(4),
            fontSize: '1.5rem'
        }
    },
    content: {
        width: "100%",
        marginLeft: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            marginLeft: theme.spacing(2),
            padding: "10px 0px"
        }
    },
    upload: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        margin: '20px',
        marginLeft: '25px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0px",
        }
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
            margin: '0px',
        }
    },
    button: {
        width: '40%',
        margin: '1rem',
        marginLeft: "0px",
        color: "white",
    },
    upLoadButton: {
        zIndex: '1'
    }
}));

const initialValues = {
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


export default function CandidateForm() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const {
        values,
        setValues,
        handleTextChange
    }
        = useForm(initialValues)

    const rules = {};
    rules.fullName = values.fullName.trim() ? "" : "Vui lòng nhập trường này";
    rules.address = values.address.trim() ? "" : "Vui lòng nhập trường này";
    rules.profession = values.profession.trim() ? "" : "Vui lòng nhập trường này";
    rules.national = values.national.trim() ? "" : "Vui lòng nhập trường này";
    rules.height = values.height.trim() ? "" : "Vui lòng nhập trường này";
    rules.weight = values.weight.trim() ? "" : "Vui lòng nhập trường này";
    rules.dateOfBirth = values.dateOfBirth.trim() ? "" : "Vui lòng nhập trường này";
    rules.education = values.education.trim() ? "" : "Vui lòng nhập trường này";
    rules.phone = values.phone.trim().length >= 10 ? "" : "vui lòng nhập số điện thoại";
    rules.file = values.file ? "" : "vui lòng tải ảnh lên";
    rules.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email.trim()) ? "" : "Vui lòng nhập email";

    const validate = () => {
        return Object.values(rules).every(rule => rule == "");
    }

    const handleUploadFile = (e) => {
        const file = e.target.files[0];
        file.image = URL.createObjectURL(file);
        console.log(file);
        setValues({
            ...values,
            file: file.image
        })
    }

    const handleSubmit = () => {
        if (validate()) {
            insertCandidate(values);
            setOpen(true);
        } else {
            window.alert("Vui lòng nhập đầy đủ thông tin")
        }
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    const handleReset = () => {
        setValues(initialValues);
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
            <Form className={classes.content}>
                <Grid container>
                    <Grid item md={6} sm={12} className={classes.item}>
                        <Controls.Input
                            rule={rules.fullName}
                            label='Họ và Tên*'
                            name='fullName'
                            value={values.fullName}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            rule={rules.phone}
                            label='Số điện thoại*'
                            name='phone'
                            value={values.phone}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            rule={rules.email}
                            label='Địa chỉ email'
                            name='email'
                            value={values.email}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            rule={rules.address}
                            label='Địa chỉ liên hệ'
                            name='address'
                            value={values.address}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            rule={rules.profession}
                            label='Nghề nghiệp'
                            name='profession'
                            value={values.profession}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            rule={rules.national}
                            label='Quốc tịch'
                            name='national'
                            value={values.national}
                            onChange={handleTextChange}
                        />
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <TextField
                            rule={rules.dateOfBirth}
                            color="secondary"
                            id="date"
                            label="Ngày sinh"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name='dateOfBirth'
                            value={values.dateOfBirth}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            rule={rules.height}
                            label='Chiều cao'
                            name='height'
                            value={values.height}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            rule={rules.weight}
                            label='Cân nặng'
                            name='weight'
                            value={values.weight}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            rule={rules.education}
                            label='Trình độ học vấn'
                            name='education'
                            value={values.education}
                            onChange={handleTextChange}
                        />
                        <Box className={classes.upload}>
                            <Typography style={{ marginBottom: '10px' }}>Ảnh chân dung 3x4:</Typography>
                            <label htmlFor="portrait-image">
                                <Button
                                    variant="contained"
                                    component="span"
                                    className={classes.upLoadButton}
                                >
                                    <CloudUploadIcon />
                                    <span> Tải ảnh lên</span>
                                </Button>
                            </label>
                            <input
                                file
                                accept="image/*"
                                id="portrait-image"
                                multiple
                                type="file"
                                style={{
                                    position: 'absolute',
                                    top: "42px",
                                    left: '31px',
                                    fontSize: "1rem"
                                }}
                                onClick={handleUploadFile}
                            />
                        </Box>
                        <Box className={classes.buttonGroup}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={handleSubmit}
                            >
                                Gửi thông tin
                            </Button>
                            <FormSuccessMessage open={open} onClose={handleClose} />
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                onClick={handleReset}
                            >
                                Nhập lại
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Form>
        </Paper>
    )
}
