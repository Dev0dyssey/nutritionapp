import {combineReducers} from 'redux';

import photoList from './photoList';
import nutrition from './nutrition';
import googleAuth from './googleAuth';

const name = () => {
    return 'Thomas'
}

export default combineReducers({
    photos: photoList,
    nutrition: nutrition,
    user: name,
    auth: googleAuth
});