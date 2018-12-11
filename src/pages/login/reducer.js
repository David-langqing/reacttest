import {IS_LOGIN} from "./actionTypes"
import {LOGIN_STATE} from "./actionTypes"
import { fromJS,setIn,getIn } from "immutable";

const defaultState = fromJS({
    isSignin: false,
    username: ""
})

export default (state = defaultState,action) =>{
    if(action.type === IS_LOGIN){
        let newSignState = state.update("username",value=>action.Uname)
        return fromJS(newSignState)
    }
    if(action.type === LOGIN_STATE){
        let newSignState = state.update("isSignin",value=>!value)
        return fromJS(newSignState)
    }
    return state
}
