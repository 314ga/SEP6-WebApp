export default function tempAvgReducer (state = [], action) {
    switch(action.type){
        case 'SETAVGTEMPDATA':
            return action.payload;
        default:
            return state;
    } 
}