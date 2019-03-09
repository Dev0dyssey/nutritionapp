import {combineReducers} from 'redux';

const mealName = (mealInfo = 'HELLO', action) => {
    if(action.type === 'MEAL_CAPTURE'){
        return action.payload;
    }

    return mealInfo;
}

const mealCal = (mealCal = null, action) => {
    if(action.type === 'MEAL_CAPTURE'){
        return action.payload;
    }

    return mealCal
}

export default combineReducers({
    mealName: mealName,
    mealCal: mealCal
});