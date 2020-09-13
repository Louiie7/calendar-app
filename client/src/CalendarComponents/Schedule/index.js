import React from 'react';
import './index.css';
import Day from '../Day'
import Week from '../Week'
import Month from '../Month'

function Schedule(props){
  if(props.mode === "day") {
    return <Day/>;
  }
  else if(props.mode === "week") {
    return <Week/>
  }
  else {
    return <Month/>
  }
}

export default Schedule;
