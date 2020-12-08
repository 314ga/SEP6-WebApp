export default function avgAirTimeReducer(state = [], action) {
    switch (action.type) {
        case 'SETAVGAIRTIME':
            return action.payload;
        default:
            return state;
    }
}