import {COLLECT_DEL} from "./actionTypes"

export const DelCollect = (br)=>{
    return {
        type:COLLECT_DEL,
        br
    }
}