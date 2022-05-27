import React from 'react';
import Header from '../../Components/Header.jsx';
import Footer from '../../Components/Footer.jsx';
import Rules from '../Rules.jsx';
import CandidateList from '../CandidateList.jsx';
import Form from '../Form.jsx';
import theme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '',
    margin: '100px auto 50px auto'
  },
}));


function App() {

  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Container className={classes.container}>
          <Router>
            <Switch>
              <Route exact path="/" component={Rules}  />
              <Route path="/dang-ky-tham-du" component={Form} />
              <Route path="/danh-sach-thi-sinh" component={CandidateList} />
            </Switch>
          </Router>
        </Container>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;



