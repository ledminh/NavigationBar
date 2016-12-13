import {combineReducers, createStore} from 'redux';

const screen = (state="", action) => {
    if(action.type === "CHANGE-SCREEN"){
      return action.screen;
    }

    return state;
}

const reducers = combineReducers({
  screen
});

const store = createStore(reducers)

export default store;
