import React from 'react';

function verify(){
  var user = document.getElementById("user").value;
  var password = document.getElementById("password").value;

  if(user == 'admin' && password == 'admin'){
    alert("Success")
  }else{
    alert("Fail")
  }
}

export const Login = () => {

  return(
    
    <div id="page1">
      
      <div id="logDiv">
      <h1>Welcome!</h1>
      <h2>Please Login to start</h2>
      </div>
      <div id="leborder"></div>

      <div id="userDiv">
        <label htmlFor="">User: <input id="user" 
        type="text" name="user" 
        placeholder="Enter your User or email"/></label>
      </div>

      <div id="leborder"></div>

      <div id="passDiv">
        <label htmlFor="">Password: <input id="password" 
        type="password" 
        name="password"  
        placeholder="Enter your Password"/></label>
      </div>
      <div id="leborder"></div>
      <div>
          <button id="loginBot" onClick={verify}>Login</button>  
      <div>
       
    </div>
  </div>
  </div>
  )
};