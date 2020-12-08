export default function airbusPerManufacturerReducer(state = [], action) {
    switch (action.type) {
        case 'SETFAIRBUSPERMANUFACTURER':
            return action.payload;
        default:
            return state;
    }
}