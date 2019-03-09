export const captureMeal = (meal) => {
    return {
        type: 'MEAL_CAPTURE',
        payload: {
            meal: meal,
        }
    };
};