import React from 'react';

import NavBarComponent from './navigation-bar';
import ScreenComponent from './screen';

import store from './redux-store';

import {Provider} from 'react-redux';

import {getStyle, getButtonsName, changeScreen} from './functions';

export function createBar(navBarConfig){
    var style = getStyle(navBarConfig.position);
    var buttons = getButtonsName(navBarConfig.buttons);

    const NavBar = <Provider store={store}><NavBarComponent style={style} buttons={buttons}/></Provider>;
    const Screen = <Provider store={store}><ScreenComponent allScreens={navBarConfig.buttons}  /></Provider>

    changeScreen(navBarConfig.default);

    return {
      NavBar,
      Screen
    }
}
