export default function fligthsPerManufacturerReducer(state = [], action) {
    switch (action.type) {
        case 'SETFLIGHTPERMANUFACTURER':
            return action.payload;
        default:
            return state;
    }
}