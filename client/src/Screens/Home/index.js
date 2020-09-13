import React, { useState } from 'react';
import './index.css';
import Schedule from '../../CalendarComponents/Schedule';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar'
/*
background: rgb(188,219,200);
background: linear-gradient(0deg, rgba(188,219,200,1) 0%, rgba(230,244,235,1) 42%, rgba(255,255,255,1) 100%);

background: rgb(252,157,157);
background: linear-gradient(0deg, rgba(252,157,157,1) 0%, rgba(255,230,230,1) 42%, rgba(255,255,255,1) 100%);
*/
function Home(props){
  const [mode, setMode] = useState("day");
  return (
    <>
    <div className ="home-background">
      <Sidebar/>
      <div className = "view">
        <div className = "content">
          <div>
            <Schedule mode = {mode} />
          </div>
        </div>
        <ul className = "modeMenu">
          <li className = "modeSelect" onClick = {()=> setMode("day")}>Day</li>
          <li className = "modeSelect" onClick = {()=> setMode("week")}> Week </li>
          <li className = "modeSelect" onClick = {()=> setMode("month")}> Month </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Home;
