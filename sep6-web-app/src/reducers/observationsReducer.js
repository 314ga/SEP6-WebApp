export default function observationsReducer (state = [], action) {
    switch(action.type){
        case 'SETOBSERVATIONDATA':
            return action.payload;
        default:
            return state;
    } 
}