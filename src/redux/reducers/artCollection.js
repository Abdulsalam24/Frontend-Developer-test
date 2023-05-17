const initial = {
    artCollection: [],
    singleCollection : {},
    filteredCollection: [],
}

export const artCollection = (state = initial, action) => {
    switch (action.type) {
        case "FETCH_COLLECTION":
            return { ...state, artCollection: action.payload, filteredCollection: action.payload };

        case "SINGLE_COLLECTION":
            return { ...state, singleCollection: action.payload };

        case "SEARCH_COLLECTION":
            const filteredArt = state.filteredCollection.filter((art) => art.title.toLowerCase().includes(action.payload.toLowerCase()))
            return { ...state, artCollection: filteredArt };

        default:
            return state;
    }
}
