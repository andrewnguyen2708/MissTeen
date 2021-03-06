import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Dialog, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Box from '@material-ui/core/Box';
import { TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5),
        '& .MuiFormControl-root': {
            width: '25rem',
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
        marginLeft: '20px',
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.3rem"
        }
    },
    content: {
        width: "100%",
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
        marginLeft: '20px',
    },
    label: {
        marginBottom: theme.spacing(2),
    },
    buttonGroup: {
        display: 'flex',
        width: '160%',
        marginTop: "20px",
        [theme.breakpoints.down('sm')]: {
            width: '120%',
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

export default function FormPopup({ open, setOpen, records, recordForEdit }) {
    const classes = useStyles();
    const [values, setValues] = useState(initialValues);

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

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
        <Dialog aria-labelledby="candidate-detail" open={open} onClose={handleClose} maxWidth="md">
            <IconButton aria-label="delete" onClick={handleClose} className={classes.closeIcon}>
                <CloseIcon />
            </IconButton>
            <Container className={classes.root}>
                <Typography
                    variant="h4"
                    component="div"
                    align='center'
                    color="secondary"
                    className={classes.headTitle}
                >
                    Ch???nh s???a th??ng tin th?? sinh
                </Typography>
                <form className={classes.content}>
                    <Grid container>
                        <Grid item className={classes.item}>
                            <TextField
                                required
                                color="secondary"
                                variant='outlined'
                                label='H??? v?? T??n'
                                name="fullName"
                                value={values.fullName}
                                onChange={handleTextChange}
                            />
                            <TextField
                                required
                                color="secondary"
                                variant='outlined'
                                id="date"
                                label="Ng??y sinh"
                                value={values.dateOfBirth}
                                onChange={handleTextChange}
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name='dateOfBirth'
                            />
                        </Grid>
                        <Grid item className={classes.item}>
                            <TextField
                                required
                                color="secondary"
                                variant='outlined'
                                label='S??? ??i???n tho???i'
                                name="phone"
                                value={values.phone}
                                onChange={handleTextChange}
                            />
                            <TextField
                                required
                                color="secondary"
                                variant='outlined'
                                label='?????a ch??? email'
                                name="email"
                                value={values.email}
                                onChange={handleTextChange}
                            />
                        </Grid>
                        <Grid item className={classes.item}>
                            <TextField
                                required
                                color="secondary"
                                variant='outlined'
                                label='?????a ch??? li??n h???'
                                name="address"
                                value={values.address}
                                onChange={handleTextChange}
                            />
                            <TextField
                                required
                                color="secondary"
                                variant='outlined'
                                label='Ngh??? nghi???p'
                                name="profession"
                                value={values.profession}
                                onChange={handleTextChange}
                            />
                        </Grid>
                        <Grid item className={classes.item}>
                            <TextField
                                required
                                color="secondary"
                                variant='outlined'
                                label='Chi???u cao'
                                name="height"
                                value={values.height}
                                onChange={handleTextChange}
                            />
                            <TextField
                                required
                                color="secondary"
                                variant='outlined'
                                label='C??n n???ng'
                                name="weight"
                                value={values.weight}
                                onChange={handleTextChange}
                            />
                        </Grid>
                        <Grid item className={classes.item}>
                            <TextField
                                required
                                color="secondary"
                                variant='outlined'
                                label='Qu???c t???ch'
                                name="national"
                                value={values.national}
                                onChange={handleTextChange}
                            />
                            <TextField
                                required
                                color="secondary"
                                variant='outlined'
                                label='Tr??nh ????? h???c v???n'
                                name="education"
                                value={values.education}
                                onChange={handleTextChange}
                            />
                        </Grid>
                        <Box flexDirection="column">
                            <Box className={classes.upload}>
                                <div>
                                    <Typography style={{ marginBottom: '10px' }}>???nh ch??n dung 3x4:</Typography>
                                    <label htmlFor="portrait-image">
                                        <Button
                                            variant="contained"
                                            component="span"
                                            className={classes.upLoadButton}
                                        >
                                            <CloudUploadIcon />
                                            <span> T???i ???nh l??n</span>
                                            <input
                                                file
                                                accept="image/*"
                                                id="portrait-image"
                                                hidden
                                                type="file"
                                                name="file"
                                                onChange={handleUploadFile}
                                            />
                                        </Button>
                                    </label>
                                </div>
                                <div>
                                </div>
                            </Box>
                            <Box className={classes.buttonGroup}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={handleSubmit}
                                >
                                    C???p nh???t
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    onClick={handleReset}
                                >
                                    Nh???p l???i
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </form>
            </Container>
        </Dialog>
    )
}
