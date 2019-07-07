import {combineReducers} from 'redux';

import googleAuth from './googleAuth';
import mealName from './mealName';
import value from './ValueRed';
import unsplash from './unsplash';

const name = () => {
    return 'Thomas'
}

export default combineReducers({
    user: name,
    auth: googleAuth,
    meal: mealName,
    val: value,
    img: unsplash
});