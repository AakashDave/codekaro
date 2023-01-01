import React from 'react';
import { Route , Routes } from "react-router-dom";
import Home from './Home';
import Code from './Code';

 const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' component={Home}/>
        <Route path={process.env.PUBLIC_URL+"/codepad"} component={Code}/>
      </Routes>
    </>
  )
}

export default App;