export default function flightsPMSplitReducer(state = [], action) {
    switch (action.type) {
        case 'SETFLIGHTSPPMSPLIT':
            return action.payload;
        default:
            return state;
    }
}