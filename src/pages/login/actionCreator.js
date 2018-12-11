import {IS_LOGIN} from "./actionTypes"
import {LOGIN_STATE} from "./actionTypes"

export const ChangeLoginState = (Uname)=>{
    return {
        type:IS_LOGIN,
        Uname
    }
}

export const ChangeState = ()=>{
    return {
        type:LOGIN_STATE
    }
}
