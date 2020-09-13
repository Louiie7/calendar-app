import React, { useState } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { makeStyles} from '@material-ui/core/styles';
import {Button, Drawer, List, ListItem, ListItemIcon,ListItemText} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  textItem : {
    fontSize : "40px",
    fontFamily : "",
    fontWeight : "100",
    textAlign : "center"
  },
  build : {
    fontSize : "40px",
    top : "0",
    background : "rgb(255, 204, 204)",
    flex : "1",
  },
  activities : {
    fontSize : "40px",
    background : "lightblue",
    flex : "1",
    fontSize : "5vh"
  },
  tasks : {
    fontSize : "40px",
    background : "#E5FFCC",
    flex : "1",
    fontSize : "5vh"
  },
  sidebarList : {
    display : "flex",
    height : "100%",
    flexDirection : "column",
    paddingTop : "0",
    paddingBottom : "0",
    width : "20vw"
  },
}

const useStyles = makeStyles(styles);

function Sidebar(props){
  const [drawer, setDrawer] = useState(false);
  let options = ["Build Schedule", "Activities", "Tasks", "Change Layout"]
  const classes = useStyles();
  console.log(classes);
  return (
    <>
    <Button onClick= {() => setDrawer(true)}>
      <MenuIcon/>
    </Button>
    <Drawer width = {"400px"} anchor={'left'} open={drawer} onClose={() => setDrawer(false)} onOpen={() => setDrawer(true)}>
      <List className={classes.sidebarList}>
          <ListItem button = "true" className = {classes.build}>
            <ListItemText classes={{primary:classes.textItem}} primary={"Build schedule"} />
          </ListItem>
          <ListItem button = "true" className = {classes.activities}>
            <ListItemText classes={{primary:classes.textItem}} primary={"Activites"} />
          </ListItem>
          <ListItem button = "true" className = {classes.tasks}>
            <ListItemText classes={{primary:classes.textItem}} primary ="Tasks"/>
          </ListItem>
      </List>
    </Drawer>
    </>
  );
}

export default Sidebar;
