import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import ProfileUI from './ProfileUI'

class ProfileContainer extends Component {
  render() {
    return (
      <ProfileUI toLogin={this.toLogin.bind(this)}></ProfileUI>
    )
  }
  toLogin() {
    this.props.history.push("/login")
  }
}

export default withRouter(ProfileContainer)