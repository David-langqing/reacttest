import {APPEND_COLLECT} from "./actionTypes"
import {COLLECT_DEL} from "./actionTypes"
import {CHANGE_CHECKED} from "./actionTypes"
import {ALL_CHECKED} from "./actionTypes"
import {ALL_DEL} from "./actionTypes"


const appendCollect = (v) => {
    return {
        type:APPEND_COLLECT,
        v
    }
}
const DelCollect = (br)=>{
    return {
        type:COLLECT_DEL,
        br
    }
}

const ChangeChecked = (br)=>{
    return {
        type:CHANGE_CHECKED,
        br
    }
}

const ALLChecked = ()=>{
    return {
        type:ALL_CHECKED
    }
}

const AllDel = ()=>{
    return {
        type:ALL_DEL
    }
}

export {
    appendCollect,
    DelCollect,
    ChangeChecked,
    ALLChecked,
    AllDel
}