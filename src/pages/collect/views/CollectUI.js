import React, { Component } from 'react'
import {
  CollectWrap,
  CollectHeader,
  CollectMain,
  CollectMainTop,
  CollectMainItemWrap,
  CollectMainItem,
  CollectCheckAll,
  Inputchecked,
  InputCheckedAll
} from "./styledComponents"
class CollectUI extends Component {
  render() {
    return (
      <CollectWrap>
        <CollectHeader>
          <h3>我的收藏</h3>
        </CollectHeader>
        <CollectMain>
          <CollectMainTop>
            <div className="collectMainTopLeft">
              <span>名称</span>
            </div>
            <div className="collectMainTopRight">
              <span>操作</span>
            </div>
          </CollectMainTop>
          <CollectMainItemWrap>
            {
              this.props.cartData.map((v, i) => {
                return (
                  <CollectMainItem key={i}>
                    <div className="itemLeft" >
                      <Inputchecked checked={v.get("checked")}
                        onClick={() => this.props.handChecked(v.get("brandName"))}>
                      </Inputchecked>
                    </div>
                    <div className="itemMain">
                      <img src={v.get("shopPhoto")} alt="" />
                      <div>
                        <span>{v.get("brandName")}</span>
                        <p>地点：<span>{v.get("cityName")}</span></p>
                      </div>
                    </div>
                    <div className="itemRight" onClick={() => this.props.handDel(v.get("brandName"))}>x</div>
                  </CollectMainItem>
                )
              })
            }
            <CollectCheckAll>
              <div className="checkallLeft">
                <span>
                  <InputCheckedAll iconCheckAll= {this.props.iconCheckAll}></InputCheckedAll>
                  全选
                </span>
              </div>
              <div className="checkallRight" onClick={() => this.props.allDel()}>
                <span>
                  删除
                </span>
              </div>
            </CollectCheckAll>
          </CollectMainItemWrap>
        </CollectMain>
      </CollectWrap>
    )
  }
  componentDidMount(){
    // console.log(this.props.iconCheckAll)
  }
}
export default CollectUI
