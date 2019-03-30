import {combineReducers} from 'redux';

import photoList from './photoList';
import nutrition from './nutrition';

const name = () => {
    return 'Thomas'
}

export default combineReducers({
    photos: photoList,
    nutrition: nutrition,
    user: name
});