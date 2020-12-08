export default function arrivalDelayReducer(state = [], action) {
    switch (action.type) {
        case 'SETARRIVALDELAY':
            return action.payload;
        default:
            return state;
    }
}