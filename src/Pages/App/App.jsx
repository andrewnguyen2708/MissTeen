import React, { useState } from 'react';
import Header from '../../Components/Header.jsx';
import Footer from '../../Components/Footer.jsx';
import ContestRules from '../ContestRules.jsx';
import CandidateList from '../CandidateList.jsx';
import CandidateForm from '../CandidateForm.jsx';
import CandidatesManagement from '../CandidatesManagement.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import theme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { IconButton } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "yellow"
  },
  container: {
    margin: '100px auto 50px auto',
    [theme.breakpoints.down("sm")]: {
      margin: '75px 0px 0px 0px',
      padding: "0px"
    }
  },
  menu: {
    display: 'flex',
    width: '60%',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  link: {
    textDecoration: 'none'
  },
  sideLink: {
    textDecoration: "none",
    color: "black"
  },
  button: {
    color: '#fff',
  },
  responsive: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },
  menuButton: {
    color: 'white'
  },
}));


function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme} >
        <Router>
          <Header>
            <Box className={classes.menu}>
              <Link to="/" className={classes.link}>
                <Button className={classes.button}>
                  Thể lệ cuộc thi
                </Button>
              </Link>
              <Link to="/dang-ky-tham-du" className={classes.link}>
                <Button className={classes.button}>
                  Đăng ký tham dự
                </Button>
              </Link>
              <Link to="/danh-sach-thi-sinh" className={classes.link}>
                <Button className={classes.button}>
                  Danh sách thí sinh
                </Button>
              </Link>
              <Link to="/quan-ly-danh-sach-thi-sinh" className={classes.link}>
                <Button className={classes.button}>
                  Quản lý thí sinh
                </Button>
              </Link>
            </Box>
            <Box className={classes.responsive}>
              <IconButton onClick={() => setOpen(true)}>
                <DehazeIcon className={classes.menuButton} />
              </IconButton>
              <SwipeableDrawer
                anchor="right"
                onClose={() => setOpen(false)}
                open={open}
              >
                <List>
                  <Link to='/' className={classes.sideLink}>
                    <ListItem button onClick={() => setOpen(false)}>
                      <ListItemIcon><AssignmentIcon /></ListItemIcon>
                      <ListItemText primary='Thể lệ cuộc thi' />
                    </ListItem>
                  </Link>
                  <Link to='/dang-ky-tham-du' className={classes.sideLink}>
                    <ListItem button onClick={() => setOpen(false)}>
                      <ListItemIcon><CreateIcon /></ListItemIcon>
                      <ListItemText primary='Đăng ký tham dự' />
                    </ListItem>
                  </Link>
                  <Link to="/danh-sach-thi-sinh" className={classes.sideLink}>
                    <ListItem button onClick={() => setOpen(false)}>
                      <ListItemIcon><PeopleAltIcon /></ListItemIcon>
                      <ListItemText primary='Danh sách thí sinh' />
                    </ListItem>
                  </Link>
                  <Link to="/quan-ly-danh-sach-thi-sinh" className={classes.sideLink}>
                    <ListItem button onClick={() => setOpen(false)}>
                      <ListItemIcon><AssignmentIndIcon /></ListItemIcon>
                      <ListItemText primary='Quản lý thí sinh' />
                    </ListItem>
                  </Link>
                </List>
              </SwipeableDrawer>
            </Box>
          </Header>
          <Container className={classes.container} elevation={3}>
            <Switch>
              <Route exact path="/" component={ContestRules} />
              <Route path="/dang-ky-tham-du" component={CandidateForm} />
              <Route path="/danh-sach-thi-sinh" component={CandidateList} />
              <Route path="/quan-ly-danh-sach-thi-sinh" component={CandidatesManagement} />
            </Switch>
          </Container>
          <Footer />
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;



