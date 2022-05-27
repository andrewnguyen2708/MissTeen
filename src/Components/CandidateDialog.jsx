import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { DialogContent, Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import CandidateCarousel from './CandidateCarousel';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'static',
    width: '100%',
    padding: theme.spacing(3),
  },
  media: {
    height: 300,
    marginRight: '2rem',
    marginBottom: '1.5rem'
  },
  header: {
    display: 'flex',
    marginRight: 0,
    alignItem: 'center',
    justifyContent: 'space-between'
  },
  details: {
    width: '100%',
  },
  closeIcon: {
    position: 'absotlute',
    right: "0px",
  }
}));

export default function CandidateDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog aria-labelledby="candidate-detail" open={open} maxWidth="md">
      <Container className={classes.root}>
        <Box className={classes.header}>
          <DialogTitle id="candidate-title">Thông tin thí sinh</DialogTitle>
          <IconButton aria-label="delete" onClick={handleClose} >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <Grid container xs={12}>
            <Grid item sm={5} xs={12} className={classes.media}>
              <CandidateCarousel />
            </Grid>
            <Grid item sm={5} xs={12} className={classes.details}>
              <Typography><strong>Số báo danh:</strong> 01</Typography>
              <Typography><strong>Họ và tên:</strong> Mai Phương Thúy</Typography>
              <Typography><strong>Ngày sinh:</strong> 20/10/2000</Typography>
              <Typography><strong>Số điện thoại:</strong> 09328438289</Typography>
              <Typography><strong>Địa chỉ email:</strong> maiphuongthuy@gmail.com</Typography>
              <Typography><strong>Địa chỉ:</strong> số 50 Bạck Đằng, phường 2, quận Tân Bình, Hồ Chí Minh</Typography>
              <Typography><strong>Nghề Nhiệp:</strong> Mẫu ảnh</Typography>
              <Typography><strong>Quốc tịch:</strong> Việt Nam</Typography>
              <Typography><strong>Chiều cao:</strong> 168cm</Typography>
              <Typography><strong>Cân nặng:</strong> 55kg</Typography>
              <Typography><strong>Trình độ học vấn:</strong> Đại học</Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Container>
    </Dialog>
  );
}