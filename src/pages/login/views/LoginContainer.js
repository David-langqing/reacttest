import React, { Component } from 'react'
import LoginUI from './LoginUI'
import { withRouter } from 'react-router-dom'


class LoginContainer extends Component {
  render() {
    return (
        <LoginUI handGoBack = {this.handGoBack.bind(this)}></LoginUI>
    )
  }
  handGoBack(){
    this.props.history.goBack()
    // .goback()
  }

}
export default withRouter(LoginContainer)