import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 320,
        [theme.breakpoints.down('sm')]: {
            height: 350,
          }
    },
}));

function CandidateCarousel(props) {

    const classes = useStyles();

    return (
        <Carousel>
            <CardMedia
                    className={classes.media}
                    image="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/29/413a2380-1-16100379955741747908252-1619635444366894335059.jpg"
                    title="Ảnh chân dung"
                />
            <CardMedia
                    className={classes.media}
                    image="https://sohanews.sohacdn.com/160588918557773824/2020/10/10/u3-1602336759357906460178.jpg"
                    title="Ảnh chân dung"
                />
            <CardMedia
                    className={classes.media}
                    image="https://static2.yan.vn/YanNews/2167221/202104/1-aafae6b1.jpg"
                    title="Ảnh chân dung"
                />
        </Carousel>
    )
}

export default CandidateCarousel;
