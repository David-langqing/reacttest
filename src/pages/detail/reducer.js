import { APPEND_COLLECT } from "./actionTypes"
import { COLLECT_DEL } from "./actionTypes"
import { CHANGE_CHECKED } from "./actionTypes"
import { ALL_CHECKED } from "./actionTypes"
import { ALL_DEL } from "./actionTypes"
import { fromJS, setIn, getIn, updateIn } from "immutable";

const defaultState = fromJS({
    cartData: []
})

export default (state = defaultState, action) => {
    //列表页添加
    if (action.type === APPEND_COLLECT) {
        if (state.get("cartData").size === 0) {
            let cartData = state.get("cartData").insert(0, fromJS(action.v))
            return fromJS({ cartData })
        } else {
            var old = false
            let cartData = state.get("cartData").map((val) => {
                if (action.v.brandName === val.getIn(["brandName"])) {
                    old = true
                }
            })
            if (old) {
                let cartData = state.get("cartData")
                return fromJS({ cartData })
            }
            else {
                let cartData = state.get("cartData").insert(0, fromJS(action.v))
                return fromJS({ cartData })
            }
        }
    }
    // 收藏页删除
    if (action.type === COLLECT_DEL) {
        var delId = 0
        state.get("cartData").map((v, i) => {
            if (action.br === v.get("brandName")) {
                delId = i
            }
        }
        )
        let cartData = state.get("cartData").delete(delId)
        return fromJS({ cartData })
    }
    // 收藏页单个反选
    if (action.type === CHANGE_CHECKED) {
        let cartData = state.get("cartData").map((v, i) => {
            if (v.get("brandName") == action.br) {
                return v.update("checked", value => !value)
            } else {
                return v
            }
        })
        return fromJS({ cartData })
    }
    // 没实现，收藏页全选
    if (action.type === ALL_CHECKED) {
        let cartData = state.get("cartData").map((v, i) => {
            console.log(2)
            return v
        })
        return fromJS({ cartData })
    }
    //收藏页，全部删除
    if (action.type === ALL_DEL) {
        let cartData = state.get("cartData").clear()
        return fromJS({ cartData })
    }
    return state
}