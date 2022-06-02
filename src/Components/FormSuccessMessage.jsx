import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { DialogContent } from '@material-ui/core';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    color: "pink",
    padding: theme.spacing(7),
    margin: theme.spacing(7)
  },
}));

export default function FormSuccessMessage(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      aria-labelledby="candidate-detail"
      open={open} 
      maxWidth="md"
      onClose={handleClose}
      className={classes.root}
    >
      <Container >
        <DialogTitle id="candidate-title">Bạn đã đăng ký thành công</DialogTitle>
        <DialogContent>
          <Typography>Cảm ơn bạn đã đăng ký thông tin</Typography>
        </DialogContent>
      </Container>
    </Dialog>
  );
}