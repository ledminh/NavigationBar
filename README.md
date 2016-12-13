# NavigationBar

###Introduction
A customizable navigation bar for your website using React.

###Usage

*Clone this project: `git clone https://github.com/ledminh/NavigationBar`

*Install all dependencies: `npm install`

*cd to test to check it out:

```
cd test
webpack-dev-server --hot --inline --color --process
```

The demo will be at http:\\localhost:8080

####To use the Navigation Bar

```
import React from 'react';
import ReactDOM from 'react-dom';

import {createBar} from './navigation-bar'; //change to your navigation bar directory here

//An example page to test navigation
const Page = ({name}) => (
  <div>{name}</div>
);


const navBarConfig = {
  position: "bottom", //position can be "bottom" or "top"
  buttons: {
    "PAGE 1": <Page name="page 1" />,
    "Page 2": <Page name="page 2" />,
    "Page 3": <Page name="This is page 3" />,
    "page 4": <Page name="page 4" />
  },
  default: "Page 2"
}

const {NavBar, Screen} = createBar(navBarConfig); //NavBar and Screen are React elements readily to be added to your web

const Main = (props) => (
  <div>
      <div className="main-screen">
          {Screen}
      </div>
      {NavBar}
  </div>
);


ReactDOM.render(<Main />, document.getElementById('app'));
```
