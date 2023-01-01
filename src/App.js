import React from 'react';
import { Route , Routes } from "react-router-dom";
import Home from './Home';
import Code from './Code';

 const App = () => {

  return (
    <>
      <Routes>
        <Route exact path="/" component={Home}/>
        <Route path="/codepad" component={Code}/>
      </Routes>
    </>
  )
}

export default App;