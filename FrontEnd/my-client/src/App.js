import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Clients from './components/Clients';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));



function App() {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className="App">
      <Router>
        <ul class="ulNav">
          <Link id="linkInDiv" to="/"><BottomNavigationAction label="Recents" value="recents" />כל החברים</Link>
          <Link id="linkInDiv" to="/grafs"><BottomNavigationAction label="Nearby" value="nearby" />גרפים</Link>
        </ul>
        <br /><br />
        <Switch>
          <Route path="/grafs" exact>
            <span>בהמשך בעז"ה אציג כאן גרפים של סיכום</span>
          </Route>
          <Route path="/" exact>
            <Clients />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
