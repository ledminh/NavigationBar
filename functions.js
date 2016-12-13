import React from 'react';
import Button from './components/button';

import store from './redux-store';

export function getStyle(position){
  var style = {};
  switch(position.toLowerCase()){
    case "top":
      style = {
        top: "0px",
        left: "0px"
      }
      break;

    case "bottom":
      style = {
        bottom: "0px",
        left: "0px"
      }
      break;
  }

  return style;
}

export const renderButtons = (buttons) => buttons.map((btn, i) => <Button key={i} name={btn} onClick={buttonOnClick(btn)} />);

export const getButtonsName = (buttonsObj) => {
  var results = [];

  Object.keys(buttonsObj).forEach((button) => {
    results.push(button);
  });


  return results;
}

export function renderScreen(currentScreen, allScreens){
    return (currentScreen !== "")? allScreens[currentScreen] : "";
}


export function changeScreen(btn){
  store.dispatch({
    type: "CHANGE-SCREEN",
    screen: btn
  });
}

//===================
//HELPERS
//===================

function buttonOnClick(btn){
  return (e) => {
    changeScreen(btn);
  }
}
