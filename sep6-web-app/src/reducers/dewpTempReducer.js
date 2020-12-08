export default function tempReducer (state = [], action) {
    switch(action.type){
        case 'SETDEWPTEMPDATA':
            return action.payload;
        default:
            return state;
    } 
}