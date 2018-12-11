import {COLLECT_DEL} from "./actionTypes"

import { fromJS,setIn,getIn } from "immutable";

export default (state,action) =>{
    if(action.type === COLLECT_DEL){
       console.log(0)
    }
    return 1    
}