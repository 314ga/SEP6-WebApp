export default function flightsPMSplitReducer(state = [], action) {
    switch (action.type) {
        case 'SETFLIGHTSPPMPERCENT':
            return action.payload;
        default:
            return state;
    }
}