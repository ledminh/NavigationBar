import React from 'react';
import ReactDOM from 'react-dom';

import {createBar} from '../';

const Page = ({name}) => (
  <div>{name}</div>
);

const navBarConfig = {
  position: "bottom",
  buttons: {
    "PAGE 1": <Page name="page 1" />,
    "Page 2": <Page name="page 2" />,
    "Page 3": <Page name="This is page 3" />,
    "page 4": <Page name="page 4" />
  },
  default: "Page 2"
}

const {NavBar, Screen} = createBar(navBarConfig);

const Main = (props) => (
  <div>
      <div className="main-screen">
          {Screen}
      </div>
      {NavBar}
  </div>
);


ReactDOM.render(<Main />, document.getElementById('app'));
