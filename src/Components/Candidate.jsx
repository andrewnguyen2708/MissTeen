import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import CandidateDialog from './CandidateDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
    },
    content: {
        width: '60%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    media: {
        height: 300,
    },
}));

export default function Candidate({ image, name, age, height, weight }) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Ảnh chân dung"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Box className={classes.content}>
                        <Typography variant="body2" color="textSecondary" component="h5">
                            {age}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="h5">
                            {height}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="h5">
                            {weight}
                        </Typography>
                    </Box>
                </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={handleClickOpen}>
                    Thông tin chi tiết
                </Button>
                <CandidateDialog open={open} onClose={handleClose} />
            </CardActions>
        </Card>
    );
}