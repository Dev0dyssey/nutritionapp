import {combineReducers} from 'redux';

import photoList from './photoList';
import nutrition from './nutrition';

export default combineReducers({
    photos: photoList,
    nutrition: nutrition
});