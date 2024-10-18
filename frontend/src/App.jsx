import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './assets/components/Navbar/Navbar.jsx';
import Home from './assets/components/Home/Home.jsx';
import Add from './assets/components/Add/Add.jsx';
import Login from './assets/components/Login/Login.jsx';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (

      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </>

  );
}

export default App;
