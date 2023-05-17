import axios from "axios";
import { isError, isLoading } from './loadingError'

export const getArtCollection = () => async (dispatch) => {
    dispatch(isLoading(true))
    try {
        const { data } = await axios.get("https://api.artic.edu/api/v1/artworks");
        dispatch({
            type: "FETCH_COLLECTION",
            payload: data.data
        })
        dispatch(isLoading(false))
    } catch (error) {
        dispatch(isError(error.message))
        dispatch(isLoading(false))

    }
}

export const getSingleCollection = (id) => async (dispatch) => {
    dispatch(isLoading(true))
    try {
        const { data } = await axios.get(`https://api.artic.edu/api/v1/artworks/${id}`);
        dispatch({
            type: "SINGLE_COLLECTION",
            payload: data.data
        })
        dispatch(isLoading(false))
    } catch (error) {
        dispatch(isError(error.message))
        dispatch(isLoading(false))

    }
}

export const searchCollection = (inputValue) => (dispatch) => {
    dispatch({
        type: "SEARCH_COLLECTION",
        payload: inputValue
    })
}
