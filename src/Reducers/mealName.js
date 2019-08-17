export default (state = 'Enter Meal', action) => {
    switch(action.type){
        case 'MEAL_NAME':
        return action.payload;
    default:
        return state;
    }
}