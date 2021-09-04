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
    <div>
      
      <div>
      <h1>Login</h1>
      <h2>Please Login to start</h2>
      </div>
      
      <div>
        <label htmlFor="">User <input id="user" 
        type="text" name="user" 
        placeholder="Enter your User or email"/></label>
      </div>
      
    
      <div>
        <label htmlFor="">Password <input id="password" 
        type="password" 
        name="password"  
        placeholder="Enter your Password"/></label>
      </div>

      <div>
          <button onClick={verify}>Login</button>  
      <div>
       
    </div>
  </div>
  </div>
  )
};