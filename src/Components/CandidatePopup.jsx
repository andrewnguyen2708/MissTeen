import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { DialogContent, Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    posiotion: 'relative',
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(4)
  },
  header: {
    display: 'flex',
    marginRight: 0,
    alignItem: 'center',
    justifyContent: 'space-between'
  },
  content: {
    paddingRight: "0px"
  },
  media: {
    display: "block",
    height: 300,
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: 250
    }
  },
  details: {
    display: "block",
    marginLeft: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(2),
    }
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  }
}));

export default function CandidatePopup(props) {
  const classes = useStyles();
  const { open, setOpen, item } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog aria-labelledby="candidate-detail" open={open} maxWidth="md" onClose={handleClose}>
      <IconButton aria-label="delete" onClick={handleClose} className={classes.closeIcon}>
        <CloseIcon />
      </IconButton>
      <Container className={classes.root}>
        <Box className={classes.header}>
          <DialogTitle id="candidate-title">Thông tin thí sinh</DialogTitle>
        </Box>
        <DialogContent className={classes.content}>
          <Grid container>
            <Grid item sm={4} xs={12} >
              <CardMedia
                className={classes.media}
                image={item.file}
                title="Ảnh chân dung"
              />
            </Grid>
            <Grid item sm={6} xs={12} className={classes.details}>
              <Typography><strong>Số báo danh:</strong> {item.id}</Typography>
              <Typography><strong>Họ và tên:</strong> {item.fullName}</Typography>
              <Typography><strong>Ngày sinh:</strong> {item.dateOfBirth}</Typography>
              <Typography><strong>Số điện thoại:</strong> {item.phone}</Typography>
              <Typography><strong>Địa chỉ email:</strong> {item.email}</Typography>
              <Typography><strong>Địa chỉ:</strong> {item.address}</Typography>
              <Typography><strong>Nghề Nhiệp:</strong> {item.profession}</Typography>
              <Typography><strong>Quốc tịch:</strong> {item.national}</Typography>
              <Typography><strong>Chiều cao:</strong> {item.height}</Typography>
              <Typography><strong>Cân nặng:</strong> {item.weight}</Typography>
              <Typography><strong>Trình độ học vấn:</strong> {item.education}</Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Container>
    </Dialog>
  );
}