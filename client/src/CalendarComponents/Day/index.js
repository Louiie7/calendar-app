import React, { useState, useRef, useEffect} from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { makeStyles} from '@material-ui/core/styles';
import {Button, Fab, List, ListItem, ListItemIcon,ListItemText, Modal, TextField, Divider} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';


function Day(props){
  const activityRef = useRef(null);
  const descriptionRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const d = new Date();
  const [date, setDate] = useState(d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate());
  const [activityModal, setActivityModal] = useState(false);
  const [dateContent, setDateContent] = useState("")
  useEffect(() => {
    axios.post('/api/dates/getActivities', {"date" : date})
      .then((res) => {
        let content = [];
        for(let i = 0; i < res.data.length; i++) {
          content.push(
            <li className = "list-item">
              <div className = "start-time">
                {res.data[i][1][0]}
              </div>
              <div className = "activity-text">
                {res.data[i][0].activity}
              </div>
              <div className = "end-time">
                {res.data[i][1][1]}
              </div>
            </li>
          )
        }
        setDateContent(content);
      })
  }, [])
  return (
    <>
    {/* The header is created, by splitting our date into month and date, and then getting the name of the month instead of the numerical expression*/}
    <div className = "day-header">
      {monthList[date.split('-')[1].toString()]+" "+date.split('-')[2]}
    </div>
    <Fab color="secondary" className = "add-activity" onClick = {() => {setActivityModal(true)}}>
      <AddIcon className = "add-icon"> </AddIcon>
    </Fab>
    <Modal open = {activityModal} onClose = {() => {setActivityModal(false)}}>
      <div className = "modal">
        <div className ="modal-header">
          Add an activity
        </div>
        <Divider/>
        <TextField className = "activity-input" id="standard-basic" label="Activity name" inputRef={activityRef}/>
        <TextField className = "description-input" id="standard-multiline-flexible" label="Description" multiline rowsMax={4} helperText = "write a short description" inputRef={descriptionRef}/>
        <TextField className = "start"id="standard-basic" label="Start time" inputRef={startRef}/>
        <TextField className = "end" id="standard-basic" label="End time" inputRef={endRef}/>
        <Button variant="contained" className = "submitActivity" onClick = {() => {
          axios.post('/api/activities/newActivity', {
            "activity" : activityRef.current.value,
            "description" : descriptionRef.current.value
          }).then((res) => {
              axios.post('/api/dates/addActivities', {
                "date" : date,
                "activities" : activityRef.current.value,
                "timespan" : [[startRef.current.value, endRef.current.value]]
              })
                .then((res) => {
                  axios.post('/api/dates/getActivities', {
                    "date" : date
                  })
                  .then((res) => {
                    setActivityModal(false);
                    console.log(res.data);
                    let content = [];
                    for(let i = 0; i < res.data.length; i++) {
                      content.push(
                        <li className = "list-item">
                          <div className = "start-time">
                            {res.data[i][1][0]}
                          </div>
                          <div className = "activity-text">
                            {res.data[i][0].activity}
                          </div>
                          <div className = "end-time">
                            {res.data[i][1][1]}
                          </div>
                        </li>
                      )
                    }
                    setDateContent(content);
                  })
                })
            })
        }}>
        Done
        </Button>

      </div>
    </Modal>
    <div className = "day">
      <div className = "day-content">
        <ul className = "list">
          {dateContent}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Day;
