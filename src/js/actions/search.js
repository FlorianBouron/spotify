import axios from 'axios';

export const fetchSearch = (search) => {
    if(search !== "") {
        let request = axios.get("https://api.spotify.com/v1/search", {
            params: {
                q: search,
                type: "album,artist,track",
                limit: 4
            }
        });
        return dispatch => {
            request.then(({data}) => {
                dispatch({ type: 'FETCH_SEARCH', payload: data });
            });
        };
    } else {
        return {type: 'FETCH_SEARCH', payload: null };
    }
};