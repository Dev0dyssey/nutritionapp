import {combineReducers} from 'redux';

const mealCaputreReducer = (mealInfo = null, action) => {
    if(action.type === 'MEAL_CAPTURE'){
        return action.payload;
    }

    return mealInfo;
}

export default combineReducers({
    mealInfo: mealCaputreReducer
});