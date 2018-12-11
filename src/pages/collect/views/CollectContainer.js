import React, { Component } from 'react'
import { connect } from 'react-redux'
import CollectUI from "./CollectUI"
import { DelCollect } from "pages/detail/actionCreator"
import { ChangeChecked } from "pages/detail/actionCreator"
import { ALLChecked } from "pages/detail/actionCreator"
import { AllDel } from "pages/detail/actionCreator"
const mapState = (state) => {
  return {
    navlists: state.getIn(['essential', 'navlists']),
    cartData: state.getIn(['detail', 'cartData'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    handDelDispatch(br) {
      dispatch(DelCollect(br))
    },
    handCheckedDispatch(br) {
      dispatch(ChangeChecked(br))
    },
    ALLCheckedDispatch() {
      dispatch(ALLChecked())
    },
    allDelDispatch(){
      dispatch(AllDel())
    }
  }
}

class CollectContainer extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      cartData: [],
      isAllCheck: true
    })
  }

  render() {
    if (!!this.props.cartData) {
      this.state.cartData = this.props.cartData
    }
    this.iconCheckAll = true

    if (this.state.cartData.size == 0) {
      this.iconCheckAll = false
    } else {
      this.state.cartData.map((v, i) => {
        if (v.get("checked") == false) {
          this.iconCheckAll = false
        }
      })
    }
    // console.log(this.iconCheckAll)

    return (
      <CollectUI iconCheckAll={this.iconCheckAll} handChecked={this.handChecked.bind(this)}
       cartData={this.state.cartData} handDel={this.handDel.bind(this)} allDel={this.allDel.bind(this)}></CollectUI>
    )
  }
  allDel(){
    this.props.allDelDispatch()
  }
  // componentWillReceiveProps(nextProps) {
  //   // console.log(this.state.cartData)
  //   this.setState({
  //     isAllCheck: true
  //   })
  //   if (nextProps.cartData.size == 0) {
  //     this.setState({
  //       isAllCheck: false
  //     })
  //    } 
  //   else {
  //     nextProps.cartData.map((v, i) => {
  //       if (v.get("checked") == false) {
  //         console.log(0)
  //         this.setState({
  //           isAllCheck: false
  //         })
  //       }
  //     })
  //   }
  //   console.log(this.state.isAllCheck)
  //   return 1
  // }
  handDel(br) {
    this.props.handDelDispatch(br)
  }
  handChecked(br) {
    this.props.handCheckedDispatch(br)
  }
}

export default connect(mapState, mapDispatch)(CollectContainer)