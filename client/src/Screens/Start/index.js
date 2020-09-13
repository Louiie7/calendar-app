import React from 'react';
import './index.css';

function Start(props){
  return (
    <>
    <div>
      <div className = "container">
        <div className = "loginContainer">
          <div className = "loginText">
            Login
          </div>
          <div className = "loginUsername">
              <input placeholder = "username" type = "text"/>
          </div>
          <div className = "loginPass">
            <input placeholder = "password" className = "loginPass" type = "password"/>
          </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default Start;
