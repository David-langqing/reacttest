import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import DetailUI from "./DetailUI"

const mapState = (state) => {
  return {
    collectTotal: state.getIn(['detail','collectTotal'])
  }
}


class DetailContainer extends Component {
  render() {
    return (
      <Fragment>
        <DetailUI v={this.props.location.state.v} handGoBack={this.handGoBack.bind(this)} handleToHome={this.handleToHome.bind(this)}></DetailUI>
      </Fragment>
        
    )
  }
  handGoBack(){
    this.props.history.goBack()
  }
  handleToHome(){
    this.props.history.push('/home')
  }
}
export default withRouter(connect(mapState)(DetailContainer))
