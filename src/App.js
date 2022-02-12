import './App.css';
import { useState } from 'react';
import Home from './Pages/Landing/home';
import db from './Data/db.json';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from './Components/Login/login';
import Navbar from './Components/Navbar/navbar';
function App() {
  const [data, setdata] = useState(db);
    return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route path='/' exact>
            <Home data = {data}/>
          </Route>
          <Route path='/login' exact>
            <Login/>
          </Route>
        </Switch>
      {/* <Home data = {data}/> */}
      </div>
    </Router>
  );
}

export default App;