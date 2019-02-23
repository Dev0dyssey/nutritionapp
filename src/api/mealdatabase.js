import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.edamam.com/api/food-database/parser?ingr='
});
