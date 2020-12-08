export default function fligthsPMStackedReducer(state = [], action) {
    switch (action.type) {
        case 'SETFLIGHTPERMONTHSTACKED':
            return action.payload;
        default:
            return state;
    }
}