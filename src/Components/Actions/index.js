import unsplash from "../../api/unsplash";
import mealdatabase from "../../api/mealdatabase";


export const photoList = (value) => async dispatch => {
        const response = await unsplash.get('/search/photos', {
            params: {query: value}
        });

        dispatch({type: 'IMAGE_LIST', payload: response})
    };

export const nutritionInfo = (term) => async dispatch => {
        const response = await mealdatabase.get(`${term}&app_id=d0c3cf36&app_key=11cf8167af78fde44896a9793debed00`);

        dispatch({type: 'NUTRITION_INFO', payload: response})
    };

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