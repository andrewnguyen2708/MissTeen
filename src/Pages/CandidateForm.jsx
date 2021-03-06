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
                    ????ng k?? tham d???
                </Typography>
            </Box>
            <form className={classes.content}>
                <Grid container>
                    <Grid item className={classes.item}>
                        <TextField
                            {...register("fullName", { required: "vui l??ng nh???p tr?????ng n??y" })}
                            required
                            color="secondary"
                            variant='outlined'
                            error={errors.fullName}
                            helperText={errors.fullName?.message}
                            label='H??? v?? T??n'
                        />
                        <TextField
                            {...register("dateOfBirth", { required: "vui l??ng nh???p tr?????ng n??y" })}
                            required
                            color="secondary"
                            variant='outlined'
                            error={errors.dateOfBirth}
                            helperText={errors.dateOfBirth?.message}
                            id="date"
                            label="Ng??y sinh"
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
                                required: "vui l??ng nh???p tr?????ng n??y",
                                minLength: {
                                    value: 10, message: "Vui l??ng nh???p s??? ??i???n tho???i"
                                }
                            })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='S??? ??i???n tho???i'
                            error={errors.phone}
                            helperText={errors.phone?.message}
                        />
                        <TextField
                            {...register("email", {
                                required: "vui l??ng nh???p tr?????ng n??y",
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: "vui l??ng nh???p email"
                                }
                            })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='?????a ch??? email'
                            error={errors.email}
                            helperText={errors.email?.message}
                        />
                    </Grid>
                    <Grid item className={classes.item}>
                        <TextField
                            {...register("address", { required: "vui l??ng nh???p tr?????ng n??y" })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='?????a ch??? li??n h???'
                            error={errors.address}
                            helperText={errors.address?.message}
                        />
                        <TextField
                            {...register("profession", { required: "vui l??ng nh???p tr?????ng n??y" })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='Ngh??? nghi???p'
                            error={errors.profession}
                            helperText={errors.profession?.message}
                        />
                    </Grid>
                    <Grid item className={classes.item}>
                        <TextField
                            {...register("height", { required: "vui l??ng nh???p tr?????ng n??y" })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='Chi???u cao'
                            error={errors.height}
                            helperText={errors.height?.message}
                        />
                        <TextField
                            {...register("weight", { required: "vui l??ng nh???p tr?????ng n??y" })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='C??n n???ng'
                            error={errors.weight}
                            helperText={errors.weight?.message}
                        />
                    </Grid>
                    <Grid item className={classes.item}>
                        <TextField
                            {...register("national", { required: "vui l??ng nh???p tr?????ng n??y" })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='Qu???c t???ch'
                            error={errors.national}
                            helperText={errors.national?.message}
                        />
                        <TextField
                            {...register("education", { required: "vui l??ng nh???p tr?????ng n??y" })}
                            required
                            color="secondary"
                            variant='outlined'
                            label='Tr??nh ????? h???c v???n'
                            error={errors.education}
                            helperText={errors.education?.message}
                        />
                    </Grid>
                    <Box align="center" className={classes.upload}>
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
                                        {...register("file", { required: "vui l??ng t???i ???nh l??n" })}
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
                        </div>
                    </Box>
                    <Box className={classes.buttonGroup}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={handleSubmit(onSubmit)}
                        >
                            G???i th??ng tin
                        </Button>
                        <FormSuccessMessage open={open} onClose={handleClose} />
                        <Button
                            onClick={handleReset}
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                        >
                            Nh???p l???i
                        </Button>
                    </Box>
                </Grid>
            </form>
        </Paper>
    )
}
