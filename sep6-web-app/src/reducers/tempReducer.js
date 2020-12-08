export default function tempReducer (state = [], action) {
    switch(action.type){
        case 'SETTEMPDATA':
            return action.payload;
        default:
            return state;
    } 
}