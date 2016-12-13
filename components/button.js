import React from 'react';

import {connect} from 'react-redux';
import store from '../redux-store';

const Button = ({name, currentButton, onClick}) => (
  <div className={"button" + ((name === currentButton)? " button-active" : "") } onClick={onClick}>
      {name.toUpperCase()}
  </div>
);

const mapStatesToProps = (store) => ({
    currentButton: store.screen
});

export default connect(mapStatesToProps)(Button);
