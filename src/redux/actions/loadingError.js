export const isLoading = (loading) => (dispatch) => {
    dispatch({
        type: "IS_LOADING",
        payload: loading
    })
}

export const isError = (errorMsg) => (dispatch) => {
    dispatch({
        type: "IS_ERROR",
        payload: errorMsg
    })

}