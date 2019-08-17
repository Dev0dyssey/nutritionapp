import unsplash from '../api/unsplash';

export const signIn = () => {
    return {
        type: 'SIGN_IN'
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};

export const val = (value) => dispatch => {
    dispatch({type: 'VALUE', payload: value})
}

export const mealName = (value) => dispatch => {
    dispatch({type: 'MEAL_NAME', payload: value})
}

export const getPhotos = value => async dispatch => {
    const response = await unsplash.get('/search/photos', {
        params: {query: value}
    });

    dispatch({ type: 'GET_PHOTOS', payload: response.data.results})
}