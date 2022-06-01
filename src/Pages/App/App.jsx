import React from 'react';
import Header from '../../Components/Header.jsx';
import Footer from '../../Components/Footer.jsx';
import ContestRules from '../ContestRules.jsx';
import CandidateList from '../CandidateList.jsx';
import CandidateForm from '../CandidateForm.jsx';
import AllCandidates from '../CandidatesManagement.jsx'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "yellow"
  },
  container: {
    padding: '',
    margin: '100px auto 50px auto',
  },
}));


function App() {

  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme} >
          <Header />
          <Container className={classes.container} elevation={3}>
            <Router>
              <Switch>
                <Route exact path="/" component={ContestRules} />
                <Route path="/dang-ky-tham-du" component={CandidateForm} />
                <Route path="/danh-sach-thi-sinh" component={CandidateList} />
                <Route path="/quan-ly-danh-sach-thi-sinh" component={AllCandidates} />
              </Switch>
            </Router>
          </Container>
          <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;



