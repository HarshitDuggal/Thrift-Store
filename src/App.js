import "./App.css";
import { useState } from "react";
import Home from "./Pages/Landing/home";
import db from "./Data/db.json";
import users from "./Data/users.json"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/login";
// import Navbar from "./Components/Navbar/navbar";

function App() {
  const [data, setdata] = useState(db);
  return (
    // <Router>
    //   <Navbar/>
    //   <div className="App">
    //     <Switch>
    //       <Route exactpath="/" >
    //         <Home data={data} />
    //       </Route>
    //       <Route exactpath="/login" >
    //         <Login />
    //       </Route>
    //     </Switch>
    //     <Home data={data} />
    //   </div>
    // </Router>
    <div className="App">
      <Home data={data} />
      <Login users={users}/>
    </div>
      );
}

export default App;
