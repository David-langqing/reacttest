import {GET_NAV_LIST} from "./actionTypes"

export const loadDataSync = (navlists)=>{
    return {
        type:GET_NAV_LIST,
        navlists
    }
}

export const loadDataAsync = (dispatch) =>{
    return () =>{
        fetch('/mock/floor.json')
        .then(response => response.json())
        .then(result =>{
            // console.log(result)
            dispatch(loadDataSync(result))
        })
    }
}