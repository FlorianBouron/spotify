
export default function (state = null, action) {
    switch (action.type) {
        case 'FETCH_SEARCH':
            return action.payload;
            break;
    }
    return state;
}
