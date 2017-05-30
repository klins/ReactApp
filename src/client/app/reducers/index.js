import messageReducer from './sample-reducer.js';
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
    data : messageReducer
})


/*page :pageReducer
 things : thingReducer
*/