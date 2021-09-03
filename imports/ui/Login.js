import React, {useState} from 'react';


function initialState(){
  return { user: '', password: ''};
}


export const Login = () => {
  /*I set the values for the fields*/
 const [values, setValues] = useState(initialState);

 /*Set the values to get data in the input*/
 function onChange(event){
   const {value, name} = event.target;

   setValues(
     {
       ...values,
       [name]:value
     }
   );
 }


  return(
    <div>
      
      <div>
      <h1>Login</h1>
      <h2>Please Login to start</h2>
      </div>
      
      <div>
        <label htmlFor="">User <input id="user" 
        type="text" name="user" 
        onChange={onChange} 
        value={values.user} 
        placeholder="Enter your User or email"/></label>
      </div>
      
    
      <div>
        <label htmlFor="">Password <input id="password" 
        type="password" 
        name="password" 
        onChange={onChange} 
        value={values.password} 
        placeholder="Enter your Password"/></label>
      </div>

      <div>
          <button type="submit" >Login</button>  
      <div>
       
    </div>
  </div>
  </div>
  )
};