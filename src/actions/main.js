import { FETCH_REGIONS ,ERROR_REQUEST} from './index.js';
import axios from 'axios';
export const fetchRegions = (region) => (dispatch) => {
    axios.get("https//restcountries.com/v3.1/region/"+region)
        .then(res => {
            console.log("data", res.data)
            dispatch(get(res.data));
        })
        .catch((error) =>{
            dispatch(fetchError());
            alert("ERROR:404_NOT_FOUND",error)
        });
}
const get = (countries) => {
    return {
        type: FETCH_REGIONS,
        payload: countries
    }
}
const fetchError = (error) =>{
    return {
        type: ERROR_REQUEST,
        payload:error
    }
}