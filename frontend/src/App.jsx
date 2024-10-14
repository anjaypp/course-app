import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './assets/components/Navbar/Navbar.jsx';
import Home from './assets/components/Home/Home.jsx';
import Add from './assets/components/Add/Add.jsx';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/add' element={<Add />} />
        {/* You can add more routes here if needed */}
        {/* Example of nested routes */}
      </Routes>
    </>
  );
}

export default App;
