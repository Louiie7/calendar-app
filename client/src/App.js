import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Start from './Screens/Start'
import Home from './Screens/Home'

function App() {
  return (
    <>
    <BrowserRouter>
      <Route exact path={"/"}>
        <Start/>
      </Route>
      <Route path={"/home"}>
        <Home/>
      </Route>
    </BrowserRouter>
    </>
  );
}

export default App;
