export default function planesPerManufacturerReducer(state = [], action) {
    switch (action.type) {
        case 'SETPLANESPERMANUFACTURER':
            return action.payload;
        default:
            return state;
    }
}