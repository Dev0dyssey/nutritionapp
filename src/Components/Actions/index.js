export const captureMeal = (meal) => {
    return {
        type: 'MEAL_CAPTURE',
        payload: {
            meal: meal,
        }
    };
};

export const comment = (text) => {
    return {
        type: 'ADD_COMMENT',
        payload: {
            comment: text
        }
    };
};