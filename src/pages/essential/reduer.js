import {GET_NAV_LIST} from"./actionTypes"
import { fromJS } from "immutable";

const defaultState = fromJS({
    navlists: []
})

export default (state=defaultState,action) => {
    if(action.type ===  GET_NAV_LIST){
        // console.log(action.navlists)
        return state.setIn(['navlists'],fromJS(action.navlists))
        // return {
        //     navlists: [...state.navlists,...action.navlists]
        // }
    }
    return state
}