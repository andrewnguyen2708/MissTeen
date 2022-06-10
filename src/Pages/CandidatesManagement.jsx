import React, { useState } from 'react'
import useTable from '../Components/useTable'
import { getAllCandidate } from '../services/employeeService';
import { Paper, makeStyles, Table, TableBody, TableHead, TableRow, TableCell, Toolbar, InputAdornment, TextField, List, Button, Collapse, ListItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { Search } from "@material-ui/icons";
import FormPopup from '../Components/FormPopup';
import CandidatePopup from "../Components/CandidatePopup";

const useStyles = makeStyles(theme => ({
  root: {
    display: "block",
    padding: "3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
      paddingTop: "3rem"
    }
  },
  headTitle: {
    textAlign: "left",
    fontWeight: "600",
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      fontSize: '1.5rem'
    }
  },
  searchInput: {
    width: '75%',
    marginLeft: -theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: "150%",
      marginBottom: theme.spacing(3)
    }
  },
  tableDesktop: {
    width: "80%",
  },
  mobileTable: {
    display: "none",
    marginLeft: "-20px",
    width: "110%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    '& thead th': {
      fontWeight: '600',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      width: "10rem"
    },
    '& tbody td': {
      fontWeight: '300',
    },
    '& tbody tr:hover': {
      backgroundColor: '#fffbf2',
      cursor: 'pointer',
    },
  },
  data: {
    paddingRight: theme.spacing(5)
  },
}))

const headCells = [
  { id: "id", label: "Số báo danh" },
  { id: "fullName", label: "Họ và tên" },
  { id: "dateOfBirth", label: "Năm sinh" },
  { id: "height", label: "Chiều cao" },
  { id: "weight", label: "Cân nặng" },
  { id: "national", label: "Quốc tịch" },
]

export default function CandidatesManagement() {
  const classes = useStyles();
  let num = 1;
  const [records, setRecords] = useState(getAllCandidate());
  const [open, setOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [view, setView] = useState(false)
  const [recordForEdit, setRecordForEdit] = useState({});
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

  const {
    page,
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(records, headCells, filterFn);

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn: items => {
        if (target.value == "")
          return items;
        else
          return items.filter(x => x.fullName.toLowerCase().includes(target.value) || x.dateOfBirth.slice(0, 4).toLowerCase().includes(target.value) || x.id == target.value)
      }
    })
  }

  const handleClickEdit = (item) => {
    setRecordForEdit(item);
    setOpen(true);
  }
  const handleClickView = (item) => {
    setRecordForEdit(item);
    setView(true);
  }

  const handleClickDelete = (item) => {
    setRecords(records.filter(record => record.id !== item.id))
    localStorage.setItem("CandidateList", JSON.stringify(records.filter(record => record.id !== item.id)))
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        align='left'
        color="secondary"
        className={classes.headTitle}
      >
        Quản lý danh sách thí sinh
      </Typography>
      <Toolbar>
        <TextField
          variant='outlined'
          color="secondary"
          label="Tìm kiếm thí sinh"
          placeholder="Tìm kiếm số báo danh, họ tên hoặc năm sinh"
          className={classes.searchInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>)
          }}
          onChange={handleSearch}
        />
      </Toolbar>
      <Typography
        variant="body2"
        gutterBottom
        component="div"
        align='right'
      >Tổng số: {records.length}
      </Typography>
      <TblContainer className={classes.tableDesktop}>
        <TblHead />
        <TableBody>
          {
            recordsAfterPagingAndSorting().map(item => (
              <TableRow key={item.id}>
                <TableCell align="center">{page * 5 + num++}</TableCell>
                <TableCell align="center" className={classes.data}>{item.id < 10 ? "0" + item.id : item.id}</TableCell>
                <TableCell align="center" className={classes.data}>{item.fullName}</TableCell>
                <TableCell align="center" className={classes.data}>{item.dateOfBirth.slice(0, 4)}</TableCell>
                <TableCell align="center" className={classes.data}>{item.height}</TableCell>
                <TableCell align="center" className={classes.data}>{item.weight}</TableCell>
                <TableCell align="center" className={classes.data}>{item.national}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleClickView(item)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton onClick={() => handleClickEdit(item)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleClickDelete(item)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </TblContainer>
      <List className={classes.mobileTable}>
        {
          recordsAfterPagingAndSorting().map((item, index) => {
            if (index < 2) {
              return (
                <ListItem style={{ display: "flex", flexDirection: "column" }}>
                  <Table key={item.id}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Thí sinh</TableCell>
                        <TableCell align='center'>{item.fullName}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableRow>
                      <TableCell>Số báo danh</TableCell>
                      <TableCell align='center'>{"0" + item.id}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Năm sinh</TableCell>
                      <TableCell align='center'>{item.dateOfBirth.slice(0, 4)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Chiều cao</TableCell>
                      <TableCell align='center'>{item.height}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Cân nặng</TableCell>
                      <TableCell align='center'>{item.weight}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Quốc tịch</TableCell>
                      <TableCell align='center'>{item.national}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Thao tác</TableCell>
                      <TableCell align='center'>
                        <IconButton onClick={() => handleClickView(item)}>
                          <VisibilityIcon fontSize='small' />
                        </IconButton>
                        <IconButton onClick={() => handleClickEdit(item)}>
                          <EditIcon fontSize='small' />
                        </IconButton>
                        <IconButton onClick={() => handleClickDelete(item)}>
                          <DeleteIcon fontSize='small' />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </Table>
                </ListItem>
              )
            }
              return (
                <Collapse in={toggle} timeout="auto" unmountOnExit>
                  <ListItem>
                    <Table key={item.id}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Thí sinh</TableCell>
                          <TableCell align='center'>{item.fullName}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableRow>
                        <TableCell>Số báo danh</TableCell>
                        <TableCell align='center'>{"0" + item.id}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Năm sinh</TableCell>
                        <TableCell align='center'>{item.dateOfBirth.slice(0, 4)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Chiều cao</TableCell>
                        <TableCell align='center'>{item.height}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cân nặng</TableCell>
                        <TableCell align='center'>{item.weight}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Quốc tịch</TableCell>
                        <TableCell align='center'>{item.national}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Thao tác</TableCell>
                        <TableCell align='center'>
                          <IconButton onClick={() => handleClickView(item)}>
                            <VisibilityIcon fontSize='small' />
                          </IconButton>
                          <IconButton onClick={() => handleClickEdit(item)}>
                            <EditIcon fontSize='small' />
                          </IconButton>
                          <IconButton onClick={() => handleClickDelete(item)}>
                            <DeleteIcon fontSize='small' />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </Table>
                  </ListItem>
                </Collapse>
              )
            })
        }
        <div style={{marginLeft: "9rem" }}>
        <Button onClick={handleToggle}>{ !toggle ? "Xem thêm" : "ẩn bớt"}</Button>
        </div>
      </List>
      <TblPagination />
      <CandidatePopup open={view} setOpen={setView} item={recordForEdit} />
      <FormPopup open={open} setOpen={setOpen} recordForEdit={recordForEdit} records={records} />
    </Paper>
  )
}
