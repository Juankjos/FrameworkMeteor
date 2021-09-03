import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Login }  from '/imports/ui/Login';

Meteor.startup(() => {
  render(<Login/>, document.getElementById('react-target'));
});