import React from 'react';
import { Route , Routes } from "react-router-dom";
import Home from './Home';
import Code from './Code';

 const App = () => {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/codepad' element={<Code />}/>
      </Routes>
    </>
  )
}

export default App;