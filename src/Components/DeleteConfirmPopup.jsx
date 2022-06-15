import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent } from '@material-ui/core';
import { Container, Button } from '@material-ui/core';


export default function DeleteConfirmPopup({ open, setOpen, recordForEdit, records, setRecords }) {

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setRecords(records.filter(record => record.id !== recordForEdit.id));
    localStorage.setItem("CandidateList", JSON.stringify(records.filter(record => record.id !== recordForEdit.id)));
    setOpen(false);
  }

  return (
    <Dialog
      aria-labelledby="candidate-detail"
      open={open} 
      maxWidth="md"
      onClose={handleClose}
    >
      <Container >
        <DialogTitle id="candidate-title">Bạn có chắc chắn xóa thông tin này không?</DialogTitle>
        <DialogContent align="right">
          <Button color="primary" onClick={handleDelete}>xóa</Button>
          <Button onClick={handleClose}>đóng</Button>
        </DialogContent>
      </Container>
    </Dialog>
  );
}