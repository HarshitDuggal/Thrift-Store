import './App.css';
import { useState } from 'react';
import Home from './Pages/Landing/home';
import db from './Data/db.json';
function App() {
  const [data, setdata] = useState(db);
    return (
    <div className="App">
      <Home data = {data}/>
    </div>
  );
}

export default App;
