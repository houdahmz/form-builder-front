import {combineReducers} from 'redux';
import Settings from './Setting';
import Common from './Common';
// import Profile from './Profile'
const reducers = (history) =>
  combineReducers({
    // router: connectRouter(history),
    settings: Settings,
    common: Common,
    // profile: Profile
   
  });
export default reducers;
