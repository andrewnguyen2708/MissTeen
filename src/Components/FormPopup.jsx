import React, { useEffect } from 'react';
import { useForm, Form } from '../Components/UseForm';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Controls from '../Components/Controls/Controls';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Box from '@material-ui/core/Box';
import { TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem 2rem',
        '& .MuiFormControl-root': {
            width: '80%',
            margin: '20px',
            [theme.breakpoints.down('sm')]: {
                width: '90%',
                margin: '10px',
                fontSize: '0.1rem'
            }
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: theme.spacing(1),
            paddingTop: theme.spacing(7)
        }
    },
    headTitle: {
        textAlign: "left",
        fontWeight: "600",
        paddingLeft: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            marginLeft: -theme.spacing(4),
            fontSize: "1.3rem"
        }
    },
    upload: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        margin: '20px',
        marginLeft: '25px'
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
    },
    upLoadButton: {
        zIndex: '1'
    },
    closeIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
      }
}));
  

export default function FormPopup({ open, setOpen, records, recordForEdit }) {
    const classes = useStyles();
    const {
        values,
        setValues,
        handleTextChange
    }
        = useForm({})

    const handleClose = () => {
        setOpen(false);
    }

    const handleUploadFile = (e) => {
        setValues({
            ...values,
            file: e.target.files[0]
        })
    }

    const handleSubmit = () => {
        records[records.findIndex((item) => item.id === values.id)] = values;
        localStorage.setItem("CandidateList", JSON.stringify(records))
        setOpen(false);
    };

    const handleReset = () => {
        setValues(recordForEdit);
    };

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])


  return (
    <Dialog aria-labelledby="candidate-detail" open={open} maxWidth="md">
        <IconButton aria-label="delete" onClick={handleClose} className={classes.closeIcon}>
        <CloseIcon />
      </IconButton>
      <Paper elevation={3} className={classes.root}>
            <Typography
                variant="h4"
                component="div"
                align='center'
                color = "secondary"
                className={classes.headTitle}
            >
                Chỉnh sửa thông tin thí sinh
            </Typography>
            <Form>
                <Grid container p='3rem' className={classes.root}>
                    <Grid item md={6} sm={12} className={classes.item}>
                        <Controls.Input
                            label='Họ và Tên'
                            name='fullName'
                            value={values.fullName}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            label='Số điện thoại'
                            name='phone'
                            value={values.phone}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            label='Địa chỉ email'
                            name='email'
                            value={values.email}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            label='Địa chỉ liên hệ'
                            name='address'
                            value={values.address}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            label='Nghề nghiệp'
                            name='profession'
                            value={values.profession}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            label='Quốc tịch'
                            name='national'
                            value={values.national}
                            onChange={handleTextChange}
                        />
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <TextField
                            color="secondary"
                            id="date"
                            label="Ngày sinh"
                            type="date"
                            defaultValue="2022-05-25"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name='dateOfBirth'
                            value={values.dateOfBirth}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            label='Chiều cao'
                            name='height'
                            value={values.height}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
                            label='Cân nặng'
                            name='weight'
                            value={values.weight}
                            onChange={handleTextChange}
                        />
                        <Controls.Input
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
                                Cập nhật
                            </Button>
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
    </Dialog>
  )
}
