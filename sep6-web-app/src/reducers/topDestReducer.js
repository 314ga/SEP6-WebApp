export default function topDestReducer(state = [], action) {
    switch (action.type) {
        case 'SETDESTINATIONS':
            return action.payload;
        default:
            return state;
    }
}