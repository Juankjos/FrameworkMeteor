import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../ui/Login.js';
import Content from '../ui/Content';

function Redirects() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/content" component={Content}/>
        </Switch>
      </BrowserRouter>
    );
  }
export default Redirects;