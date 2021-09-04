import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import '../CSS/main.css';


class Login extends Component{

  state={
    form:{
      user:'',
      password:''
    }
  }

  handleChange=async lechange=>{
   await this.setState({
      form:{
        ...this.state.form,
        [lechange.target.name]: lechange.target.value
      }
    });
    console.log(this.state.form);
  }

  render(){
  return(
    <div id="page1">
      
      <div id="logDiv">
      <h1>Welcome!</h1>
      <h2>Please Login to start</h2>
      </div>
      <div id="leborder"></div>

      <div id="userDiv">
        <label>User: <input id="user" 
        class="form-control"
        type="text" 
        name="user"
        onChange={this.handleChange}
        placeholder="Enter your User or email"/></label>
      </div>

      <div id="leborder"></div>

      <div id="passDiv">
        <label>Password: <input id="password" 
        class="form-control"
        type="password" 
        name="password"
        onChange={this.handleChange}  
        placeholder="Enter your Password"/></label>
      </div>
      <div id="leborder"></div>
      <div>
          <button id="loginBut" class="btn btn-light" >Login</button>  
      <div>
       
    </div>
  </div>
  </div>
  );
}
}
export default Login;