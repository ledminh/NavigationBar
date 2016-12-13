import React from 'react';

import {renderButtons} from './functions';


require('./style.scss');

//===============
//MAIN COMPONENT
//===============
const NavigationBar = ({style, buttons}) => (
  <div className="navigation-bar" style={style}>
      <div  className="buttons">
        {
          renderButtons(buttons)
        }
      </div>      
  </div>
);


export default NavigationBar;
