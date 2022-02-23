import "./App.css";
import { useState } from "react";
import Home from "./Pages/Landing/home";
import db from "./Data/db.json";
import users from "./Data/users.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/login";
// import Navbar from "./Components/Navbar/navbar";

function App() {
  const [data, setdata] = useState(db);
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="App">
        <Routes>
          {/* <Route exact path="/">
            <Home data={data} />
          </Route> */}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    // <div className="App">
    //   <Home data={data} />
    //   <Login users={users} />
    // </div>
  );
}

export default App;
