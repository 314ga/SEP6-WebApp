export default function flightsPerMonthReducer(state = [], action) {
    switch (action.type) {
        case 'SETFLIGHTSPERMONTH':
            return action.payload;
        default:
            return state;
    }
}