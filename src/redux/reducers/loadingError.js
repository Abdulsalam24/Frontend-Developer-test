const initial = {
    isLoading: true,
    isError: ""
}

export const loadingAndError = (state = initial, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return { ...state, isLoading: action.payload };
        case "IS_ERROR":
            return { ...state, isError: action.payload };
        default:
            return state;
    }
}
