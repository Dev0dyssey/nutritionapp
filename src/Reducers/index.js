import {combineReducers} from 'redux';

const mealName = (mealInfo = null, action) => {
    if(action.type === 'MEAL_CAPTURE'){
        return mealInfo = action.payload.meal;
    }

    return mealInfo;
}

const mealCal = (mealCal = null, action) => {
    if(action.type === 'MEAL_CAPTURE'){
        return action.payload;
    }

    return mealCal
}

const commentReducer = (comment = null, action) => {
    if(action.type === 'ADD_COMMENT'){
        return action.payload
    }

    return comment
}

export default combineReducers({
    mealName: mealName,
    mealCal: mealCal,
    comment: commentReducer
});