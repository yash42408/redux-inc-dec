import { combineReducers } from 'redux-immutable';
import ui from './modules/ui';
import notification from './modules/notification';
//import incdec from './modules/incdec';

export default function createReducer() {
  const rootReducer = combineReducers({
    ui,
    notification,
   // incdec
  });

  return rootReducer;
}
