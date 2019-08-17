export default(state = null, action) => {
    switch(action.type) {
        case 'VALUE':
        return action.payload;
    default:
        return state;
    }
}