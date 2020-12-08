export default function topDestTableReducer(state = [], action) {
    switch (action.type) {
        case 'SETDESTINATIONSTABLE':
            return action.payload;
        default:
            return state;
    }
}