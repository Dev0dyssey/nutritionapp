import axios from 'axios';

//.create INITIALIZES AN AXIOS INSTANCE WITH SEVERAL DEFAULT PROPERTIES
export default axios.create({
    // TAKEN FROM THE API; BASIC URL ONTO WHICH THE SEARCH PARAMS ARE FURTHER ATTACHED
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 606fbeca3eececc0b6b5e9f08f2a54c08a036676119a297c3b9e887c7f3aabff'
    }
});

