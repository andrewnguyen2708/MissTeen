import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import CandidatePopup from './CandidatePopup';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        border: "2px solid #FA8072"
    },
    content: {
        width: '90%',
        align: "center",
        display: 'flex',
        justifyContent: 'space-between',
    },
    media: {
        height: 300,
    },
   
}));

export default function Candidate({ item, image, name, age, height, weight }) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    console.log(image)

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={handleClickOpen}>
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
                        <Box>
                            <Typography align="center" variant="body2" color="textSecondary" component="h5">
                                Tuổi
                            </Typography>
                            <Typography align="center" variant="body2" color="textSecondary" component="h5">
                                {age}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography align="center" variant="body2" color="textSecondary" component="h5">
                                Chiều cao
                            </Typography>
                            <Typography align="center" variant="body2" color="textSecondary" component="h5">
                                {height}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography align="center" variant="body2" color="textSecondary" component="h5">
                                Cân nặng
                            </Typography>
                            <Typography align="center" variant="body2" color="textSecondary" component="h5">
                                {weight}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CandidatePopup
                open={open}
                setOpen={setOpen}
                item={item}
            />
        </Card>
    );
}