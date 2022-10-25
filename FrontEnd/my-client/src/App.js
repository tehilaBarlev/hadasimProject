import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@mui/material/Box';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ChartCorona from './components/chart'
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
  const [value, setValue] = React.useState(0);

  return (
    <div className="App" className="divNav">
      <Router>
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
          >
            <Link id="linkInDiv" to="/"><BottomNavigationAction label="כל החברים" icon={<PeopleIcon/>}/></Link>
            <Link id="linkInDiv" to="/ChartCorona"><BottomNavigationAction label="גרפים" icon={<EqualizerIcon/>} /></Link>
          </BottomNavigation>
        </Box>
        <br /><br />
        <Switch>
          <Route path="/ChartCorona" exact>
            <ChartCorona/>
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
