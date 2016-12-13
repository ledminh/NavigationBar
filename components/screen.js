import React from 'react';

import {connect} from 'react-redux';
import store from '../redux-store';

import {renderScreen} from '../functions';

const Screen = ({currentScreen, allScreens}) => (
  <div className="screen">
      {
        renderScreen(currentScreen, allScreens)
      }
  </div>
);

const mapStatesToProps = (store) => ({
    currentScreen: store.screen
});

export default connect(mapStatesToProps)(Screen);
