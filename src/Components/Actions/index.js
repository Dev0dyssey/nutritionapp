export const captureMeal = (meal, calories) => {
    return {
        type: 'MEAL_CAPTURE'
        payload: {
            meal: meal,
            calories: calories
        }
    };
};